import { FlatTranslations, Translations } from "../params.js";
//#region src/core/i18n/utils/flatten.d.ts
interface FlattenTranslationsOptions {
  prefix?: string;
}
declare function flattenTranslations(locale: Translations, options?: FlattenTranslationsOptions): FlatTranslations;
//#endregion
export { FlattenTranslationsOptions, flattenTranslations };
//# sourceMappingURL=flatten.d.ts.map