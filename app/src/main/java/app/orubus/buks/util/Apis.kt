package app.orubus.buks.util

import android.content.Context
import android.util.Log
import androidx.preference.PreferenceManager
import app.orubus.buks.APIRepository
import app.orubus.buks.CommonActivity.activity
import app.orubus.buks.MainAPI
import app.orubus.buks.R
import app.orubus.buks.SearchResponse
import app.orubus.buks.StreamResponse
import app.orubus.buks.providers.AllNovelProvider
import app.orubus.buks.providers.AnnasArchive
import app.orubus.buks.providers.ArNoProvider
import app.orubus.buks.providers.AsianNovelProvider
import app.orubus.buks.providers.BrightNovelProvider
import app.orubus.buks.providers.ChikariProvider
import app.orubus.buks.providers.DevilNovelsProvider
import app.orubus.buks.providers.ChrysanthemumGardenProvider
import app.orubus.buks.providers.FanMtlnProvider
import app.orubus.buks.providers.FaqWikiProvider
import app.orubus.buks.providers.FenrirRealProvider
import app.orubus.buks.providers.FreewebnovelProvider
import app.orubus.buks.providers.GalaxyNovelsProvider
import app.orubus.buks.providers.GraycityProvider
import app.orubus.buks.providers.HiraethTranslationProvider
import app.orubus.buks.providers.IndoWebNovelProvider
import app.orubus.buks.providers.LnoriProvider
import app.orubus.buks.providers.KolNovelProvider
import app.orubus.buks.providers.LibReadProvider
import app.orubus.buks.providers.LightNovelTranslationsProvider
import app.orubus.buks.providers.LnMTLProvider
import app.orubus.buks.providers.LuxonScansProvider
import app.orubus.buks.providers.MeioNovelProvider
import app.orubus.buks.providers.MtlNovelProvider
import app.orubus.buks.providers.NoBadNovelProvider
import app.orubus.buks.providers.NovLoveProvider
import app.orubus.buks.providers.NovelBinProvider
import app.orubus.buks.providers.NovelBuddyProvider
import app.orubus.buks.providers.NovelFireProvider
import app.orubus.buks.providers.NovelFranceProvider
import app.orubus.buks.providers.NovelFullNETProvider
import app.orubus.buks.providers.NovelFullProvider
import app.orubus.buks.providers.NovelLightProvider
import app.orubus.buks.providers.NovelManiaProvider
import app.orubus.buks.providers.NovelPhoenixProvider
import app.orubus.buks.providers.NovelasLigerasProvider
import app.orubus.buks.providers.PawReadProver
import app.orubus.buks.providers.PlanetaEpubProvider
import app.orubus.buks.providers.QuanbenProvider
import app.orubus.buks.providers.RanobeHubProvider
import app.orubus.buks.providers.RanobesProvider
import app.orubus.buks.providers.RanovelProvider
import app.orubus.buks.providers.ReadNovelFullProvider
import app.orubus.buks.providers.ReadOnlineFreeBookProvider
import app.orubus.buks.providers.ReadfromnetProvider
import app.orubus.buks.providers.ReadhiveProvider
import app.orubus.buks.providers.RedditProvider
import app.orubus.buks.providers.RewayatProvider
import app.orubus.buks.providers.RoyalRoadProvider
import app.orubus.buks.providers.SakuraNovelProvider
import app.orubus.buks.providers.ScribblehubProvider
import app.orubus.buks.providers.ScrollersPubProvider
import app.orubus.buks.providers.SkyNovelsProvider
import app.orubus.buks.providers.SonicMTLProvider
import app.orubus.buks.providers.SyosetuProvider
import app.orubus.buks.providers.WattpadProvider
import app.orubus.buks.providers.WtrLabProvider
import app.orubus.buks.providers.WuxiaBoxProvider
import app.orubus.buks.providers.WuxiaClickProvider
import app.orubus.buks.providers.WuxiaWorldProvider
import app.orubus.buks.util.Coroutines.ioSafe

class Apis {
    companion object {
        val apis: List<MainAPI> = arrayOf(
            //AllProvider(),
            AllNovelProvider(),
            AnnasArchive(),
            ArNoProvider(),
            AsianNovelProvider(),
            //AzynovelProvider(), // dont exist anymore
            //BestLightNovelProvider(), //dont exist anymore
            BrightNovelProvider(),
            ChrysanthemumGardenProvider(),
            ChikariProvider(),
            //ComrademaoProvider(), // domain sold/down?
            DevilNovelsProvider(),
            //EfremnetProvider(), // domain is expired
            //EngNovelProvider(),
            FanMtlnProvider(),
            FaqWikiProvider(),
            FenrirRealProvider(),
            FreewebnovelProvider(),
            GraycityProvider(),
            GalaxyNovelsProvider(),
            HiraethTranslationProvider(),
            IndoWebNovelProvider(),
            KolNovelProvider(),
            LibReadProvider(),
            //LightNovelPubProvider(), // Got cloudflare, but probably bypassable
            LightNovelTranslationsProvider(),
           // LightNovelWorldProvider(), // Replaced with chikari.moe
            LnoriProvider(),
            LnMTLProvider(),
            LuxonScansProvider(),
            MeioNovelProvider(),
            //MNovelFreeProvider(), // same as NovelFullVipProvider
            MtlNovelProvider(),
            NoBadNovelProvider(),
            NovelasLigerasProvider(),
            NovelBinProvider(),
            NovelBuddyProvider(),
            NovelFireProvider(),
            NovelFullNETProvider(),
            NovelFullProvider(),
            NovelLightProvider(),
            NovelManiaProvider(),
            NovelFranceProvider(),
            //NovelPassionProvider(), // Site gone
            //NovelsOnlineProvider(), // not working
            NovLoveProvider(),
            NovelPhoenixProvider(),
            PawReadProver(),
            //PlanetaEpubProvider(), //not working
            QuanbenProvider(),
            RanobesProvider(),
            RanovelProvider(),
            RanobeHubProvider(),
            //RanobesProvider(),
            //ReadAnyBookProvider(), // Books locked behind login
            ReadfromnetProvider(),
            ReadhiveProvider(),
            //ReadLightNovelProvider(), // NOT WORKING?
            ReadNovelFullProvider(),
            ReadOnlineFreeBookProvider(),
            RewayatProvider(),
            RoyalRoadProvider(),
            SakuraNovelProvider(), // cloudflare?
            ScribblehubProvider(),
            ScrollersPubProvider(),
            SyosetuProvider(),
            SkyNovelsProvider(),
            SonicMTLProvider(),
            WattpadProvider(),
            WtrLabProvider(),
            WuxiaBoxProvider(),
            WuxiaClickProvider(),
            WuxiaWorldProvider(),
            //WuxiaWorldOnlineProvider(), // Site does not work
            //WuxiaWorldSiteProvider(),
        ).sortedBy { it.name }

        fun getApiFromName(name: String): APIRepository {
            return getApiFromNameOrNull(name) ?: APIRepository(apis[1])
        }

        fun getApiFromNameNull(apiName: String?): MainAPI? {
            for (api in apis) {
                if (apiName == api.name)
                    return api
            }
            return null
        }

        fun getApiFromNameOrNull(name: String): APIRepository? {
            for (a in apis) {
                if (a.name == name) {
                    return APIRepository(a)
                }
            }
            if (name == RedditProvider().name) return APIRepository(RedditProvider())
            return null
        }

        fun printProviders() {
            /*
            var str = ""
            for (api in apis) {
                str += "- ${api.mainUrl}\n"
            }
            println(str)

            var str2 = ""
            for (api in apis) {
                val url = api.mainUrl.toUri()
                str2 += "                <data\n" +
                        "                        android:scheme=\"${url.scheme}\"\n" +
                        "                        android:host=\"${url.host}\"\n" +
                        "                        android:pathPrefix=\"/\" />"
            }
            println(str2)

            testProviders()*/
        }

        fun testProviders() = ioSafe {
            val TAG = "APITEST"
            apis.amap { api ->
                try {
                    var result: List<SearchResponse>? = null
                    for (x in arrayOf("my", "hello", "over", "guy")) {
                        result = api.search(x)
                        if (!result.isNullOrEmpty()) {
                            break
                        }
                    }

                    assert(!result.isNullOrEmpty()) {
                        "Invalid search response from ${api.name}"
                    }

                    val loadResult = api.load(result!![0].url)
                    assert(loadResult != null) {
                        "Invalid load response from ${api.name}"
                    }
                    if (loadResult is StreamResponse) {
                        assert(loadResult.data.isNotEmpty()) {
                            "Invalid StreamResponse (no chapters) from ${api.name}"
                        }
                        val html = api.loadHtml(loadResult.data[0].url)
                        assert(html != null) {
                            "Invalid html (null) from ${api.name}"
                        }
                    }

                    if (api.hasMainPage) {
                        val response = api.loadMainPage(
                            1,
                            api.mainCategories.firstOrNull()?.second,
                            api.orderBys.firstOrNull()?.second,
                            api.tags.firstOrNull()?.second
                        )
                        assert(response.list.isNotEmpty()) {
                            "Invalid (empty) loadMainPage list from ${api.name}"
                        }
                    }

                    Log.v(TAG, "Valid response from ${api.name}")
                } catch (t: Throwable) {
                    Log.e(TAG, "Invalid response from ${api.name}, got $t")
                }
            }
        }

        fun Context.getApiSettings(): HashSet<String> {
            val settingsManager = PreferenceManager.getDefaultSharedPreferences(this)

            val hashSet = HashSet<String>()
            hashSet.addAll(apis.map { it.name })

            val set = settingsManager.getStringSet(
                this.getString(R.string.search_providers_list_key),
                hashSet
            )?.toHashSet() ?: hashSet

            val activeLangs = getApiProviderLangSettings()
            val list = HashSet<String>()
            for (name in set) {
                val api = getApiFromNameNull(name) ?: continue
                if (activeLangs.contains(api.lang)) {
                    list.add(name)
                }
            }
            if (list.isEmpty()) return hashSet
            return list
        }

        fun getApiProviderLangSettings(): HashSet<String> {
            return activity?.getApiProviderLangSettings() ?: hashSetOf()
        }

        fun Context.getApiProviderLangSettings(): HashSet<String> {
            val settingsManager = PreferenceManager.getDefaultSharedPreferences(this)
            val hashSet = HashSet<String>()
            hashSet.add("en") // def is only en
            val list = settingsManager.getStringSet(
                this.getString(R.string.provider_lang_key),
                hashSet.toMutableSet()
            )

            if (list.isNullOrEmpty()) return hashSet
            return list.toHashSet()
        }
    }
}
