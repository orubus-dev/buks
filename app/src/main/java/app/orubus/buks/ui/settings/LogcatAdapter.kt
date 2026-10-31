package app.orubus.buks.ui.settings

import android.view.LayoutInflater
import android.view.ViewGroup
import app.orubus.buks.databinding.ItemLogcatBinding
import app.orubus.buks.ui.BaseDiffCallback
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState

class LogcatAdapter() : NoStateAdapter<String>(
    diffCallback = BaseDiffCallback(
        itemSame = String::equals,
        contentSame = String::equals
    )
) {
    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            ItemLogcatBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(holder: ViewHolderState<Any>, item: String, position: Int) {
        (holder.view as? ItemLogcatBinding)?.apply {
            logText.text = item
        }
    }
}