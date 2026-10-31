package app.orubus.buks.plugins

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

/** What kind of reader content a plugin serves. */
enum class PluginType {
    @JsonProperty("novel") NOVEL,
    @JsonProperty("manga") MANGA,
    @JsonProperty("importer") IMPORTER,
}

/** Capabilities a plugin declares; the host hides UI the plugin cannot serve. */
@JsonIgnoreProperties(ignoreUnknown = true)
data class PluginCapabilities(
    @JsonProperty("search") val search: Boolean = true,
    @JsonProperty("popular") val popular: Boolean = true,
    @JsonProperty("latest") val latest: Boolean = false,
    @JsonProperty("detail") val detail: Boolean = true,
    @JsonProperty("chapters") val chapters: Boolean = true,
    @JsonProperty("pages") val pages: Boolean = false, // manga only
    @JsonProperty("text") val text: Boolean = true,    // novel only
)

/**
 * A Buks plugin: one JSON manifest (+ its JS entry, bundled or remote).
 * The manifest is what ships in a plugin repo; the host resolves the entry
 * code next to it (same folder, `<entry>` file).
 */
@JsonIgnoreProperties(ignoreUnknown = true)
data class JsPlugin(
    @JsonProperty("id") val id: String,               // unique, e.g. "com.example.myread"
    @JsonProperty("name") val name: String,           // display name
    @JsonProperty("version") val version: Int,        // monotonic, for repo updates
    @JsonProperty("type") val type: PluginType,
    @JsonProperty("lang") val lang: String = "en",
    @JsonProperty("baseUrl") val baseUrl: String,
    @JsonProperty("entry") val entry: String = "plugin.js",
    @JsonProperty("capabilities") val capabilities: PluginCapabilities = PluginCapabilities(),
)
