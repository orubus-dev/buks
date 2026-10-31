package app.orubus.buks.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import app.orubus.buks.MainAPI
import app.orubus.buks.util.Apis
import app.orubus.buks.util.Apis.Companion.getApiProviderLangSettings

class HomeViewModel : ViewModel() {
    val homeApis: LiveData<List<MainAPI>> by lazy {
        MutableLiveData(
            let {
                val langs = getApiProviderLangSettings()
                Apis.apis.filter { api -> api.hasMainPage && (langs.contains(api.lang)) }
            }
        )
    }
}