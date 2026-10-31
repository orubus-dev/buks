package app.orubus.buks.ui.search

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import app.orubus.buks.SearchResponse
import app.orubus.buks.databinding.SearchResultGridBinding
import app.orubus.buks.ui.BaseDiffCallback
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState
import app.orubus.buks.ui.newSharedPool
import app.orubus.buks.util.UIHelper.hideKeyboard
import app.orubus.buks.util.UIHelper.setImage
import app.orubus.buks.widget.AutofitRecyclerView
import kotlin.math.roundToInt

class SearchAdapter(
    private val viewModel: SearchViewModel,
    private val resView: AutofitRecyclerView,
) :
    NoStateAdapter<SearchResponse>(BaseDiffCallback(itemSame = { a, b ->
        a.url == b.url
    }, contentSame = { a, b ->
        a == b
    })) {

    companion object {
        val sharedPool =
            newSharedPool {
                setMaxRecycledViews(CONTENT, 10)
            }
    }

    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            SearchResultGridBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(holder: ViewHolderState<Any>, item: SearchResponse, position: Int) {
        val binding = holder.view as? SearchResultGridBinding ?: return
        binding.apply {
            val coverHeight: Int = (resView.itemWidth / 0.68).roundToInt()
            imageView.apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    coverHeight
                )
                setLayerType(View.LAYER_TYPE_SOFTWARE, null)
                setImage(item.image)

                setOnClickListener {
                    viewModel.load(item)
                }

                setOnLongClickListener { view ->
                    hideKeyboard(view)
                    viewModel.showMetadata(item)
                    return@setOnLongClickListener true
                }
            }
            imageText.text = item.name
        }
    }
}