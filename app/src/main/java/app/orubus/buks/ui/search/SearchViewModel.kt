package app.orubus.buks.ui.search

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import app.orubus.buks.APIRepository
import app.orubus.buks.APIRepository.Companion.providersActive
import app.orubus.buks.HomePageList
import app.orubus.buks.MainActivity
import app.orubus.buks.MainActivity.Companion.loadResult
import app.orubus.buks.OnGoingSearch
import app.orubus.buks.SearchResponse
import app.orubus.buks.mvvm.Resource
import app.orubus.buks.util.Apis.Companion.apis
import app.orubus.buks.util.Coroutines.ioSafe
import app.orubus.buks.util.amap
import kotlinx.coroutines.Job
import kotlinx.coroutines.isActive

class SearchViewModel : ViewModel() {
    private val _searchResponse: MutableLiveData<Resource<ArrayList<SearchResponse>>?> =
        MutableLiveData(null)
    val searchResponse: LiveData<Resource<ArrayList<SearchResponse>>?> get() = _searchResponse

    private val _currentSearch: MutableLiveData<ArrayList<OnGoingSearch>?> = MutableLiveData(null)
    val currentSearch: LiveData<ArrayList<OnGoingSearch>?> get() = _currentSearch

    @Volatile
    var searchCounter = 0
    private val repos = apis.map { APIRepository(it) }

    fun clearSearch() {
        searchCounter++
        ongoingSearchJob?.cancel()
        ongoingSearchJob = null
        _searchResponse.postValue(null)
        _currentSearch.postValue(null)
    }

    fun load(card: SearchResponse) {
        loadResult(card.url, card.apiName)
    }

    fun showMetadata(card: SearchResponse) {
        MainActivity.loadPreviewPage(card)
        //showToast(card.name)
    }

    var ongoingSearchJob : Job? = null

    fun search(query: String) {
        if (query.length <= 1) {
            clearSearch()
            return
        }
        ongoingSearchJob?.cancel()
        ongoingSearchJob = ioSafe {
            searchCounter++
            val localSearchCounter = searchCounter
            _searchResponse.postValue(Resource.Loading())

            val currentList = ArrayList<OnGoingSearch>()

            _currentSearch.postValue(ArrayList())

            repos.filter { a ->
                (providersActive.isEmpty() || providersActive.contains(a.name))
            }.amap { a ->
                if(!isActive) return@amap
                currentList.add(OnGoingSearch(a.name, a.search(query)))
                if (localSearchCounter == searchCounter) {
                    _currentSearch.postValue(currentList)
                }
            }
            if(!isActive) return@ioSafe

            _currentSearch.postValue(currentList)

            if (localSearchCounter != searchCounter) return@ioSafe

            val list = ArrayList<SearchResponse>()
            val nestedList =
                currentList.map { it.data }
                    .filterIsInstance<Resource.Success<List<SearchResponse>>>()
                    .map { it.value }

            // I do it this way to move the relevant search results to the top
            var index = 0
            while (true) {
                var added = 0
                for (sublist in nestedList) {
                    if (sublist.size > index) {
                        list.add(sublist[index])
                        added++
                    }
                }
                if (added == 0) break
                index++
            }
            if(!isActive) return@ioSafe

            _searchResponse.postValue(Resource.Success(list))
        }
    }

    fun loadHomepageList(item: HomePageList) {
       // SearchFragment.loadHomepageList(this, item)
    }
}