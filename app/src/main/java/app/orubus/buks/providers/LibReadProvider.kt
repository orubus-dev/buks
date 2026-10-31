package app.orubus.buks.providers

import com.fasterxml.jackson.annotation.JsonProperty
import app.orubus.buks.ChapterData
import app.orubus.buks.HeadMainPageResponse
import app.orubus.buks.LoadResponse
import app.orubus.buks.MainAPI
import app.orubus.buks.R
import app.orubus.buks.SearchResponse
import app.orubus.buks.USER_AGENT
import app.orubus.buks.UserReview
import app.orubus.buks.fixUrlNull
import app.orubus.buks.newChapterData
import app.orubus.buks.newReview
import app.orubus.buks.newSearchResponse
import app.orubus.buks.newStreamResponse
import app.orubus.buks.setStatus
import org.jsoup.Jsoup
import org.jsoup.nodes.Document

open class LibReadProvider : FreewebnovelProvider() {
    override val name = "LibRead"
    override val mainUrl = "https://libread.com"
    //for some reason, now is freewebnovel
    override val secondUrl = "https://freewebnovel.com"
    override val hasMainPage = true

    override val removeHtml = false

    override val iconId = R.drawable.icon_libread

    override val iconBackgroundId = R.color.libread_header_color
    override val rateLimitTime = 1000L
    override val orderBys = listOf(
        "Latest Release" to "latest-release",
        "Latest Novels" to "latest-novel",
        "Completed Novels" to "completed-novel"
    )


    override fun getAcode(url:String): String = url.substringAfterLast("/").substringBeforeLast("-")

    override suspend fun loadMainPage(
        page: Int,
        mainCategory: String?,
        orderBy: String?,
        tag: String?
    ): HeadMainPageResponse {
        val url =
            if (tag.isNullOrBlank()) "$mainUrl/sort/${orderBy ?: "latest-release"}/$page" else "$mainUrl/genre/$tag/$page"
        val document = app.get(url).document
        val headers = document.select("div.ul-list1.ul-list1-2.ss-custom > div.li-row")
        val returnValue = headers.mapNotNull { h ->
            val h3 = h.selectFirst("h3.tit > a") ?: return@mapNotNull null
            newSearchResponse(
                name = h3.attr("title"),
                url = h3.attr("href") ?: return@mapNotNull null
            ) {
                posterUrl = fixUrlNull(h.selectFirst("div.pic > a > img")?.attr("src"))
                latestChapter = h.select("div.item")[2].selectFirst("> div > a")?.text()
            }
        }
        return HeadMainPageResponse(url, returnValue)
    }

    override suspend fun search(query: String): List<SearchResponse> {
        val document = app.post(
            "$mainUrl/search",
            headers = mapOf(
                "referer" to mainUrl,
                "x-requested-with" to "XMLHttpRequest",
                "content-type" to "application/x-www-form-urlencoded",
                "accept" to "*/*",
                "user-agent" to USER_AGENT
            ),
            data = mapOf("searchkey" to query)
        ).document

        return document.select("div.li-row > div.li > div.con").mapNotNull { h ->
            val h3 = h.selectFirst("div.txt > h3.tit > a") ?: return@mapNotNull null

            newSearchResponse(
                name = h3.attr("title") ?: return@mapNotNull null,
                url = h3.attr("href") ?: return@mapNotNull null
            ) {
                posterUrl = fixUrlNull(h.selectFirst("div.pic img")?.attr("src"))
                //latestChapter = h.select("div.item")[2].selectFirst("> div > a")?.text()
            }
        }
    }

    data class LibReadCommentsResponse(
        @JsonProperty("data") val data: LibReadCommentData? = null
    )

    data class LibReadCommentData(
        @JsonProperty("is_end") val isEnd: Boolean? = null,
        @JsonProperty("data_list") val dataList: List<LibReadCommentItem>? = null
    )

    data class LibReadCommentItem(
        @JsonProperty("content") val content: String? = null,
        @JsonProperty("created_at") val createdAt: String? = null,
        @JsonProperty("user_info") val userInfo: LibReadUserInfo? = null
    )

    data class LibReadUserInfo(
        @JsonProperty("nickname") val nickname: String? = null,
        @JsonProperty("picture") val picture: String? = null
    )

    data class ChaptersResponse(
        @JsonProperty("html") val html: String
    )
}