package app.orubus.buks.ui.importbooks

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.provider.Settings
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Checkbox
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import app.orubus.buks.BookDownloader2
import app.orubus.buks.DataStore.getKey
import app.orubus.buks.DataStore.setKey
import app.orubus.buks.MainActivity
import app.orubus.buks.R
import app.orubus.buks.ui.result.ResultFragment
import app.orubus.buks.util.AutoMatch
import app.orubus.buks.util.Coroutines.ioSafe
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File

/**
 * Librera-style path browser importer: /sdcard drill-down, multi-select of
 * EPUB/PDF files, "(imported)" marks, and auto match finding against the
 * installed novel sources once the import lands.
 */
class ImportBooksActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                ImportBooksScreen(onClose = { finish() })
            }
        }
    }

    companion object {
        fun newIntent(context: Context): Intent =
            Intent(context, ImportBooksActivity::class.java)

        const val IMPORTED_NAMES_KEY = "imported_book_names"
    }
}

private val BOOK_EXTENSIONS = setOf("epub", "pdf")

@Composable
private fun ImportBooksScreen(onClose: () -> Unit) {
    val context = LocalContext.current
    val activity = context as? ComponentActivity

    var hasAccess by remember {
        mutableStateOf(
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) Environment.isExternalStorageManager()
            else true
        )
    }
    var currentDir by remember {
        mutableStateOf(
            File(
                Environment.getExternalStorageDirectory()?.absolutePath ?: "/sdcard"
            )
        )
    }
    var sortByName by remember { mutableStateOf(true) }
    var selected by remember { mutableStateOf<Set<File>>(emptySet()) }
    var importedNames by remember { mutableStateOf<Set<String>>(emptySet()) }
    var importing by remember { mutableStateOf(false) }
    var progressText by remember { mutableStateOf<String?>(null) }
    var matches by remember { mutableStateOf<List<AutoMatch.Match>>(emptyList()) }
    var matchTitle by remember { mutableStateOf<String?>(null) }

    LaunchedEffect(Unit) {
        importedNames = context.getKey<List<String>>(ImportBooksActivity.IMPORTED_NAMES_KEY)?.toSet() ?: emptySet()
    }

    val dirs = remember(currentDir, hasAccess, sortByName) {
        currentDir.listFiles()?.filter { it.isDirectory }
            ?.sortedBy { it.name.lowercase() } ?: emptyList()
    }
    val books = remember(currentDir, hasAccess, sortByName, importedNames) {
        currentDir.listFiles()
            ?.filter { it.isFile && it.extension.lowercase() in BOOK_EXTENSIONS }
            ?.sortedWith(
                if (sortByName) compareBy { it.name.lowercase() }
                else compareByDescending { it.lastModified() }
            ) ?: emptyList()
    }

    BackHandler(enabled = !importing) {
        val parent = currentDir.parentFile
        if (parent != null && parent.absolutePath != "/" && parent.canRead()) currentDir = parent
        else onClose()
    }

    Surface(color = MaterialTheme.colorScheme.background, modifier = Modifier.fillMaxSize()) {
        Column(Modifier.fillMaxSize()) {

            // Title + path row
            Column(Modifier.padding(horizontal = 20.dp, vertical = 12.dp)) {
                Text(
                    "Import Books",
                    style = MaterialTheme.typography.headlineSmall,
                )
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        currentDir.absolutePath,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.weight(1f),
                    )
                    TextButton(onClick = { sortByName = !sortByName }) {
                        Text(if (sortByName) "Sort: name" else "Sort: time")
                    }
                }
            }

            when {
                !hasAccess -> Column(
                    Modifier
                        .fillMaxSize()
                        .padding(24.dp),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    Text(
                        "Buks needs \"All files access\" to browse your library folders.",
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Button(
                        onClick = {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                                runCatching {
                                    context.startActivity(
                                        Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION)
                                            .setData(Uri.parse("package:${context.packageName}"))
                                    )
                                }.onSuccess {
                                    hasAccess = Environment.isExternalStorageManager()
                                }.onFailure {
                                    runCatching {
                                        context.startActivity(Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION))
                                    }
                                }
                            }
                        },
                        modifier = Modifier.padding(top = 16.dp),
                    ) { Text("Grant access") }
                }

                importing -> Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        CircularProgressIndicator()
                        progressText?.let {
                            Text(it, Modifier.padding(top = 16.dp), style = MaterialTheme.typography.bodyMedium)
                        }
                    }
                }

                else -> {
                    LazyColumn(Modifier.weight(1f)) {
                        val parent = currentDir.parentFile
                        if (parent != null && parent.absolutePath != "/") {
                            item(key = "up") {
                                Row(
                                    Modifier
                                        .fillMaxWidth()
                                        .clickable { currentDir = parent }
                                        .padding(horizontal = 20.dp, vertical = 10.dp),
                                    verticalAlignment = Alignment.CenterVertically,
                                ) {
                                    Text("↑ ..", style = MaterialTheme.typography.bodyLarge)
                                }
                            }
                        }
                        items(dirs, key = { "d-${it.absolutePath}" }) { dir ->
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .clickable { currentDir = dir }
                                    .padding(horizontal = 20.dp, vertical = 10.dp),
                            ) {
                                Text("📁 ", style = MaterialTheme.typography.bodyLarge)
                                Text(
                                    dir.name,
                                    style = MaterialTheme.typography.bodyLarge,
                                    maxLines = 1,
                                    overflow = TextOverflow.Ellipsis,
                                )
                            }
                        }
                        items(books, key = { "f-${it.absolutePath}" }) { book ->
                            val isImported = book.name in importedNames
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .clickable {
                                        selected = if (book in selected) selected - book else selected + book
                                    }
                                    .padding(horizontal = 12.dp, vertical = 4.dp),
                                verticalAlignment = Alignment.CenterVertically,
                            ) {
                                Checkbox(
                                    checked = book in selected,
                                    onCheckedChange = {
                                        selected = if (it) selected + book else selected - book
                                    },
                                )
                                Column(Modifier.weight(1f)) {
                                    Text(
                                        text = book.name + if (isImported) "  (imported)" else "",
                                        style = MaterialTheme.typography.bodyLarge,
                                        maxLines = 1,
                                        overflow = TextOverflow.Ellipsis,
                                        color = if (isImported) MaterialTheme.colorScheme.onSurfaceVariant
                                        else MaterialTheme.colorScheme.onSurface,
                                    )
                                    Text(
                                        formatSize(book.length()),
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    )
                                }
                            }
                        }
                        if (books.isEmpty() && dirs.isEmpty()) {
                            item {
                                Box(Modifier.fillMaxWidth().padding(32.dp), contentAlignment = Alignment.Center) {
                                    Text(
                                        "No books here",
                                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    )
                                }
                            }
                        }
                    }

                    Row(
                        Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 12.dp, vertical = 8.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        TextButton(onClick = {
                            selected = if (selected.size == books.size) emptySet() else books.toSet()
                        }) {
                            Text(if (selected.size == books.size && books.isNotEmpty()) "Clear all" else "Select all")
                        }
                        Row {
                            TextButton(onClick = onClose) { Text("Cancel") }
                            Button(
                                enabled = selected.isNotEmpty(),
                                onClick = {
                                    importing = true
                                    val toImport = selected.toList()
                                    val ctx = context
                                    ioSafe {
                                        var done = 0
                                        val newNames = mutableListOf<String>()
                                        for (file in toImport) {
                                            done++
                                            progressText = "Importing ${done}/${toImport.size}: ${file.name}"
                                            withContext(Dispatchers.IO) {
                                                runCatching {
                                                    val uri = Uri.fromFile(file)
                                                    if (file.extension.lowercase() == "pdf") {
                                                        BookDownloader2.downloadPDFWorkThread(uri, ctx)
                                                    } else {
                                                        BookDownloader2.downloadWorkThread(uri, ctx)
                                                    }
                                                }.onFailure { it.printStackTrace() }
                                            }
                                            newNames.add(file.name)
                                        }
                                        importedNames = importedNames + newNames
                                        ctx.setKey(ImportBooksActivity.IMPORTED_NAMES_KEY, importedNames.toList())
                                        // auto match finding for the newly imported books
                                        val found = mutableListOf<AutoMatch.Match>()
                                        for (name in newNames) {
                                            progressText = "Matching $name…"
                                            val m = runCatching {
                                                AutoMatch.findMatches(ctx, name)
                                            }.getOrDefault(emptyList())
                                            if (m.isNotEmpty()) {
                                                found += m
                                                matchTitle = name
                                                break
                                            }
                                        }
                                        matches = found
                                        importing = false
                                        progressText = null
                                        selected = emptySet()
                                    }
                                },
                            ) { Text("Import (${selected.size})") }
                        }
                    }
                }
            }
        }
    }

    matches.firstOrNull()?.let { match ->
        androidx.compose.material3.AlertDialog(
            onDismissRequest = { matches = matches - match },
            title = { Text("Match found") },
            text = {
                Text(
                    "\"$matchTitle\" looks like \"${match.response.name}\" on ${match.api.name} " +
                        "(similarity ${match.score}%).\nOpen it to fetch the real cover, description and chapters?"
                )
            },
            confirmButton = {
                TextButton(onClick = {
                    MainActivity.loadPreviewPage(match.response)
                    matches = matches - match
                }) { Text("Open", color = Color.White) }
            },
            dismissButton = {
                TextButton(onClick = { matches = matches - match }) {
                    Text(if (matches.size > 1) "Next" else "Skip")
                }
            },
        )
    }
}

private fun formatSize(bytes: Long): String = when {
    bytes >= 1 shl 20 -> "%.1f MB".format(bytes.toDouble() / (1 shl 20))
    bytes >= 1 shl 10 -> "%.0f kB".format(bytes.toDouble() / (1 shl 10))
    else -> "$bytes B"
}
