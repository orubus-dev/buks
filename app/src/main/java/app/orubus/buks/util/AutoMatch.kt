package app.orubus.buks.util

import app.orubus.buks.MainAPI
import app.orubus.buks.SearchResponse
import app.orubus.buks.plugins.JsMangaSource
import app.orubus.buks.util.Apis.Companion.getApiSettings
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.withContext
import me.xdrop.fuzzywuzzy.FuzzySearch

/**
 * Auto match finding for imported books: cleans a file title, searches the
 * active novel sources concurrently and ranks candidates by fuzzy similarity.
 */
object AutoMatch {

    data class Match(val api: MainAPI, val response: SearchResponse, val score: Int)

    /** "A Monster Who Levels Up - Copy.epub" -> "A Monster Who Levels Up" */
    fun cleanTitle(raw: String): String {
        var t = raw.substringBeforeLast('.')
        t = t.replace('_', ' ')
        t = t.replace(Regex("\\[(.*?)]|\\((.*?)\\)"), " ")
        t = t.replace(Regex("\\b(copy|dup|backup|final|new)\\b", RegexOption.IGNORE_CASE), " ")
        t = t.replace(Regex("\\s+"), " ").trim(' ', '-', '.')
        return t
    }

    suspend fun findMatches(
        context: android.content.Context,
        title: String,
        maxSources: Int = 14,
    ): List<Match> = withContext(Dispatchers.IO) {
        val query = cleanTitle(title)
        if (query.isBlank()) return@withContext emptyList()
        val active = context.getApiSettings()
        val apis = Apis.apis
            .filter { it.name in active && it.lang == "en" && it !is JsMangaSource }
            .take(maxSources)
        coroutineScope {
            apis.map { api ->
                async {
                    runCatching {
                        api.search(query)?.firstOrNull()?.let { api to it }
                    }.getOrNull()
                }
            }.awaitAll().filterNotNull()
        }
            .mapNotNull { (api, res) ->
                val score = maxOf(
                    FuzzySearch.ratio(query.lowercase(), res.name.lowercase()),
                    FuzzySearch.partialRatio(query.lowercase(), res.name.lowercase()),
                )
                if (score >= 80) Match(api, res, score) else null
            }
            .sortedByDescending { it.score }
            .take(5)
    }
}
