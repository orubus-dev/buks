package app.orubus.buks.providers

import app.orubus.buks.R

class ArNoProvider: MeioNovelProvider() {
    override val name = "Ar-No"
    override val mainUrl = "https://ar-no.com"
    override val lang = "ar"
    override val iconId = R.drawable.icon_arnovel
    override val iconBackgroundId = R.color.black
}