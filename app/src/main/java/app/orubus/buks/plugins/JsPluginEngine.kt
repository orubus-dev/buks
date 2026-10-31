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
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.withContext
import kotlinx.coroutines.withTimeout

/**
 * The Buks JavaScript runtime.
 *
 * Plugins are CommonJS modules (compiled by the extension pipeline) that export
 * a default instance with async methods (popularNovels, searchNovels, parseNovel,
 * parseChapter — and the manga set popularManga/searchManga/mangaDetails/
 * chapterList/pageList). Every call runs in its own QuickJS VM:
 *
 *   [vendor.js]   cheerio / dayjs / lib shims          (bundled with the app)
 *   [prelude]     module registry + fetch polyfill      (below)
 *   [plugin code] the CommonJS module                   (installed extension)
 *   [dispatch]    instance.method(JSON.parse(args))     → JSON string result
 *
 * The host bridge stays small and auditable — plugins never get Java objects:
 *
 *  - `buksFetchRaw(url, initJson) -> json`  full fetch backend
 *      ({ok,status,headers,body}), backed by the app's NiceHttp client so
 *      plugins ride the existing user-agent handling
 *  - `buksFetchFile(url, initJson?) -> base64`
 *  - `buksStoreGet(key) / buksStoreSet(key, value?)`  per-plugin key/value storage
 *  - `buksEncode(s) / buksDecode(s)`  base64 helpers
 *  - `console.log/warn/error`  routed to logcat
 */
object JsPluginEngine {
    private const val TAG = "BuksJS"
    private const val CALL_TIMEOUT_MS = 90_000L

    private val mapper = jacksonObjectMapper()

    /** Per-plugin storage backend — replaced by the persistent store on startup. */
    var store: PluginStore = MemoryPluginStore

    /** Vendor bundle (cheerio/dayjs/lib shims) — loaded from assets by the repo layer. */
    var vendorCode: String = ""

    suspend fun call(plugin: JsPlugin, code: String, method: String, argsJson: String): String =
        withContext(Dispatchers.Default) {
            withTimeout(CALL_TIMEOUT_MS) {
                coroutineScope {
                    try {
                        quickJs {
                            define("console") {
                                function("log") { args -> Log.i(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                                function("warn") { args -> Log.w(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                                function("error") { args -> Log.e(TAG, "[${plugin.id}] ${args.joinToString(" ")}") }
                            }
                            asyncFunction("buksFetchRaw") { args ->
                                val url = argString(args, 0, "buksFetchRaw(url, init)")
                                val init = args.getOrNull(1) as? String
                                httpFetchRaw(url, init)
                            }
                            asyncFunction("buksFetchFile") { args ->
                                val url = argString(args, 0, "buksFetchFile(url, init)")
                                val init = args.getOrNull(1) as? String
                                try {
                                    val resp = app.get(url, headers = parseHeaders(init))
                                    val bytes = resp.text.toByteArray(Charsets.UTF_8)
                                    Base64.encodeToString(bytes, Base64.NO_WRAP)
                                } catch (e: Exception) {
                                    ""
                                }
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
                            evaluate<Any?>(buildScript(vendorCode, code, method, argsJson))
                            // Pending jobs (async bindings) have been awaited by now.
                            val result = evaluate<String>("globalThis.__buksResult")
                            result ?: "null"
                        }
                    } catch (e: TimeoutCancellationException) {
                        throw PluginScriptException("Plugin call timed out: ${plugin.id}.$method", e)
                    } catch (e: PluginScriptException) {
                        throw e
                    } catch (e: Exception) {
                        throw PluginScriptException("JS evaluation failed for ${plugin.id}.$method: ${e.message}", e)
                    }
                }
            }
        }

    private suspend fun httpFetchRaw(url: String, initJson: String?): String {
        val init = parseInit(initJson)
        val headers = init.headers
        return try {
            val resp = if (init.method.equals("POST", ignoreCase = true)) {
                app.post(url, data = init.form, headers = headers)
            } else {
                app.get(url, headers = headers)
            }
            val headerMap = LinkedHashMap<String, String>()
            try {
                resp.headers?.forEach { (k, v) -> headerMap[k.lowercase()] = v }
            } catch (t: Throwable) {
            }
            mapper.writeValueAsString(
                mapOf(
                    "ok" to (resp.code in 200..299),
                    "status" to resp.code,
                    "url" to (resp.url ?: url),
                    "headers" to headerMap,
                    "body" to resp.text,
                )
            )
        } catch (e: Exception) {
            mapper.writeValueAsString(
                mapOf("ok" to false, "status" to 0, "url" to url, "headers" to emptyMap<String, String>(), "body" to "")
            )
        }
    }

    private data class FetchInit(
        val method: String = "GET",
        val headers: Map<String, String> = emptyMap(),
        val form: Map<String, String>? = null,
    )

    private fun parseInit(raw: String?): FetchInit {
        if (raw.isNullOrBlank()) return FetchInit()
        return runCatching {
            val node = mapper.readTree(raw)
            val method = node.get("method")?.asText("GET") ?: "GET"
            val headers = HashMap<String, String>()
            node.get("headers")?.let { h ->
                h.fieldNames().forEach { name ->
                    val v = h.get(name)
                    if (v != null && !v.isNull) headers[name.lowercase()] = v.asText()
                }
            }
            var form: Map<String, String>? = null
            val body = node.get("body")
            if (body != null && !body.isNull && !body.isTextual) {
                val f = LinkedHashMap<String, String>()
                body.fieldNames().forEach { name ->
                    val v = body.get(name)
                    if (v != null && !v.isNull) f[name] = v.asText()
                }
                form = f
                headers["content-type"] = "application/x-www-form-urlencoded"
            }
            FetchInit(method, headers, form)
        }.getOrDefault(FetchInit())
    }

    private fun parseHeaders(raw: String?): Map<String, String> {
        if (raw.isNullOrBlank()) return emptyMap()
        return runCatching {
            mapper.readValue(raw, object : TypeReference<Map<String, String>>() {})
        }.getOrElse {
            runCatching {
                val node = mapper.readTree(raw)
                val out = LinkedHashMap<String, String>()
                node.fieldNames().forEach { n -> out[n.lowercase()] = node.get(n).asText() }
                out
            }.getOrDefault(emptyMap())
        }
    }

    private fun argString(args: Array<Any?>, index: Int, what: String): String =
        args.getOrNull(index) as? String ?: throw IllegalArgumentException("expected string at [$index]: $what")

    // ---------------------------------------------------------------------
    // Script assembly
    // ---------------------------------------------------------------------

    private fun jstr(s: String): String = mapper.writeValueAsString(s)

    private fun buildScript(vendor: String, pluginCode: String, method: String, argsJson: String): String =
        buildString {
            append(vendor)
            append('\n')
            append(PRELUDE)
            append("\n__buksCjsModule('plugin', function(require, module, exports){\n")
            append(pluginCode)
            append("\n});\n")
            append("var __buksInst = __buksRequire('plugin');\n")
            append("if (__buksInst && typeof __buksInst.default !== 'undefined') { __buksInst = __buksInst.default; }\n")
            append("function __buksFixArgs(method, args) {\n")
            append("  if ((method === 'searchNovels' || method === 'searchManga') && (args.length < 3 || args[2] === null || args[2] === undefined)) {\n")
            append("    args = args.slice(); while (args.length < 2) { args.push(null); }\n")
            append("    args[2] = (__buksInst.filters && typeof __buksInst.filters === 'object') ? __buksInst.filters : {};\n")
            append("  }\n")
            append("  if (method === 'popularNovels' && (args.length < 2 || args[1] === null || typeof args[1] !== 'object')) {\n")
            append("    args = args.slice(); args[1] = {};\n")
            append("  }\n")
            append("  if (method === 'popularNovels' && args[1] && (args[1].filters === null || args[1].filters === undefined)) {\n")
            append("    args[1].filters = (__buksInst.filters && typeof __buksInst.filters === 'object') ? __buksInst.filters : {};\n")
            append("  }\n")
            append("  return args;\n")
            append("}\n")
            append("globalThis.__buksResult = undefined;\n")
            append("Promise.resolve()\n")
            append("  .then(function(){ return __buksInst[")
            append(jstr(method))
            append("].apply(__buksInst, __buksFixArgs(")
            append(jstr(method))
            append(", JSON.parse(")
            append(jstr(argsJson))
            append("))); })\n")
            append("  .then(function(r){ globalThis.__buksResult = JSON.stringify(r === undefined ? null : r); })\n")
            append("  .catch(function(e){ globalThis.__buksResult = JSON.stringify({ __buksError: String((e && e.message) || e), __buksStack: String((e && e.stack) || '') }); });\n")
        }

    /**
     * CommonJS module registry, web shims (fetch/FormData/Headers/URLSearchParams/Buffer)
     * and the @libs/fetch implementation backed by the host bridge.
     */
    private const val PRELUDE = """
var __buksRegistry = {};
var __buksModuleCache = {};
function __buksCjsModule(id, factory) { __buksRegistry[id] = factory; }
function __buksRequire(name) {
  var hit = __buksModuleCache[name];
  if (hit) { return hit.exports; }
  var f = __buksRegistry[name];
  if (f) {
    var m = { exports: {} };
    __buksModuleCache[name] = m;
    f(function(req) { return __buksRequire(req); }, m, m.exports);
    return m.exports;
  }
  if (globalThis.__buksVendor) {
    var v = globalThis.__buksVendor(name);
    if (typeof v !== 'undefined') { __buksModuleCache[name] = { exports: v }; return v; }
  }
  throw new Error('Cannot find module: ' + name);
}
function __buksBufferShim() {}
__buksBufferShim.from = function(input, encoding) {
  if (encoding === 'base64') { return buksDecode(String(input)); }
  return String(input);
};
__buksBufferShim.prototype.toString = function() { return String(this); };
globalThis.Buffer = __buksBufferShim;
function __buksHeadersObject(obj) { this.map = obj || {}; }
__buksHeadersObject.prototype.get = function(n) { var v = this.map[String(n).toLowerCase()]; return v === undefined ? null : v; };
__buksHeadersObject.prototype.has = function(n) { return this.map[String(n).toLowerCase()] !== undefined; };
__buksHeadersObject.prototype.set = function(n, v) { this.map[String(n).toLowerCase()] = String(v); };
function __buksNormalizeInit(init) {
  var out = {};
  if (!init) { return out; }
  if (init.method) { out.method = String(init.method); }
  var headers = null;
  if (init.headers) {
    headers = {};
    if (init.headers instanceof __buksHeadersObject || (init.headers && init.headers.map)) {
      for (var hk in init.headers.map) { headers[hk] = init.headers.map[hk]; }
    } else {
      for (var hk2 in init.headers) {
        var hv = init.headers[hk2];
        if (typeof hv !== 'undefined' && hv !== null) { headers[hk2.toLowerCase()] = String(hv); }
      }
    }
  }
  if (headers) { out.headers = headers; }
  if (init.body !== undefined && init.body !== null) {
    if (typeof init.body === 'string') { out.body = init.body; }
    else if (init.body && init.body.entries && !init.body.length) {
      var form = {};
      var entries = init.body.entries;
      for (var fi = 0; fi < entries.length; fi++) { form[entries[fi][0]] = String(entries[fi][1]); }
      out.body = form;
    } else if (typeof init.body === 'object') { out.body = init.body; }
  }
  return out;
}
function __buksResponse(raw) {
  var headerMap = raw.headers || {};
  var resp = {
    ok: raw.ok === true,
    status: raw.status || 0,
    statusText: '',
    url: raw.url || '',
    headers: new __buksHeadersObject(headerMap),
    body: raw.body || ''
  };
  resp.text = function() { return Promise.resolve(resp.body); };
  resp.json = function() { return Promise.resolve(JSON.parse(resp.body || 'null')); };
  resp.arrayBuffer = function() {
    var s = resp.body; var buf = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) { buf[i] = s.charCodeAt(i) & 255; }
    return Promise.resolve(buf.buffer);
  };
  resp.clone = function() { return resp; };
  return resp;
}
__buksCjsModule('@libs/fetch', function(require, module, exports) {
  function fetchApi(url, init) {
    return buksFetchRaw(String(url), JSON.stringify(__buksNormalizeInit(init)))
      .then(function(rawJson) { return __buksResponse(JSON.parse(rawJson)); });
  }
  function fetchText(url, init, encoding) {
    return fetchApi(url, init).then(function(r) { return r.ok ? r.body : ''; });
  }
  function fetchFile(url, init) {
    return buksFetchFile(String(url), JSON.stringify(__buksNormalizeInit(init)))
      .then(function(b64) { return b64 || ''; })
      .catch(function() { return ''; });
  }
  function fetchProto() {
    return Promise.reject(new Error('fetchProto is not supported in this runtime'));
  }
  module.exports = { fetchApi: fetchApi, fetchText: fetchText, fetchFile: fetchFile, fetchProto: fetchProto };
});
function FormData() { this.entries = []; }
FormData.prototype.append = function(k, v) { this.entries.push([String(k), String(v)]); };
globalThis.FormData = FormData;
function URLSearchParams(init) { this.map = {}; var self = this; }
URLSearchParams.prototype.append = function(k, v) { this.map[String(k)] = String(v); };
URLSearchParams.prototype.set = function(k, v) { this.map[String(k)] = String(v); };
URLSearchParams.prototype.get = function(k) { var v = this.map[String(k)]; return v === undefined ? null : v; };
URLSearchParams.prototype.toString = function() { var self = this; var parts = []; Object.keys(this.map).forEach(function(k){ parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(self.map[k])); }); return parts.join('&'); };
globalThis.URLSearchParams = URLSearchParams;
globalThis.Headers = __buksHeadersObject;
globalThis.fetch = function(url, init) {
  return buksFetchRaw(String(url), JSON.stringify(__buksNormalizeInit(init)))
    .then(function(rawJson) { return __buksResponse(JSON.parse(rawJson)); });
};
"""
}

class PluginScriptException(message: String, cause: Throwable? = null) : Exception(message, cause)

/** Key/value storage plugins keep cookies, tokens and caches in. */
interface PluginStore {
    suspend fun get(pluginId: String, key: String): String?
    suspend fun set(pluginId: String, key: String, value: String?)
}

/** Default in-memory store; replaced by the persistent store on startup. */
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
