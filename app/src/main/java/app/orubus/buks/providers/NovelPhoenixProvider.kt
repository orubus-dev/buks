package app.orubus.buks.providers
import app.orubus.buks.R
class NovelPhoenixProvider: NovelFireProvider() {
    override val name = "Novel Phoenix"
    override val mainUrl = "https://novelphoenix.com"
    override val iconId = R.drawable.icon_novelphoenix
    override val sectionUrl = "novel"
}