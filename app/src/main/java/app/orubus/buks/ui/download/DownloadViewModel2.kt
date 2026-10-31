package app.orubus.buks.ui.download

import androidx.compose.runtime.Immutable
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lagradost.cloudstream4.state.ActionHandler
import com.lagradost.cloudstream4.state.DebounceQuery
import com.lagradost.cloudstream4.state.DefaultStateContainer
import com.lagradost.cloudstream4.state.StateContainer
import app.orubus.buks.BaseApplication
import app.orubus.buks.BaseApplication.Companion.getKey
import app.orubus.buks.BaseApplication.Companion.getKeys
import app.orubus.buks.BaseApplication.Companion.removeKey
import app.orubus.buks.BaseApplication.Companion.setKey
import app.orubus.buks.BookDownloader2
import app.orubus.buks.BookDownloader2.currentDownloads
import app.orubus.buks.BookDownloader2.downloadInfoMutex
import app.orubus.buks.BookDownloader2.downloadProgress
import app.orubus.buks.BookDownloader2.downloadProgressChanged
import app.orubus.buks.BookDownloader2Helper.IMPORT_SOURCE_PDF
import app.orubus.buks.CURRENT_TAB
import app.orubus.buks.DOWNLOAD_NORMAL_SORTING_METHOD
import app.orubus.buks.DOWNLOAD_SETTINGS
import app.orubus.buks.DOWNLOAD_SORTING_METHOD
import app.orubus.buks.DownloadActionType
import app.orubus.buks.DownloadFileWorkManager
import app.orubus.buks.DownloadProgressState
import app.orubus.buks.DownloadState
import app.orubus.buks.RESULT_BOOKMARK
import app.orubus.buks.RESULT_BOOKMARK_STATE
import app.orubus.buks.ui.ReadType
import app.orubus.buks.ui.common.ImmutableDownloadState
import app.orubus.buks.ui.common.ImmutableSearchList
import app.orubus.buks.ui.common.ImmutableSearchResponse
import app.orubus.buks.ui.common.SearchResponseAction
import app.orubus.buks.ui.common.SearchResponseOperation
import app.orubus.buks.ui.common.SortingMethodType
import app.orubus.buks.ui.common.updateRow
import app.orubus.buks.ui.common.updateRows
import app.orubus.buks.ui.download.DownloadDialog.DeleteBookmark
import app.orubus.buks.ui.download.DownloadDialog.DeleteItem
import app.orubus.buks.util.ResultCached
import kotlinx.collections.immutable.PersistentList
import kotlinx.collections.immutable.persistentListOf
import kotlinx.collections.immutable.toPersistentHashMap
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext

@Immutable
data class DownloadPageState(
    val query: String = "",
    val pages: PersistentList<ImmutableSearchList> = persistentListOf(),
    val downloadSortingMethod: SortingMethodType = SortingMethodType.Default,
    val regularSortingMethod: SortingMethodType = SortingMethodType.Default,
    val activePage: Int = 0,
    /** null -> not shown */
    val dialog: DownloadDialog? = null,
)

@Immutable
sealed class DownloadDialog {
    object SortDownloads : DownloadDialog()
    object SortBookmarks : DownloadDialog()
    data class DeleteItem(val item: ImmutableSearchResponse) : DownloadDialog()
    data class DeleteBookmark(val item: ImmutableSearchResponse) : DownloadDialog()
}

@Immutable
sealed class DownloadPageAction {
    object Refresh : DownloadPageAction()
    data class Search(val query: String) : DownloadPageAction()
    data class ResultAction(val action: SearchResponseAction) : DownloadPageAction()
    object ShowSorting : DownloadPageAction()
    object DismissDialog : DownloadPageAction()
    data class SelectSortingMethod(
        val downloadSortingMethod: SortingMethodType? = null,
        val regularSortingMethod: SortingMethodType? = null
    ) : DownloadPageAction()

    data class SelectPage(val page: Int) : DownloadPageAction()
}

class DownloadViewModel2 : ViewModel(), ActionHandler<DownloadPageAction>,
    StateContainer<DownloadPageState> by DefaultStateContainer(DownloadPageState()) {
    companion object {
        val readList = persistentListOf(
            ReadType.READING,
            ReadType.ON_HOLD,
            ReadType.PLAN_TO_READ,
            ReadType.COMPLETED,
            ReadType.DROPPED,
        )
    }

    private val searchPipe = DebounceQuery()
    override fun onAction(action: DownloadPageAction) {
        when (action) {
            is DownloadPageAction.Refresh -> {
                viewModelScope.launch {
                    val page = state.value.activePage
                    if (page == 0) {
                        refreshDownloads()
                    } else {
                        refreshPage(page)
                    }
                }
            }

            is DownloadPageAction.Search -> {
                viewModelScope.launch {
                    searchPipe.emit(action.query)
                }
            }

            is DownloadPageAction.ResultAction -> {
                resultAction(action.action)
            }

            DownloadPageAction.ShowSorting -> {
                updateState {
                    copy(
                        dialog = if (activePage == 0) {
                            DownloadDialog.SortDownloads
                        } else {
                            DownloadDialog.SortBookmarks
                        }
                    )
                }
            }

            is DownloadPageAction.SelectPage -> {
                setKey(DOWNLOAD_SETTINGS, CURRENT_TAB, action.page)
                updateState {
                    copy(activePage = action.page)
                }
            }

            DownloadPageAction.DismissDialog -> {
                updateState {
                    copy(dialog = null)
                }
            }

            is DownloadPageAction.SelectSortingMethod -> {
                updateState {
                    val newRegularSortingMethod =
                        action.regularSortingMethod ?: regularSortingMethod
                    val newDownloadSortingMethod =
                        action.downloadSortingMethod ?: downloadSortingMethod

                    setKey(DOWNLOAD_SETTINGS, DOWNLOAD_SORTING_METHOD, newDownloadSortingMethod.id)
                    setKey(
                        DOWNLOAD_SETTINGS,
                        DOWNLOAD_NORMAL_SORTING_METHOD,
                        newRegularSortingMethod.id
                    )

                    val activeQuery = query
                    copy(
                        downloadSortingMethod = newDownloadSortingMethod,
                        regularSortingMethod = newRegularSortingMethod,
                        pages = pages.updateRows { index ->
                            search(
                                query = activeQuery,
                                sortingMethod = if (index == 0) newDownloadSortingMethod else newRegularSortingMethod
                            )
                        }
                    )
                }
            }
        }
    }

    private fun onRefreshingChanged(item: BookDownloader2.RefreshQuery) = viewModelScope.launch {
        // This is a hijack of the "generating" system, however we assume that it is fine
        updateState {
            copy(
                pages = pages.updateRow(item.page) {
                    update(item.id) {
                        copy(generating = item.refreshing)
                    }
                },
            )
        }
    }

    private fun onBookmarkChanged(id: Int) = viewModelScope.launch {
        val result = getKey<ResultCached>(RESULT_BOOKMARK, id.toString())
        val state = getKey<Int>(RESULT_BOOKMARK_STATE, id.toString())

        // Always remove it, and then readd it
        updateState {
            copy(
                pages = pages.updateRows { index ->
                    if (index != 0) {
                        delete(id)
                    } else {
                        this
                    }
                },
            )
        }
        if (result == null || state == null) {
            return@launch
        }

        val newIndex = readList.indexOf(ReadType.fromSpinner(state))
        if (newIndex == -1) {
            return@launch
        }
        val response = ImmutableSearchResponse.from(result)
        updateState {
            copy(
                pages = pages.updateRow(newIndex + 1) {
                    insert(id, response)
                },
            )
        }
    }

    private fun readEpub(response: ImmutableSearchResponse) = viewModelScope.launch {
        withContext(Dispatchers.Default) {
            val id = response.id!!
            val downloadState = response.downloadState!!
            try {
                updateState {
                    copy(pages = pages.updateRow(0) {
                        update(id) {
                            copy(generating = true)
                        }
                    })
                }

                if (response.isImported && downloadState.progress < downloadState.total) {
                    BookDownloader2.preloadPartialImportedPdf(response)
                }

                BookDownloader2.readEpub(response)
            } finally {
                updateState {
                    copy(pages = pages.updateRow(0) {
                        update(id) {
                            copy(
                                generating = false,
                            )
                        }
                    })
                }
            }
        }
    }

    private fun resultAction(action: SearchResponseAction) {
        when (action.operation) {
            SearchResponseOperation.Read -> {
                readEpub(action.response)
            }

            SearchResponseOperation.Open, SearchResponseOperation.NoOp -> {
                action.doAction()
            }

            SearchResponseOperation.Stream -> {
                viewModelScope.launch {
                    val id = action.response.id!!
                    updateState {
                        copy(pages = pages.updateRows {
                            update(id) {
                                copy(generating = true)
                            }
                        })
                    }

                    BookDownloader2.stream(action.response)
                    updateState {
                        copy(pages = pages.updateRows {
                            update(id) {
                                copy(
                                    generating = false,
                                )
                            }
                        })
                    }
                }
            }

            SearchResponseOperation.AskDelete -> {
                if (action.response.downloadState != null) {
                    updateState { copy(dialog = DeleteItem(action.response)) }
                } else {
                    updateState { copy(dialog = DeleteBookmark(action.response)) }
                }
            }

            SearchResponseOperation.Delete -> {
                val id = action.response.id!!
                if (action.response.downloadState != null) {
                    BookDownloader2.deleteNovel(
                        action.response.author,
                        action.response.name,
                        action.response.apiName
                    )
                } else {
                    removeKey(RESULT_BOOKMARK, id.toString())
                    removeKey(RESULT_BOOKMARK_STATE, id.toString())

                    updateState {
                        copy(
                            pages = pages.updateRows { index ->
                                if (index != 0) {
                                    delete(id)
                                } else {
                                    this
                                }
                            },
                        )
                    }
                }
            }

            SearchResponseOperation.Metadata -> {
                action.doAction()
            }

            SearchResponseOperation.Download -> {
                DownloadFileWorkManager.download(
                    action.response,
                    BaseApplication.context ?: return
                )
            }

            SearchResponseOperation.Pause -> {
                val id = action.response.id!!
                BookDownloader2.addPendingAction(
                    id,
                    DownloadActionType.Pause
                )
            }

            SearchResponseOperation.Resume -> {
                val id = action.response.id!!
                BookDownloader2.addPendingAction(
                    id,
                    DownloadActionType.Resume
                )
            }

            SearchResponseOperation.Stop -> {
                val id = action.response.id!!
                BookDownloader2.addPendingAction(
                    id,
                    DownloadActionType.Stop
                )
            }
        }
    }


    fun refreshPage(page: Int) {
        DownloadFileWorkManager.refreshAllReadingProgress(
            BaseApplication.context ?: return,
            page
        )
    }

    suspend fun refreshDownloads() {
        val progressState = state.value
        val downloadPage = progressState.pages.getOrNull(0) ?: return

        val values =
            downloadPage.data.filter { (id, card) ->
                val notImported = !card.isImported && card.apiName != IMPORT_SOURCE_PDF
                val downloadState = card.downloadState ?: return@filter false

                val canDownload =
                    downloadState.total > 0 && downloadState.progressPercentage > 0.9f

                val notDownloading = !currentDownloads.containsKey(
                    id
                )
                notImported && canDownload && notDownloading
            }

        downloadInfoMutex.withLock {
            for ((id, _) in values) {
                downloadProgress[id]?.apply {
                    state = DownloadState.IsPending
                    lastUpdatedMs = System.currentTimeMillis()
                    downloadProgressChanged.invoke(id to this@apply)
                }
            }
        }

        val context = BaseApplication.context ?: return
        for (card in values.values) {
            DownloadFileWorkManager.download(card, context)
        }
    }

    init {
        viewModelScope.launch {
            searchPipe.launch { newQuery ->
                updateState {
                    copy(
                        query = newQuery,
                        pages = pages.updateRows {
                            search(newQuery)
                        }
                    )
                }
            }
        }
        viewModelScope.launch {
            loadAll()
        }
        BookDownloader2.downloadProgressChanged += this::onDownloadStateChange
        BookDownloader2.downloadRemoved += this::onDownloadRemoved
        BookDownloader2.downloadDataChanged += this::onDownloadAdded
        BookDownloader2.bookmarkChanged += this::onBookmarkChanged
        BookDownloader2.refreshingChanged += this::onRefreshingChanged
        BookDownloader2.chapterReadChanged += this::onChapterChanged
        BookDownloader2.openChanged += this::onOpen
    }

    override fun onCleared() {
        BookDownloader2.downloadProgressChanged -= this::onDownloadStateChange
        BookDownloader2.downloadRemoved -= this::onDownloadRemoved
        BookDownloader2.downloadDataChanged -= this::onDownloadAdded
        BookDownloader2.bookmarkChanged -= this::onBookmarkChanged
        BookDownloader2.refreshingChanged -= this::onRefreshingChanged
        BookDownloader2.chapterReadChanged -= this::onChapterChanged
        BookDownloader2.openChanged -= this::onOpen
    }

    fun onOpen(id: Int) {
        updateState {
            copy(pages = pages.updateRows {
                update(id) {
                    copy(
                        chaptersRead = ImmutableSearchResponse.chaptersRead(name),
                        timeOfPageOpened = ImmutableSearchResponse.timeOfPageOpened(id),
                        epubSize = ImmutableSearchResponse.epubSize(id)
                    )
                }
            })
        }
    }

    fun onChapterChanged(name: String) {
        updateState {
            copy(pages = pages.updateRows {
                val ids = data.filter { it.value.name == name }
                if (ids.isEmpty()) return@updateRows this

                var out = this
                for (id in ids.keys) {
                    out = out.update(id) {
                        copy(
                            chaptersRead = ImmutableSearchResponse.chaptersRead(name),
                            timeOfPageOpened = ImmutableSearchResponse.timeOfPageOpened(id),
                            epubSize = ImmutableSearchResponse.epubSize(id)
                        )
                    }
                }
                return@updateRows out
            })
        }
    }

    fun onDownloadAdded(item: Pair<Int, DownloadFragment.DownloadData>) = viewModelScope.launch {
        val (id, page) = item

        val searchResponse = ImmutableSearchResponse.from(
            id,
            page,
            ImmutableDownloadState.from(
                downloadInfoMutex.withLock { downloadProgress[id] } ?: return@launch
            )
        )

        updateState {
            copy(
                pages = pages.updateRow(0) {
                    insert(id, searchResponse)
                },
            )
        }
    }

    fun onDownloadRemoved(id: Int) = viewModelScope.launch {
        updateState {
            copy(
                pages = pages.updateRow(0) {
                    delete(id)
                },
            )
        }
    }

    fun onDownloadStateChange(data: Pair<Int, DownloadProgressState>) = viewModelScope.launch {
        val (id, downloadState) = data
        val newDownloadState = ImmutableDownloadState.from(downloadState)

        updateState {
            copy(
                pages = pages.updateRow(0) {
                    update(id) {
                        copy(downloadState = newDownloadState)
                    }
                }
            )
        }
    }

    suspend fun loadAll() = withContext(Dispatchers.Default) {
        run {
            val downloadSortingMethod =
                getKey(DOWNLOAD_SETTINGS, DOWNLOAD_SORTING_METHOD) ?: DEFAULT_SORT
            val regularSortingMethod =
                getKey(DOWNLOAD_SETTINGS, DOWNLOAD_NORMAL_SORTING_METHOD) ?: DEFAULT_SORT
            val query = ""
            val page = getKey<Int>(DOWNLOAD_SETTINGS, CURRENT_TAB) ?: 0
            updateState {
                copy(
                    query = query,
                    regularSortingMethod = SortingMethodType.from(regularSortingMethod),
                    downloadSortingMethod = SortingMethodType.from(downloadSortingMethod),
                    activePage = page
                )
            }
        }

        val mapping: HashMap<Int, ArrayList<Pair<Int, ImmutableSearchResponse>>> = hashMapOf(
            ReadType.PLAN_TO_READ.prefValue to arrayListOf(),
            ReadType.DROPPED.prefValue to arrayListOf(),
            ReadType.COMPLETED.prefValue to arrayListOf(),
            ReadType.ON_HOLD.prefValue to arrayListOf(),
            ReadType.READING.prefValue to arrayListOf(),
        )
        val keys = getKeys(RESULT_BOOKMARK_STATE)
        for (key in keys ?: emptyList()) {
            val type = getKey<Int>(key) ?: continue
            val id = key.replaceFirst(
                RESULT_BOOKMARK_STATE,
                RESULT_BOOKMARK
            )
            val cached = getKey<ResultCached>(id) ?: continue
            mapping[type]?.add(
                cached.id to ImmutableSearchResponse.from(cached)
            )
        }

        val map = downloadInfoMutex.withLock {
            BookDownloader2.downloadData.mapNotNull { entry ->
                entry.key to ImmutableSearchResponse.from(
                    entry.key,
                    entry.value,
                    ImmutableDownloadState.from(
                        downloadProgress[entry.key] ?: return@mapNotNull null
                    )
                )
            }
        }

        val stateValue = state.value

        val concat: List<ImmutableSearchList> = buildList {
            add(
                ImmutableSearchList.new(
                    map.toMap().toPersistentHashMap(),
                    stateValue.query,
                    stateValue.downloadSortingMethod
                )
            )
            for (x in readList) {
                add(
                    ImmutableSearchList.new(
                        mapping[x.prefValue]!!.toMap().toPersistentHashMap(),
                        stateValue.query,
                        stateValue.regularSortingMethod
                    )
                )
            }
        }

        val pages = concat.toPersistentList()

        updateState {
            copy(pages = pages)
        }
    }
}