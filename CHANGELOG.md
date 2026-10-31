# Changelog

## [2.0.0]
### The big feature wave
- **JavaScript plugin engine**: every extension runs in its own sandboxed QuickJS VM (ES2020, async/await) with a small host bridge (`fetch`, storage, base64) — plugins ride the app's NiceHttp client
- **Extension repo + Browse tab**: a new Browse screen with Available / Installed tabs installs sources from the Orubus plugin repo (`github.com/orubus-dev/plugins`) with update checks and one-tap install/remove
- **187 English novel sources**: the LNReader plugin ecosystem compiled to quickjs-compatible bundles — novelbin, royalroad, webnovel, wuxiaworld, lightnovelpub, scribblehub, ao3 and 180 more
- **Manga support**: new manga plugin API (Mihon-style `popularManga / searchManga / mangaDetails / chapterList / pageList`) with a bundled **MangaDex** source (official API, live-tested) and a full image reader — vertical webtoon, paged and RTL modes with pinch-zoom, chapter switching and resume
- **Book import that works**: Librera-style storage browser (`Import from storage`) with folder drill-down, multi-select EPUB/PDF, `(imported)` marks, select-all — plus **auto match finding** that fuzzy-searches your active sources and links the import to the real web book
- **Faster downloads**: parallel chapter downloads (1–8 workers, configurable in Settings) with pause/stop, live progress and ETA
- **Batch downloads**: the download menu now offers Download all unread, Download all un-downloaded, Download chapter range (from–to) and a full chapter **selection mode** with a "Download selected" bar
- **Liquid glass monochrome UI**: new Monochrome accent (near-white on glass), GlassSurface styling on the Browse tabs, and real blur-behind on the reader filter sheet (Android 12+)
- **Monochrome logo remix**: gradient-faceted glass book glyph with specular highlights, refreshed monochrome theme-icon layer and regenerated launcher art

## [1.0.0]
### First release
- Buks is born: the Orubus mod of QuickNovel by LagradOst — an adfree novel downloader that also works as an Epub reader
- Own identity: package `app.orubus.buks`, Buks name and a white-on-black launcher icon — it installs alongside the original QuickNovel and does not overwrite it
- In-app update check now points at the Orubus releases (`github.com/orubus-dev/buks`) instead of the upstream app, so Buks only ever offers its own updates
- Update picker accepts the release asset directly (by `.apk` name), and stable updates are matched by release tag — no false "update available" prompts
- Signed release builds straight from CI, with the signing key pinned by certificate fingerprint
