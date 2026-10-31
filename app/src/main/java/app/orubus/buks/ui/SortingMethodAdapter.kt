package app.orubus.buks.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import app.orubus.buks.R
import app.orubus.buks.databinding.SortBottomSingleChoiceBinding
import app.orubus.buks.ui.download.SortingMethod

class SortingMethodAdapter(
    private var selectedId: Int?,
    val clickCallback: (SortingMethod, Int, Int) -> Unit
) : NoStateAdapter<SortingMethod>() {
    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            SortBottomSingleChoiceBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(
        holder: ViewHolderState<Any>,
        item: SortingMethod,
        position: Int
    ) {
        val binding = holder.view as? SortBottomSingleChoiceBinding ?: return

        binding.text1.setText(item.name)
        binding.text1.isActivated = selectedId == item.id || selectedId == item.inverse

        val drawable = if (item.inverse == item.id) {
            R.drawable.ic_baseline_check_24_listview
        } else if (selectedId == item.id) {
            R.drawable.ic_baseline_arrow_downward_24
        } else {
            R.drawable.ic_baseline_arrow_upward_24
        }

        binding.text1.setCompoundDrawablesWithIntrinsicBounds(drawable, 0, 0, 0);
        binding.text1.setOnClickListener {
            val id = if(selectedId == item.id) {
                item.inverse
            } else {
                item.id
            }
            this.selectedId = id
            this.clickCallback.invoke(item, position, id)
        }
    }
}