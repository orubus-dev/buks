package app.orubus.buks.ui.manga

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import app.orubus.buks.DataStore.getKey
import app.orubus.buks.DataStore.setKey
import app.orubus.buks.EPUB_CURRENT_POSITION
import app.orubus.buks.MANGA_READER_MODE
import app.orubus.buks.StreamResponse
import app.orubus.buks.util.Apis
import coil3.compose.AsyncImage
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

/**
 * Image reader for manga plugin sources. Modes: vertical webtoon strip,
 * paged LTR, paged RTL (manga). Progress is stored with the same keys the
 * novel reader uses, so history/library resume works.
 */
class MangaReaderActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val bookUrl = intent.getStringExtra(BOOK_URL) ?: ""
        val apiName = intent.getStringExtra(API_NAME) ?: ""
        val startIndex = intent.getIntExtra(CHAPTER_INDEX, -1)
        setContent {
            MaterialTheme {
                MangaReaderScreen(bookUrl, apiName, startIndex)
            }
        }
    }

    companion object {
        private const val BOOK_URL = "book_url"
        private const val API_NAME = "api_name"
        private const val CHAPTER_INDEX = "chapter_index"

        fun newIntent(context: Context, bookUrl: String, apiName: String, chapterIndex: Int): Intent =
            Intent(context, MangaReaderActivity::class.java)
                .putExtra(BOOK_URL, bookUrl)
                .putExtra(API_NAME, apiName)
                .putExtra(CHAPTER_INDEX, chapterIndex)
    }
}

private enum class MangaMode(val label: String) { WEBTOON("Webtoon"), LTR("Paged"), RTL("RTL") }

@Composable
private fun MangaReaderScreen(bookUrl: String, apiName: String, startIndex: Int) {
    val context = LocalContext.current

    var loading by remember { mutableStateOf(true) }
    var error by remember { mutableStateOf<String?>(null) }
    var stream by remember { mutableStateOf<StreamResponse?>(null) }
    var chapterIndex by remember { mutableIntStateOf(if (startIndex >= 0) startIndex else 0) }
    var pages by remember { mutableStateOf<List<String>>(emptyList()) }
    var pagesLoading by remember { mutableStateOf(false) }
    var mode by remember { mutableStateOf(MangaMode.WEBTOON) }
    var chromeVisible by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        mode = runCatching {
            MangaMode.valueOf(context.getKey<String>(MANGA_READER_MODE) ?: MangaMode.WEBTOON.name)
        }.getOrDefault(MangaMode.WEBTOON)
        loading = true
        withContext(Dispatchers.IO) {
            runCatching {
                val api = Apis.getApiFromNameNull(apiName)
                    ?: throw IllegalStateException("Unknown source $apiName")
                api.load(bookUrl) as? StreamResponse
                    ?: throw IllegalStateException("Not a manga chapter list")
            }.onSuccess { stream = it }.onFailure { error = it.message ?: "Load failed" }
            loading = false
        }
    }

    // continue-reading index once the chapter list is available
    LaunchedEffect(stream) {
        val s = stream ?: return@LaunchedEffect
        if (startIndex < 0) {
            val saved = context.getKey<Int>(EPUB_CURRENT_POSITION, s.name)
            if (saved != null && saved in s.data.indices) chapterIndex = saved
        }
    }

    LaunchedEffect(stream, chapterIndex) {
        val s = stream ?: return@LaunchedEffect
        if (chapterIndex !in s.data.indices) return@LaunchedEffect
        pagesLoading = true
        pages = emptyList()
        withContext(Dispatchers.IO) {
            runCatching {
                val api = Apis.getApiFromNameNull(apiName)
                    ?: throw IllegalStateException("Unknown source $apiName")
                api.loadPages(s.data[chapterIndex].url)
            }.onSuccess { pages = it }.onFailure { error = it.message ?: "Page load failed" }
            pagesLoading = false
        }
        context.setKey(EPUB_CURRENT_POSITION, s.name, chapterIndex)
    }

    val s = stream
    Box(
        Modifier
            .fillMaxSize()
            .background(Color.Black)
    ) {
        when {
            loading -> CircularProgressIndicator(Modifier.align(Alignment.Center))

            error != null && s == null -> Column(
                Modifier
                    .align(Alignment.Center)
                    .padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                Text(error ?: "", color = Color.White)
                TextButton(onClick = { (context as? ComponentActivity)?.finish() }) { Text("Close") }
            }

            s != null && chapterIndex in s.data.indices -> {
                val chapter = s.data[chapterIndex]
                when (mode) {
                    MangaMode.WEBTOON -> WebtoonPages(
                        pages = pages,
                        pagesLoading = pagesLoading,
                        onTap = { chromeVisible = !chromeVisible },
                    )

                    else -> PagedPages(
                        pages = pages,
                        rtl = mode == MangaMode.RTL,
                        onTap = { chromeVisible = !chromeVisible },
                    )
                }

                if (chromeVisible) {
                    ReaderChrome(
                        title = "${s.name} · ${chapter.name}",
                        position = "${chapterIndex + 1}/${s.data.size}",
                        pageCount = pages.size,
                        mode = mode,
                        onMode = {
                            mode = it
                            context.setKey(MANGA_READER_MODE, it.name)
                        },
                        onPrev = { if (chapterIndex - 1 >= 0) chapterIndex -= 1 },
                        onNext = { if (chapterIndex + 1 < s.data.size) chapterIndex += 1 },
                        onClose = { (context as? ComponentActivity)?.finish() },
                    )
                }
            }
        }
    }
    BackHandler { (context as? ComponentActivity)?.finish() }
}

@Composable
private fun WebtoonPages(
    pages: List<String>,
    pagesLoading: Boolean,
    onTap: () -> Unit,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .clickable(
                interactionSource = remember { MutableInteractionSource() },
                indication = null,
            ) { onTap() },
    ) {
        if (pagesLoading || pages.isEmpty()) {
            item {
                Box(
                    Modifier
                        .fillMaxWidth()
                        .padding(48.dp),
                    contentAlignment = Alignment.Center,
                ) { CircularProgressIndicator() }
            }
        }
        itemsIndexed(pages, key = { i, u -> "$i-$u" }) { _, url ->
            AsyncImage(
                model = url,
                contentDescription = null,
                contentScale = ContentScale.FillWidth,
                modifier = Modifier.fillMaxWidth(),
            )
        }
        if (pages.isNotEmpty()) {
            item {
                Box(
                    Modifier
                        .fillMaxWidth()
                        .padding(24.dp),
                    contentAlignment = Alignment.Center,
                ) { Text("— end of chapter —", color = Color(0xFF8A8A8A)) }
            }
        }
    }
}

@Composable
private fun PagedPages(
    pages: List<String>,
    rtl: Boolean,
    onTap: () -> Unit,
) {
    if (pages.isEmpty()) {
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) { CircularProgressIndicator() }
        return
    }
    val pagerState = rememberPagerState(pageCount = { pages.size })
    var scale by remember { mutableStateOf(1f) }
    LaunchedEffect(pagerState.currentPage) { scale = 1f }
    HorizontalPager(
        state = pagerState,
        modifier = Modifier.fillMaxSize(),
        beyondViewportPageCount = 1,
    ) { page ->
        Box(
            Modifier
                .fillMaxSize()
                .pointerInput(Unit) {
                    detectTransformGestures { _, _, zoom, _ ->
                        scale = (scale * zoom).coerceIn(1f, 5f)
                    }
                }
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                ) { onTap() },
            contentAlignment = Alignment.Center,
        ) {
            AsyncImage(
                model = pages[page],
                contentDescription = null,
                contentScale = ContentScale.Fit,
                modifier = Modifier
                    .fillMaxSize()
                    .graphicsLayer(scaleX = scale, scaleY = scale),
            )
        }
    }
}

@Composable
private fun ReaderChrome(
    title: String,
    position: String,
    pageCount: Int,
    mode: MangaMode,
    onMode: (MangaMode) -> Unit,
    onPrev: () -> Unit,
    onNext: () -> Unit,
    onClose: () -> Unit,
) {
    Column(Modifier.fillMaxSize()) {
        Surface(color = Color(0xCC000000)) {
            Row(
                Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                TextButton(onClick = onClose) { Text("✕", color = Color.White) }
                Column(Modifier.weight(1f)) {
                    Text(
                        title,
                        color = Color.White,
                        style = MaterialTheme.typography.bodyMedium,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                    )
                    Text(
                        "$position · $pageCount pages",
                        color = Color(0xFFB0B0B0),
                        style = MaterialTheme.typography.labelSmall,
                    )
                }
                MangaMode.entries.forEach { m ->
                    TextButton(onClick = { onMode(m) }) {
                        Text(
                            m.label,
                            color = if (m == mode) Color.White else Color(0xFF9A9A9A),
                            style = MaterialTheme.typography.labelMedium,
                        )
                    }
                }
            }
        }
        Box(Modifier.weight(1f))
        Surface(color = Color(0xCC000000)) {
            Row(
                Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                TextButton(onClick = onPrev) { Text("← Prev", color = Color.White) }
                TextButton(onClick = onNext) { Text("Next →", color = Color.White) }
            }
        }
    }
}
