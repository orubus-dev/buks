package app.orubus.buks.ui.home

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import app.orubus.buks.CommonActivity.activity
import app.orubus.buks.MainAPI
import app.orubus.buks.MainActivity.Companion.navigate
import app.orubus.buks.R
import app.orubus.buks.databinding.BrowseListCompactBinding
import app.orubus.buks.ui.BaseDiffCallback
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState
import app.orubus.buks.ui.mainpage.MainPageFragment

class BrowseAdapter : NoStateAdapter<MainAPI>(BaseDiffCallback(itemSame = { a, b ->
    a.name == b.name
}, contentSame = { a, b ->
    a.name == b.name
})) {
    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            BrowseListCompactBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(holder: ViewHolderState<Any>, item: MainAPI, position: Int) {
        val binding = holder.view as? BrowseListCompactBinding ?: return

        binding.apply {
            browseText.text = item.name
            item.iconId?.let { browseIcon.setImageResource(it) }
            browseIconBackground.setCardBackgroundColor(
                ContextCompat.getColor(
                    browseIconBackground.context,
                    item.iconBackgroundId
                )
            )
            browseBackground.setOnClickListener {
                activity?.navigate(
                    R.id.global_to_navigation_mainpage,
                    MainPageFragment.newInstance(item.name)
                )
            }
        }
    }
}