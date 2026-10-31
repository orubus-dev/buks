# Buks Roadmap

The Orubus mod of QuickNovel. Everything below lands on `main` as it is built;
versions ship only when the feature set is declared complete. Current version:
**1.0.0** (initial rebrand, own signing, in-app updates from Orubus releases).

## 1. JavaScript extension engine (foundation)

**Goal:** run reader extensions written in JavaScript — novels, manga, and future
plugin kinds — through one engine.

- **Engine:** [quickjs-kt](https://github.com/dokar3/quickjs-kt) (`io.github.dokar3:quickjs-kt-android`)
  — full ES2020 in a sandboxed QuickJS VM: async/await, ES modules, bytecode
  caching, coroutine-backed async bindings, evaluation interrupts.
- **Host bridge** exposed to plugin code (small, auditable surface):
  - `buksHttpGet(url, headers?) -> text` and `buksHttpFetch(url, options?) -> JSON`
    (backed by the app's NiceHttp client, so plugins ride the existing
    user-agent/Cloudflare handling)
  - `console.log/warn/error` routed to the app log
  - `buksStoreGet/buksStoreSet` — per-plugin key/value storage (cookies, tokens, caches)
  - `buksDecode/buksEncode` — base64 helpers for obfuscated sources
- **Plugin format:** a JSON manifest + one JS entry file (id, name, version,
  type `novel|manga|importer`, language, base URL, capabilities). Plugins can be
  bundled in the APK or loaded from remote repos (a plain GitHub repo of
  manifests — same shape as our own releases).
- **Status:** engine dependency + runtime skeleton landed on `dev`; LNReader
  plugin compatibility adapters come with the first extension batch.

## 2. Manga support

- New plugin type `manga` with capabilities: search, popular/latest, details,
  chapter list, page list (image URLs).
- Reader: paged LTR, paged RTL (manga), and vertical webtoon strip modes;
  per-series zoom fit, preload window, and reader theme (black/white/glass).
- Library coexists with novels: same shelf, type badge, separate "reading now" rails.

## 3. Wider plugin ecosystems

- **LNReader extensions:** adapter that maps the LNReader plugin API
  (`fetchApi`, cheerio-style parsing, filters) onto our bridge — goal is "drop a
  lnreader-plugin file in, it runs".
- **iReader-style book sources:** JSON book-source format with JS rule fields
  (search/details/toc/content rules) executed by the same engine.
- **Other structures:** the plugin manifest is kind-extensible so new
  ecosystems (epub importers, updater feeds) slot in without engine changes.

## 4. Book import that actually works (Librera-style, per screenshots)

- **Path browser importer:** `/` → `/sdcard` → folder drill-down with file
  counts, multi-select (EPUB / TXT / PDF / FB2 / MOBI), Cancel/OK — exactly the
  two-step flow in the screenshots.
- **Shelf menu:** Import Books, Set default cover, Rebuild book covers,
  Open a random book, Select all.
- **Auto-match finding:** after import, each book is fingerprinted (title from
  metadata + filename cleanup) and matched online: Google Books + our novel
  sources + AniList for LN/manga — fills author, description, series, and
  fetches the real cover. Non-blocking queue, per-book override, "never ask
  again" per series.
- **Progress preserved** on re-import (same-file detection by size+name hash).

## 5. Liquid glass monochrome UI with refraction

- One design language with Orubus Island: monochrome palette, glass surfaces
  (frost + specular edge), refraction on the rims.
- Compose implementation: `GlassSurface` reusable component — RenderEffect blur
  on API 31+, tinted scrim fallback below; refraction via offset bitmap-shader
  rim on API 33+, gradient highlight below.
- Applied progressively: library shelf → reader menu → settings, so features
  never wait on the reskin.

## 6. Fifty more English novel plugins

- 50 new English source providers in verified batches of ~10 (selectors checked
  against live pages before each batch lands): aggregator sites, WN/ cultivation
  hosts, and LN translators not already shipped by upstream QuickNovel.
- Delivered as classic Kotlin providers first (fastest to verify), then ported
  into the JS plugin form once the LNReader adapter is proven.

## 7. Reader power suite (from the screenshots)

- **Visual options:** font size, font + background color pickers, background
  image with alpha, font family, bold/italic/underline/shadow, anti-alias
  toggle, justified alignment + hyphenation, paragraph/line/font spacing,
  font scale, four margins — each with sliders + steppers + Reset.
- **Auto scroll & Speed read (RSVP):** six modes — rolling blind by pixel / by
  line, scroll by pixel / line / page, RSVP — with speed slider, gesture test
  drive, optional confirmation dialog.
- **Names replacement:** global and per-book rename maps (translator-name
  cleanup), applied at render time without touching the file.
- **TTS panel:** pause/stop/seek/skip, next/prev track, volume / pitch / speed
  sliders — upgraded from the current TTS service UI.

## 8. Firebase cloud sync

- Anonymous device identity on first run, optional account link (Google) later.
- Synced: library (books + metadata), reading progress, bookmarks/highlights,
  settings, name-replacement maps. Files themselves stay local.
- Firestore per-user documents, debounced writes on progress change, pull on
  open, last-writer-wins with revision counters.
- Requires the owner's Firebase service-account key (admin bootstrap: register
  `app.orubus.buks`, enable auth, create Firestore + rules, export
  google-services.json).

## Ship order

1. Engine + plugin skeleton (this branch)
2. Book import overhaul + auto-match (self-contained, no engine dependency)
3. LNReader adapter + first extension batch + manga type + reader modes
4. Reader power suite
5. 50 English plugins in batches of 10
6. Liquid glass monochrome reskin across the three main surfaces
7. Cloud sync (as soon as Firebase credentials arrive)
