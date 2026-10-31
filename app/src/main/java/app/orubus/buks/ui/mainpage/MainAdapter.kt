package app.orubus.buks.ui.mainpage

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.core.view.isVisible
import app.orubus.buks.MainActivity
import app.orubus.buks.MainActivity.Companion.loadResult
import app.orubus.buks.SearchResponse
import app.orubus.buks.databinding.LoadingBottomBinding
import app.orubus.buks.databinding.SearchResultGridBinding
import app.orubus.buks.ui.BaseDiffCallback
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState
import app.orubus.buks.ui.newSharedPool
import app.orubus.buks.util.UIHelper.hideKeyboard
import app.orubus.buks.util.UIHelper.setImage
import app.orubus.buks.util.toPx
import app.orubus.buks.widget.AutofitRecyclerView
import kotlin.math.roundToInt

class MainAdapter(
    private val resView: AutofitRecyclerView,
    override var footers: Int
) : NoStateAdapter<SearchResponse>(diffCallback = BaseDiffCallback(itemSame = { a, b ->
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

    override fun onBindFooter(holder: ViewHolderState<Any>) {
        (holder.view as LoadingBottomBinding).apply {
            val coverHeight: Int =
                (resView.itemWidth / 0.68).roundToInt()

            backgroundCard.apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    coverHeight
                )
            }
            if (loadingItems)
                holder.view.resultLoading.startShimmer()
            else
                holder.view.resultLoading.stopShimmer()
        }

        holder.view.root.isVisible = loadingItems
    }

    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            SearchResultGridBinding.inflate(
                LayoutInflater.from(
                    parent.context
                ), parent, false
            )
        )
    }

    override fun onCreateFooter(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            LoadingBottomBinding.inflate(
                LayoutInflater.from(
                    parent.context
                ), parent, false
            )
        )
    }

    override fun onBindContent(
        holder: ViewHolderState<Any>,
        item: SearchResponse,
        position: Int
    ) {
        (holder.view as SearchResultGridBinding).apply {
            val compactView = false//resView.context?.getGridIsCompact() ?: return

            val coverHeight: Int =
                if (compactView) 80.toPx else (resView.itemWidth / 0.68).roundToInt()

            imageView.apply {
                layoutParams = FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    coverHeight
                )
                setImage(item.image)

                setOnClickListener {
                    loadResult(item.url, item.apiName)
                }

                setOnLongClickListener { view ->
                    hideKeyboard(view)
                    MainActivity.loadPreviewPage(item)
                    return@setOnLongClickListener true
                }
            }

            imageText.text = item.name
        }
    }

    private var loadingItems: Boolean = false

    fun setLoading(to: Boolean) {
        if (loadingItems == to) return
        if (to) {
            loadingItems = true
            notifyItemRangeChanged(itemCount - footers, footers)
        } else {
            loadingItems = false
            notifyItemRangeChanged(itemCount - footers, footers)
        }
    }
}