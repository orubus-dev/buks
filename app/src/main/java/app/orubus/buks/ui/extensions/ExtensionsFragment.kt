package app.orubus.buks.ui.extensions

import android.app.Application
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.lagradost.cloudstream4.compose.Screen
import app.orubus.buks.R
import app.orubus.buks.plugins.JsPlugin
import app.orubus.buks.plugins.PluginRegistry
import app.orubus.buks.plugins.PluginType
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.net.URI

data class ExtensionsUiState(
    val loading: Boolean = true,
    val error: String? = null,
    val tab: Int = 0,
    val available: List<JsPlugin> = emptyList(),
    val installed: Map<String, Int> = emptyMap(),
    val busy: Set<String> = emptySet(),
)

class ExtensionsViewModel(app: Application) : AndroidViewModel(app) {
    private val _state = MutableStateFlow(ExtensionsUiState())
    val state: StateFlow<ExtensionsUiState> = _state

    init {
        refresh()
    }

    fun refresh() {
        _state.value = _state.value.copy(loading = true, error = null)
        viewModelScope.launch {
            val result = withContext(Dispatchers.IO) {
                runCatching { PluginRegistry.fetchIndex(getApplication()) }
            }
            val installed = PluginRegistry.installed().associate { it.id to it.version }
            _state.value = _state.value.copy(
                loading = false,
                error = result.exceptionOrNull()?.let { it.message ?: it.javaClass.simpleName },
                available = result.getOrNull()?.second?.plugins ?: emptyList(),
                installed = installed,
            )
        }
    }

    fun setTab(tab: Int) {
        _state.value = _state.value.copy(tab = tab)
    }

    fun install(entry: JsPlugin) {
        val ctx = getApplication<Application>()
        _state.value = _state.value.copy(busy = _state.value.busy + entry.id)
        viewModelScope.launch {
            try {
                withContext(Dispatchers.IO) {
                    val code = PluginRegistry.downloadCode(entry)
                    PluginRegistry.install(ctx, entry, code)
                }
                _state.value = _state.value.copy(
                    installed = _state.value.installed + (entry.id to entry.version),
                )
            } catch (e: Exception) {
                _state.value = _state.value.copy(
                    error = e.message ?: e.javaClass.simpleName,
                )
            }
            _state.value = _state.value.copy(busy = _state.value.busy - entry.id)
        }
    }

    fun uninstall(id: String) {
        val ctx = getApplication<Application>()
        _state.value = _state.value.copy(busy = _state.value.busy + id)
        viewModelScope.launch {
            try {
                withContext(Dispatchers.IO) { PluginRegistry.uninstall(ctx, id) }
                _state.value = _state.value.copy(installed = _state.value.installed - id)
            } catch (e: Exception) {
                _state.value = _state.value.copy(error = e.message ?: e.javaClass.simpleName)
            }
            _state.value = _state.value.copy(busy = _state.value.busy - id)
        }
    }
}

object ExtensionsScreen : Screen {
    @Composable
    override fun Content() {
        val vm: ExtensionsViewModel = viewModel()
        val state by vm.state.collectAsStateWithLifecycle()
        ExtensionsContent(
            state = state,
            onTab = vm::setTab,
            onRefresh = vm::refresh,
            onInstall = vm::install,
            onUninstall = vm::uninstall,
        )
    }
}

@Composable
private fun ExtensionsContent(
    state: ExtensionsUiState,
    onTab: (Int) -> Unit,
    onRefresh: () -> Unit,
    onInstall: (JsPlugin) -> Unit,
    onUninstall: (String) -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(start = 24.dp, end = 12.dp, top = 12.dp, bottom = 4.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = stringResource(R.string.title_browse),
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.weight(1f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            TextButton(onClick = onRefresh) {
                Text(stringResource(R.string.extensions_refresh))
            }
        }

        // Tabs: Available / Installed
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 24.dp, vertical = 6.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            val tabs = listOf(
                stringResource(R.string.extensions_available) to state.available.size,
                stringResource(R.string.extensions_installed) to state.installed.size,
            )
            tabs.forEachIndexed { index, (label, count) ->
                val selected = state.tab == index
                com.lagradost.cloudstream4.compose.GlassSurface(
                    shape = RoundedCornerShape(20.dp),
                    modifier = Modifier.clickable { onTab(index) },
                ) {
                    Text(
                        text = "$label ($count)",
                        color = if (selected) MaterialTheme.colorScheme.primary
                        else MaterialTheme.colorScheme.onSurfaceVariant,
                        style = MaterialTheme.typography.labelLarge,
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    )
                }
            }
        }

        when {
            state.loading -> Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }

            else -> {
                val isAvailableTab = state.tab == 0
                val entries: List<JsPlugin> = remember(state.available, state.installed, isAvailableTab) {
                    if (isAvailableTab) {
                        state.available.sortedWith(
                            compareByDescending<JsPlugin> { state.installed[it.id]?.let { v -> it.version > v } ?: false }
                                .thenBy { it.name.lowercase() }
                        )
                    } else {
                        state.available.filter { it.id in state.installed }
                            .sortedBy { it.name.lowercase() }
                    }
                }
                if (entries.isEmpty() && !isAvailableTab) {
                    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text(
                            stringResource(R.string.extensions_none_installed),
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            modifier = Modifier.padding(32.dp),
                        )
                    }
                } else {
                    LazyColumn(
                        modifier = Modifier.fillMaxSize(),
                        contentPadding = PaddingValues(bottom = 24.dp),
                    ) {
                        state.error?.let { msg ->
                            item(key = "error") {
                                Surface(
                                    color = MaterialTheme.colorScheme.errorContainer,
                                    shape = RoundedCornerShape(12.dp),
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(horizontal = 16.dp, vertical = 8.dp),
                                ) {
                                    Column(Modifier.padding(12.dp)) {
                                        Text(
                                            stringResource(R.string.extensions_loading_error, msg),
                                            color = MaterialTheme.colorScheme.onErrorContainer,
                                            style = MaterialTheme.typography.bodySmall,
                                        )
                                        TextButton(onClick = onRefresh) {
                                            Text(stringResource(R.string.extensions_retry))
                                        }
                                    }
                                }
                            }
                        }
                        items(entries, key = { it.id }) { entry ->
                            ExtensionRow(
                                entry = entry,
                                installedVersion = state.installed[entry.id],
                                busy = entry.id in state.busy,
                                onInstall = { onInstall(entry) },
                                onUninstall = { onUninstall(entry.id) },
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ExtensionRow(
    entry: JsPlugin,
    installedVersion: Int?,
    busy: Boolean,
    onInstall: () -> Unit,
    onUninstall: () -> Unit,
) {
    val isManga = entry.capabilities.pages || entry.type == PluginType.MANGA
    val hasUpdate = installedVersion != null && entry.version > installedVersion
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(Modifier.weight(1f)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = entry.name,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.SemiBold,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                if (isManga) {
                    Spacer(Modifier.width(6.dp))
                    ExtensionBadge(stringResource(R.string.extensions_manga_badge))
                }
                if (hasUpdate) {
                    Spacer(Modifier.width(6.dp))
                    ExtensionBadge(stringResource(R.string.extensions_updated_badge))
                }
            }
            val host = runCatching { URI(entry.baseUrl).host }.getOrNull() ?: entry.baseUrl
            Text(
                text = "$host · v${entry.version}",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
        when {
            busy -> CircularProgressIndicator(Modifier.height(22.dp))
            installedVersion == null -> TextButton(onClick = onInstall) {
                Text(stringResource(R.string.extensions_install))
            }
            hasUpdate -> TextButton(onClick = onInstall) {
                Text(stringResource(R.string.extensions_update))
            }
            else -> TextButton(onClick = onUninstall) {
                Text(
                    stringResource(R.string.extensions_remove),
                    color = MaterialTheme.colorScheme.error,
                )
            }
        }
    }
}

@Composable
private fun ExtensionBadge(text: String) {
    Surface(
        shape = RoundedCornerShape(6.dp),
        color = MaterialTheme.colorScheme.secondaryContainer,
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSecondaryContainer,
            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
        )
    }
}
