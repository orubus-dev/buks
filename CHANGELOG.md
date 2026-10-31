# Changelog

## [1.0.0]
### First release
- Buks is born: the Orubus mod of QuickNovel by LagradOst — an adfree novel downloader that also works as an Epub reader
- Own identity: package `app.orubus.buks`, Buks name and a white-on-black launcher icon — it installs alongside the original QuickNovel and does not overwrite it
- In-app update check now points at the Orubus releases (`github.com/orubus-dev/buks`) instead of the upstream app, so Buks only ever offers its own updates
- Update picker accepts the release asset directly (by `.apk` name), and stable updates are matched by release tag — no false "update available" prompts
- Signed release builds straight from CI, with the signing key pinned by certificate fingerprint
