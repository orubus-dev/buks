package app.orubus.buks.util

import androidx.compose.runtime.Immutable
import app.orubus.buks.BaseApplication.Companion.getKey
import app.orubus.buks.BookDownloader2Helper.IMPORT_SOURCE
import app.orubus.buks.BookDownloader2Helper.IMPORT_SOURCE_PDF
import app.orubus.buks.EPUB_CURRENT_POSITION
import app.orubus.buks.RESULT_BOOKMARK
import app.orubus.buks.ui.UiImage
import app.orubus.buks.ui.img

@Immutable
data class ResultCached(
    val source : String,
    val name: String,
    val apiName : String,
    val id : Int,
    val author : String?,
    val poster: String?,
    val tags : List<String>?,
    val rating : Int?,
    val totalChapters : Int,
    val cachedTime : Long, // milliseconds
    val synopsis : String? = null,
    val posterHeaders : Map<String,String>? = null,
) {
    val isImported: Boolean get() = (apiName == IMPORT_SOURCE || apiName == IMPORT_SOURCE_PDF)

    val image : UiImage? get() = img(poster)

    override fun hashCode(): Int {
        return id
    }
    val currentTotalChapters:Int get() = (
            getKey(RESULT_BOOKMARK, this.id.toString()) as? ResultCached
            )?.totalChapters ?: totalChapters
    val lastChapterRead:Int get() = getKey<Int>(EPUB_CURRENT_POSITION, this.name)?.let{it+1}?:0
}