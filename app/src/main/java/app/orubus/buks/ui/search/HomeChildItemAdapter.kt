package app.orubus.buks.ui.search


import android.view.LayoutInflater
import android.view.ViewGroup
import app.orubus.buks.SearchResponse
import app.orubus.buks.databinding.HomeResultGridBinding
import app.orubus.buks.ui.BaseDiffCallback
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState
import app.orubus.buks.ui.newSharedPool
import app.orubus.buks.util.UIHelper.hideKeyboard
import app.orubus.buks.util.UIHelper.setImage

class HomeChildItemAdapter(
    private val viewModel: SearchViewModel,
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
            HomeResultGridBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(holder: ViewHolderState<Any>, item: SearchResponse, position: Int) {
        val binding = holder.view as? HomeResultGridBinding ?: return

        binding.apply {
            imageView.apply {
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
