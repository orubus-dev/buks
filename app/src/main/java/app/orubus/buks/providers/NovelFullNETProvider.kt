package app.orubus.buks.providers

import app.orubus.buks.R

//It has content that novelfull.com  doesn’t have
class NovelFullNETProvider: AllNovelProvider() {
    override val name = "NovelFull-Net"
    override val mainUrl = "https://novelfull.net"
    override val hasMainPage = false
    override val iconId = R.drawable.icon_novelfull
    override val iconBackgroundId = R.color.white
    override val requireMobilUserAgent = true
}