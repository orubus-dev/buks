package app.orubus.buks.ui.mainpage

import app.orubus.buks.APIRepository
import app.orubus.buks.HeadMainPageResponse
import app.orubus.buks.MainAPI
import app.orubus.buks.SearchResponse
import app.orubus.buks.mvvm.Resource
import app.orubus.buks.mvvm.safeApiCall

class MainPageRepository(val api: APIRepository) {
    suspend fun loadMainPage(
        page: Int,
        mainCategory: Int?,
        orderBy: Int?,
        tag: Int?,
    ): Resource<HeadMainPageResponse> {
        return api.loadMainPage(
            page,
            if (mainCategory != null && api.mainCategories.size > mainCategory) api.mainCategories[mainCategory].second else null,
            if (orderBy != null && api.orderBys.size > orderBy) api.orderBys[orderBy].second else null,
            if (tag != null && api.tags.size > tag) api.tags[tag].second else null
        )
    }

    suspend fun search(query: String): Resource<List<SearchResponse>> {
        return api.search(query)
    }
}