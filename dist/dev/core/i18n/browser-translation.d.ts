import { FlatTranslations, Locale } from "./params.js";
//#region src/core/i18n/browser-translation.d.ts
interface GetBrowserTranslationsOptions {
  /**
   * When true, call `Translator.create()` for `downloadable` / `downloading` (may download the
   * on-device model). Defaults to false — production providers only use pre-installed models.
   */
  downloadIfNeeded?: boolean;
  /** Invoked when a model download starts and when `Translator.create()` resolves. */
  onModelDownload?: {
    start?: (targetLanguage: string) => void;
    finish?: (targetLanguage: string) => void;
  };
}
/** First non-English tag in the lookup chain used as the browser translation target. */
declare function resolveBrowserTranslationTarget(locale: string): string | undefined;
/** Whether to invoke the Browser Translation API for this locale after lazy built-in loading. */
declare function shouldAttemptBrowserTranslation(locale: Locale, loadedLazyTags: readonly string[], translations?: Partial<FlatTranslations>): boolean;
/**
 * Translates English registry values via the on-device Browser Translation API when a pre-installed
 * model is available. Results are cached per target language tag.
 */
declare function getBrowserTranslations(locale: string, options?: GetBrowserTranslationsOptions): Promise<Partial<FlatTranslations>>;
/** Clears the browser translation cache (test isolation). */
declare function resetBrowserTranslationCacheForTesting(): void;
//#endregion
export { GetBrowserTranslationsOptions, getBrowserTranslations, resetBrowserTranslationCacheForTesting, resolveBrowserTranslationTarget, shouldAttemptBrowserTranslation };
//# sourceMappingURL=browser-translation.d.ts.map