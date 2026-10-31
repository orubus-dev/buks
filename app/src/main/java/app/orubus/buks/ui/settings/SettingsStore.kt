package app.orubus.buks.ui.settings

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.res.stringResource
import app.orubus.buks.R
import app.orubus.buks.util.Apis.Companion.apis
import com.mihon.common.preference.AndroidPreferenceStore
import kotlinx.collections.immutable.toPersistentHashSet

@Composable
fun AndroidPreferenceStore.searchProvidersList() = getStringSet(
    stringResource(R.string.search_providers_list_key),
    remember { apis.map { it.name }.toSet() }
)

@Composable
fun AndroidPreferenceStore.searchLangList() = getStringSet(
    stringResource(R.string.provider_lang_key),
    remember { apis.map { it.lang }.toPersistentHashSet() }
)