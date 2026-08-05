import { Locale, Translations, Translator } from "@videojs/core/i18n";
//#region src/i18n/context.d.ts
interface I18nContextValue {
  translator: Translator;
  locale: Locale;
  /** True when a provider received an explicit locale prop. */
  localeFromProp: boolean;
  /** Overrides passed to this provider. */
  translations?: Partial<Translations>;
  /** Callback inherited by nested locale roots. */
  onActiveLocaleChange?: (locale: Locale) => void;
}
/** React context carrying the active translator and locale. @public */
declare const I18nContext: import("react").Context<I18nContextValue | null>;
/**
 * Returns the translator for the nearest `I18nProvider`, or English defaults when none is mounted.
 *
 * @public
 */
declare function useTranslator(): Translator;
/**
 * Returns the active BCP 47 locale tag from the nearest `I18nProvider`, or `'en'` when none is mounted.
 *
 * @public
 */
declare function useLocale(): Locale;
//#endregion
export { I18nContext, I18nContextValue, useLocale, useTranslator };
//# sourceMappingURL=context.d.ts.map