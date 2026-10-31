package app.orubus.buks.plugins

import app.orubus.buks.ChapterData
import app.orubus.buks.HeadMainPageResponse
import app.orubus.buks.LoadResponse
import app.orubus.buks.MainAPI
import app.orubus.buks.SearchResponse
import app.orubus.buks.newChapterData
import app.orubus.buks.newSearchResponse
import app.orubus.buks.newStreamResponse
import app.orubus.buks.setStatus
import com.fasterxml.jackson.databind.JsonNode

/**
 * Bridges an installed JS plugin into the app's normal source pipeline.
 *
 * Novel plugins implement the LNReader method set:
 *   popularNovels(page, {showLatestNovels}), searchNovels(term, page, filters),
 *   parseNovel(path), parseChapter(path)
 *
 * Manga plugins implement the Mihon-style set:
 *   popularManga(page), searchManga(term, page), mangaDetails(path),
 *   chapterList(path), pageList(chapterPath)
 */
abstract class JsPluginSource(
    protected val record: InstalledPluginRecord,
) : MainAPI() {
    override val name: String = record.meta.name
    override val mainUrl: String = record.meta.baseUrl
    override val lang: String = record.meta.lang
    override val hasMainPage = true
    override val orderBys: List<Pair<String, String>> =
        listOf("Popular" to "popular", "Latest" to "latest")

    private val siteBase: String = mainUrl.trimEnd('/')

    protected fun bookUrl(path: String): String =
        if (path.startsWith("http://") || path.startsWith("https://")) path
        else siteBase + (if (path.startsWith("/")) "" else "/") + path

    protected fun pathFrom(url: String): String =
        if (url.startsWith(siteBase)) url.substring(siteBase.length) else url

    protected suspend fun callJs(method: String, vararg args: Any?): JsonNode {
        val argsJson = jsMapper.writeValueAsString(args.toList())
        val raw = JsPluginEngine.call(record.meta, record.code(), method, argsJson)
        val node = jsMapper.readTree(raw)
        node.get("__buksError")?.let {
            throw PluginScriptException("${record.meta.id}.$method failed: ${it.asText()}")
        }
        return node
    }

    private fun listNode(node: JsonNode, key: String): List<JsonNode> {
        val inner = node.get(key)
        val arr = when {
            inner != null && inner.isArray -> inner
            node.isArray -> node
            else -> return emptyList()
        }
        return arr.toList()
    }

    private fun JsonNode.textOf(vararg names: String): String? {
        for (n in names) {
            val v = get(n)
            if (v != null && !v.isNull) return v.asText()
        }
        return null
    }

    protected fun toSearchResponses(node: JsonNode, key: String): List<SearchResponse> =
        listNode(node, key).mapNotNull { n ->
            val name = n.textOf("name", "title") ?: return@mapNotNull null
            val path = n.textOf("path", "slug", "url") ?: return@mapNotNull null
            newSearchResponse(name, bookUrl(path), fix = false) {
                posterUrl = n.textOf("cover", "poster", "coverUrl")
            }
        }

    // ------------------------------------------------- novel API

    override suspend fun loadMainPage(
        page: Int,
        mainCategory: String?,
        orderBy: String?,
        tag: String?
    ): HeadMainPageResponse {
        val node = if (record.meta.capabilities.pages) {
            callJs("popularManga", page)
        } else {
            callJs("popularNovels", page, mapOf("showLatestNovels" to (orderBy == "latest")))
        }
        return HeadMainPageResponse(mainUrl, toSearchResponses(node, "novels").ifEmpty { toSearchResponses(node, "mangas") })
    }

    override suspend fun search(query: String): List<SearchResponse>? {
        val node = if (record.meta.capabilities.pages) {
            callJs("searchManga", query, 1, null)
        } else {
            callJs("searchNovels", query, 1, null)
        }
        return toSearchResponses(node, "novels").ifEmpty { toSearchResponses(node, "mangas") }
    }

    override suspend fun load(url: String): LoadResponse {
        val path = pathFrom(url)
        val node = if (record.meta.capabilities.pages) {
            val details = callJs("mangaDetails", path)
            val chapters = runCatching { callJs("chapterList", path) }.getOrNull()
            buildDetails(details, url, chapters)
        } else {
            buildDetails(callJs("parseNovel", path), url, null)
        }
        return node
    }

    private suspend fun buildDetails(
        node: JsonNode,
        url: String,
        chaptersOverride: JsonNode?,
    ): LoadResponse {
        val name = node.textOf("name", "title") ?: url.substringAfterLast('/')
        val chapterNodes = when {
            chaptersOverride != null -> listNode(chaptersOverride, "chapters")
            else -> listNode(node, "chapters")
        }
        val data = chapterNodes.mapNotNull { c ->
            val cName = c.textOf("name", "title", "chapterName") ?: return@mapNotNull null
            val cPath = c.textOf("path", "url", "slug") ?: return@mapNotNull null
            newChapterData(cName, bookUrl(cPath), fix = false) {
                dateOfRelease = c.textOf("releaseTime", "releaseDate", "date")
            }
        }
        return newStreamResponse(name, url, data, fix = false) {
            author = node.textOf("author", "authors")
            posterUrl = node.textOf("cover", "poster", "coverUrl")
            synopsis = node.textOf("description", "synopsis", "summary")
            tags = node.get("genres")?.let { g -> g.takeIf { it.isArray }?.map { it.asText() } }
                ?: node.get("tags")?.let { t -> t.takeIf { it.isArray }?.map { it.asText() } }
            setStatus(node.textOf("status"))
        }
    }

    override suspend fun loadHtml(url: String): String {
        val node = callJs("parseChapter", pathFrom(url))
        return node.textOf("text", "content", "chapterText", "rawText") ?: ""
    }

    companion object {
        val jsMapper = com.fasterxml.jackson.module.kotlin.jacksonObjectMapper()
    }
}

/** Novel plugin source (LNReader method set). */
class JsNovelSource(record: InstalledPluginRecord) : JsPluginSource(record)

/** Manga plugin source — serves image page lists for the manga reader. */
class JsMangaSource(record: InstalledPluginRecord) : JsPluginSource(record) {
    override suspend fun loadPages(url: String): List<String> {
        val node = callJs("pageList", pathFrom(url))
        return when {
            node.isArray -> node.mapNotNull { if (it.isTextual) it.asText() else null }
            else -> node.get("pages")?.let { p ->
                if (p.isArray) p.mapNotNull { if (it.isTextual) it.asText() else null } else emptyList()
            } ?: emptyList()
        }
    }
}
