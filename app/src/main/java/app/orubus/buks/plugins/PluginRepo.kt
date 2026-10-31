package app.orubus.buks.plugins

import android.content.Context
import app.orubus.buks.DataStore.getKey
import app.orubus.buks.DataStore.setKey
import app.orubus.buks.MainActivity
import app.orubus.buks.MainAPI
import app.orubus.buks.util.Coroutines.ioSafe
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import java.io.File

/** Where extension repos live (a plain GitHub repo with index.json + plugin files). */
const val PLUGIN_REPO_URL_KEY = "plugin_repo_url"
const val DEFAULT_PLUGIN_REPO = "https://raw.githubusercontent.com/orubus-dev/plugins/main"

/**
 * One installed extension: manifest + code file under
 * `<filesDir>/plugins/<id>/plugin.js`, manifest at `<filesDir>/plugins/<id>/meta.json`.
 *
 * [JsPlugin.entry] doubles as the remote URL the code was installed from
 * (used for update checks).
 */
class InstalledPluginRecord(val meta: JsPlugin, val dir: File) {
    private var cachedCode: String? = null

    suspend fun code(): String = withContext(Dispatchers.IO) {
        cachedCode ?: run {
            val text = File(dir, "plugin.js").readText()
            cachedCode = text
            text
        }
    }

    fun invalidateCode() {
        cachedCode = null
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
data class PluginRepoIndex(
    val updated: Long = 0,
    val plugins: List<JsPlugin> = emptyList(),
)

/** Registry of installed extensions and the repo operations around them. */
object PluginRegistry {
    private val mapper = jacksonObjectMapper()
    private val registryMutex = Mutex()

    private var appContext: Context? = null
    private val records = LinkedHashMap<String, InstalledPluginRecord>()

    /** Live plugin sources, appended to [app.orubus.buks.util.Apis] on refresh. */
    val sources: List<MainAPI>
        get() = synchronized(records) { records.values.map { it.toSource() } }

    fun installed(): List<JsPlugin> = synchronized(records) { records.values.map { it.meta } }

    fun record(id: String): InstalledPluginRecord? = synchronized(records) { records[id] }

    private fun InstalledPluginRecord.toSource(): MainAPI =
        if (meta.capabilities.pages) JsMangaSource(this) else JsNovelSource(this)

    /** Call once from MainActivity.onCreate. */
    fun init(context: Context) {
        if (appContext != null) return
        appContext = context.applicationContext
        JsPluginEngine.store = PrefsPluginStore(context.applicationContext)
        runCatching {
            JsPluginEngine.vendorCode = context.assets.open("plugins/vendor.js").bufferedReader().use { it.readText() }
        }.onFailure {
            android.util.Log.w("BuksJS", "vendor.js missing from assets: ${it.message}")
        }
        context.ioSafe { loadInstalled(context.applicationContext) }
    }

    suspend fun loadInstalled(context: Context) {
        val root = File(context.filesDir, "plugins")
        val found = LinkedHashMap<String, InstalledPluginRecord>()
        root.listFiles()?.filter { it.isDirectory }?.forEach { dir ->
            val metaFile = File(dir, "meta.json")
            if (!metaFile.exists()) return@forEach
            runCatching {
                val meta = mapper.readValue(metaFile, JsPlugin::class.java)
                found[meta.id] = InstalledPluginRecord(meta, dir)
            }
        }
        registryMutex.withLock {
            synchronized(records) {
                records.clear()
                records.putAll(found)
            }
        }
        app.orubus.buks.util.Apis.refreshApis()
    }

    suspend fun install(context: Context, meta: JsPlugin, code: String) {
        val dir = File(File(context.filesDir, "plugins"), meta.id)
        dir.mkdirs()
        File(dir, "plugin.js").writeText(code)
        File(dir, "meta.json").writeText(mapper.writeValueAsString(meta))
        val record = InstalledPluginRecord(meta, dir)
        registryMutex.withLock {
            synchronized(records) { records[meta.id] = record }
        }
        app.orubus.buks.util.Apis.refreshApis()
    }

    suspend fun uninstall(context: Context, id: String) {
        registryMutex.withLock {
            val record = synchronized(records) { records.remove(id) }
            record?.dir?.deleteRecursively()
            File(File(context.filesDir, "plugins"), id).deleteRecursively()
        }
        app.orubus.buks.util.Apis.refreshApis()
    }

    suspend fun fetchIndex(context: Context): Pair<String, PluginRepoIndex> {
        val repo = context.getKey<String>(PLUGIN_REPO_URL_KEY) ?: DEFAULT_PLUGIN_REPO
        val url = repo.trimEnd('/') + "/index.json"
        val text = MainActivity.app.get(url).text
        return repo to mapper.readValue(text, PluginRepoIndex::class.java)
    }

    suspend fun downloadCode(meta: JsPlugin): String {
        val url = meta.entry
        require(url.startsWith("http")) { "Plugin entry url missing for ${meta.id}" }
        return MainActivity.app.get(url).text
    }
}

/**
 * Persistent per-plugin key/value storage: one JSON map per plugin under
 * `plugin_store/<id>` in the app DataStore preferences.
 */
class PrefsPluginStore(private val context: Context) : PluginStore {
    private val mutex = Mutex()
    private val mapper = jacksonObjectMapper()

    private fun readMap(pluginId: String): MutableMap<String, String> {
        val raw = context.getKey<String>("plugin_store/$pluginId") ?: return HashMap()
        return runCatching {
            mapper.readValue(raw, object : com.fasterxml.jackson.core.type.TypeReference<MutableMap<String, String>>() {})
        }.getOrDefault(HashMap())
    }

    override suspend fun get(pluginId: String, key: String): String? = mutex.withLock {
        readMap(pluginId)[key]
    }

    override suspend fun set(pluginId: String, key: String, value: String?) = mutex.withLock {
        val map = readMap(pluginId)
        if (value == null) map.remove(key) else map[key] = value
        context.setKey("plugin_store/$pluginId", map)
        Unit
    }
}
