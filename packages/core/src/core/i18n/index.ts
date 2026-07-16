import en from './locales/en';

export type { GetBrowserTranslationsOptions } from './browser-translation';
export {
  getBrowserTranslations,
  resetBrowserTranslationCacheForTesting,
  resolveBrowserTranslationTarget,
  shouldAttemptBrowserTranslation,
} from './browser-translation';
export { flattenTranslations } from './flatten';
export { loadLocale } from './load-locale';
export type { LocaleAlias } from './locales';
export { LOCALES, localeAliases } from './locales';
export const translations = en;
export {
  findLocaleKeys,
  getCanonicalLocaleKey,
  getI18nTranslations,
  hasRegisteredLocale,
  onI18nRegistryChange,
  registerI18n,
  resetI18nRegistry,
} from './registry';
export { resolveText } from './resolve-text';
export { resolveTranslation } from './resolve-translation';
export { isText, type Text, type TextParams, textValue } from './text';
export { createTranslator } from './translator';
export type * from './types';
