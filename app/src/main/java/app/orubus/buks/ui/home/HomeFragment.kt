package app.orubus.buks.ui.home

import android.content.res.Configuration
import android.view.View
import androidx.fragment.app.viewModels
import app.orubus.buks.databinding.FragmentHomeBinding
import app.orubus.buks.mvvm.observe
import app.orubus.buks.ui.BaseFragment
import app.orubus.buks.util.UIHelper.fixPaddingStatusbar

class HomeFragment : BaseFragment<FragmentHomeBinding>(
    BindingCreator.Inflate(FragmentHomeBinding::inflate)
) {
    private val viewModel: HomeViewModel by viewModels()

    override fun fixLayout(view: View) {
        val compactView = false
        val spanCountLandscape = if (compactView) 2 else 6
        val spanCountPortrait = if (compactView) 1 else 3
        val orientation = resources.configuration.orientation
        if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
            binding?.homeBrowselist?.spanCount = spanCountLandscape
        } else {
            binding?.homeBrowselist?.spanCount = spanCountPortrait
        }
    }

    override fun onBindingCreated(binding: FragmentHomeBinding) {
        val browseAdapter = BrowseAdapter()
        binding.homeBrowselist.apply {
            adapter = browseAdapter
            // layoutManager = GridLayoutManager(context, 1)
            setHasFixedSize(true)
        }

        observe(viewModel.homeApis) { list ->
            browseAdapter.submitList(list)
        }

        activity?.fixPaddingStatusbar(binding.homeToolbar)
    }
}