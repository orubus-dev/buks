package app.orubus.buks

import android.content.Context
import android.graphics.Typeface
import android.view.LayoutInflater
import android.view.ViewGroup
import app.orubus.buks.databinding.SortBottomSingleChoiceBinding
import app.orubus.buks.ui.NoStateAdapter
import app.orubus.buks.ui.ViewHolderState
import app.orubus.buks.util.UIHelper.parseFontFileName
import java.io.File

data class FontFile(
    val file : File?
)

class FontAdapter(val context: Context, private val checked: Int?, val clickCallback : (FontFile) -> Unit) : NoStateAdapter<FontFile>() {
    override fun onCreateContent(parent: ViewGroup): ViewHolderState<Any> {
        return ViewHolderState(
            SortBottomSingleChoiceBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindContent(holder: ViewHolderState<Any>, item: FontFile, position: Int) {
        val binding = holder.view as? SortBottomSingleChoiceBinding ?: return
        val font = item.file

        binding.text1.text = parseFontFileName(font?.name)
        binding.text1.isActivated = position == checked
        if (font != null) {
            binding.text1.typeface = Typeface.createFromFile(font)
        }
        binding.text1.setOnClickListener {
            this.clickCallback.invoke(item)
        }
    }
}