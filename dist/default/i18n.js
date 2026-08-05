import en_default from "./i18n/locales/en.js";
import { flattenTranslations } from "./core/i18n/utils/flatten.js";
import { findLocaleKeys, getCanonicalLocaleKey, getI18nTranslations, hasRegisteredLocale, onI18nRegistryChange, registerI18n, resetI18nRegistry } from "./core/i18n/registry.js";
import { getBrowserTranslations, resetBrowserTranslationCacheForTesting, resolveBrowserTranslationTarget, shouldAttemptBrowserTranslation } from "./core/i18n/browser-translation.js";
import { loadLocale } from "./core/i18n/load-locale.js";
import { LOCALES, localeAliases } from "./core/i18n/locales.js";
import { resolveText } from "./core/i18n/resolve-text.js";
import { resolveTranslation } from "./core/i18n/resolve-translation.js";
import { isText } from "./core/i18n/text.js";
import { translateText } from "./core/i18n/translate-text.js";
import { createTranslator } from "./core/i18n/translator.js";
//#region src/core/i18n/index.ts
const translations = en_default;
//#endregion
export { LOCALES, createTranslator, findLocaleKeys, flattenTranslations, getBrowserTranslations, getCanonicalLocaleKey, getI18nTranslations, hasRegisteredLocale, isText, loadLocale, localeAliases, onI18nRegistryChange, registerI18n, resetBrowserTranslationCacheForTesting, resetI18nRegistry, resolveBrowserTranslationTarget, resolveText, resolveTranslation, shouldAttemptBrowserTranslation, translateText, translations };

//# sourceMappingURL=i18n.js.map