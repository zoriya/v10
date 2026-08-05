import { FlatTranslations, Locale, Translations } from "./params.js";
//#region src/core/i18n/registry.d.ts
/** Registry map key: normalized tag with unicode extensions removed (same base as {@link findLocaleKeys}). */
declare function getCanonicalLocaleKey(locale: Locale): Locale;
/**
 * Most-specific-first BCP 47 lookup tags (normalized). Always ends with `en` when missing from the truncated chain.
 *
 * @example `es-419-u-nu-latn` → `['es-419', 'es', 'en']`
 */
declare function findLocaleKeys(locale: Locale): Locale[];
/**
 * Register or merge translation strings for a BCP 47 locale tag.
 *
 * @param locale - BCP 47 tag (normalized to lowercase; unicode extensions stripped for the registry key).
 * @param translations - Partial nested locale values; merges with any existing layer for the tag.
 * @public
 */
declare function registerI18n(locale: Locale, translations: Partial<Translations>): void;
/**
 * Return the merged registered translation map for a locale. Built-in English defaults are supplied by text descriptors.
 *
 * @param locale - BCP 47 tag to resolve (e.g. `es-MX`, `zh-Hant-HK`).
 * @public
 */
declare function getI18nTranslations(locale: Locale): FlatTranslations;
/**
 * Subscribe to global registry mutations (for example after `registerI18n` or browser translation prefetch).
 *
 * @param callback - Invoked when any locale layer changes.
 * @public
 */
declare function onI18nRegistryChange(callback: () => void): () => void;
/**
 * Whether an exact locale tag has been registered via `registerI18n` (not whether lazy packs exist).
 *
 * @param locale - BCP 47 tag to test.
 * @public
 */
declare function hasRegisteredLocale(locale: Locale): boolean;
/** Clears registered locale overlays (test isolation). */
declare function resetI18nRegistry(): void;
//#endregion
export { findLocaleKeys, getCanonicalLocaleKey, getI18nTranslations, hasRegisteredLocale, onI18nRegistryChange, registerI18n, resetI18nRegistry };
//# sourceMappingURL=registry.d.ts.map