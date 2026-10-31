package app.orubus.buks.plugins

import android.util.Base64
import android.util.Log
import com.dokar.quickjs.quickJs
import com.dokar.quickjs.binding.asyncFunction
import com.dokar.quickjs.binding.define
import com.dokar.quickjs.binding.function
import app.orubus.buks.MainActivity.Companion.app
import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import kotlinx.coroutines.coroutineScope

/**
 * The Buks JavaScript runtime.
 *
 * Every plugin runs in its own QuickJS VM (full ES2020: async/await, modules)
 * with a small, auditable host bridge — plugins never get raw Java objects:
 *
 *  - `buksHttpGet(url, headersJson?) -> string`   GET, returns the body text
 *  - `buksHttpPost(url, formJson?, headersJson?) -> string`  form-encoded POST (formJson = {"field":"value"})
 *  - `console.log/warn/error(...)`                routed to logcat
 *  - `buksStoreGet(key) -> string?`               per-plugin key/value storage
 *  - `buksStoreSet(key, value?)`
 *  - `buksEncode(s) / buksDecode(s)`              base64 helpers
 *
 * Plugins return JSON strings so values cross the boundary cleanly; parsing
 * happens on the Kotlin side with the mapper the rest of the app already uses.
 */
object JsPluginEngine {
    private const val TAG = "BuksJS"

    private val headersMapper = jacksonObjectMapper()

    /** Per-plugin storage backend — wired to DataStore when the first plugins land. */
    var store: PluginStore = MemoryPluginStore

    /**
     * Evaluate plugin `code` in a fresh VM and return its result as a string.
     * The whole evaluation is cancellable: cancelling the calling coroutine
     * interrupts QuickJS even mid-script.
     */
    suspend fun eval(plugin: JsPlugin, code: String): String = coroutineScope {
        try {
            quickJs {
                define("console") {
                    function("log") { args -> Log.i(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                    function("warn") { args -> Log.w(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                    function("error") { args -> Log.e(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                }
                asyncFunction("buksHttpGet") { args ->
                    val url = argString(args, 0, "buksHttpGet(url)")
                    app.get(url, headers = argHeaders(args)).text
                }
                asyncFunction("buksHttpPost") { args ->
                    val url = argString(args, 0, "buksHttpPost(url, formJson, headers)")
                    val form = args.getOrNull(1)?.let { raw ->
                        (raw as? String)?.takeIf { it.isNotBlank() }?.let {
                            headersMapper.readValue(it, object : TypeReference<Map<String, String>>() {})
                        }
                    }
                    app.post(url, data = form, headers = argHeaders(args, offset = 2)).text
                }
                asyncFunction("buksStoreGet") { args ->
                    store.get(plugin.id, argString(args, 0, "buksStoreGet(key)"))
                }
                asyncFunction("buksStoreSet") { args ->
                    val key = argString(args, 0, "buksStoreSet(key, value)")
                    store.set(plugin.id, key, args.getOrNull(1)?.toString())
                    null
                }
                function("buksEncode") { args ->
                    Base64.encodeToString(
                        argString(args, 0, "buksEncode(s)").toByteArray(Charsets.UTF_8),
                        Base64.NO_WRAP,
                    )
                }
                function("buksDecode") { args ->
                    String(Base64.decode(argString(args, 0, "buksDecode(s)"), Base64.DEFAULT), Charsets.UTF_8)
                }
                evaluate<Any?>(code).let { r -> r?.toString() ?: "null" }
            }
        } catch (e: Exception) {
            throw PluginScriptException("JS evaluation failed for ${plugin.id}: ${e.message}", e)
        }
    }

    private fun argString(args: Array<Any?>, index: Int, what: String): String =
        args.getOrNull(index) as? String ?: throw IllegalArgumentException("expected string at [$index]: $what")

    private fun argHeaders(args: Array<Any?>, offset: Int = 1): Map<String, String> {
        val raw = args.getOrNull(offset) as? String ?: return emptyMap()
        if (raw.isBlank()) return emptyMap()
        return runCatching {
            headersMapper.readValue(raw, object : TypeReference<Map<String, String>>() {})
        }.getOrDefault(emptyMap())
    }
}

class PluginScriptException(message: String, cause: Throwable? = null) : Exception(message, cause)

/** Key/value storage plugins keep cookies, tokens and caches in. */
interface PluginStore {
    suspend fun get(pluginId: String, key: String): String?
    suspend fun set(pluginId: String, key: String, value: String?)
}

/** Default in-memory store; replaced by a DataStore-backed one with the first plugin batch. */
object MemoryPluginStore : PluginStore {
    private val map = HashMap<Pair<String, String>, String?>()
    private val mutex = kotlinx.coroutines.sync.Mutex()

    override suspend fun get(pluginId: String, key: String): String? =
        mutex.withLock { map[pluginId to key] }

    override suspend fun set(pluginId: String, key: String, value: String?) =
        mutex.withLock {
            if (value == null) map.remove(pluginId to key) else map[pluginId to key] = value
            Unit
        }

    private suspend fun <T> kotlinx.coroutines.sync.Mutex.withLock(block: () -> T): T {
        lock()
        try {
            return block()
        } finally {
            unlock()
        }
    }
}
