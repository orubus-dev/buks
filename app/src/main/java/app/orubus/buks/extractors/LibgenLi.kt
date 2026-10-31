package app.orubus.buks.extractors

import androidx.annotation.WorkerThread
import app.orubus.buks.DownloadExtractLink
import app.orubus.buks.DownloadLink
import app.orubus.buks.DownloadLinkType
import app.orubus.buks.get

class LibgenLi : ExtractorApi() {
    override val mainUrl = "https://libgen.li"
    override val name = "LibgenLi"
    override val requiresReferer = false

    @WorkerThread
    override suspend fun getUrl(link : DownloadExtractLink): List<DownloadLinkType>? {
        val document = link.get().document
        val url = fixUrlNull(document.selectFirst("tbody>tr>td>a")?.attr("href"))
        return listOf(
            DownloadLink(
                url = url ?: return null,
                name = name,
                kbPerSec = 200
            )
        )
    }
}