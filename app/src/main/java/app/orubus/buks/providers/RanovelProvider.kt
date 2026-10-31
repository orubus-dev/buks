package app.orubus.buks.providers

import app.orubus.buks.ErrorLoadingException
import app.orubus.buks.LoadResponse
import app.orubus.buks.R
import app.orubus.buks.newStreamResponse
import app.orubus.buks.setStatus
import java.util.Locale

class RanovelProvider: MeioNovelProvider() {
    override val name = "Ranovel"
    override val mainUrl = "https://ranovel.com"
    override val lang = "en"
    override val iconId = R.drawable.icon_ranovel
    override val iconBackgroundId = R.color.black
}
