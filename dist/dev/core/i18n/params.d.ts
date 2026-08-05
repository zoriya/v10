import { LOCALES } from "./locales.js";
import { TranslationParams } from "./params.generated.js";
import { Contains, UnionToIntersection } from "@videojs/utils/types";
//#region src/core/i18n/params.d.ts
/** BCP 47 language tag; built-ins are narrowed for autocomplete. */
type Locale = (typeof LOCALES)[number] | (string & {});
/** Nested shape used by authored locale files. */
interface Translations {
  readonly [key: string]: string | Translations | undefined;
}
type TranslationKey = keyof TranslationParams;
type ParametricKey = { [Key in TranslationKey]: TranslationParams[Key] extends never ? never : Key; }[TranslationKey];
type ParametricTemplate<Params> = Params extends Record<string, unknown> ? UnionToIntersection<{ [Name in keyof Params & string]: Contains<`{${Name}}`>; }[keyof Params & string]> : never;
type ParametricTranslations = { [Key in ParametricKey]: ParametricTemplate<TranslationParams[Key]>; };
/** Player copy keyed by semantic key; all entries are optional overlays. */
type FlatTranslations = { [Key in TranslationKey]?: TranslationParams[Key] extends never ? string : Key extends keyof ParametricTranslations ? ParametricTranslations[Key] : string; } & Record<string, string | undefined>;
//#endregion
export { FlatTranslations, Locale, TranslationKey, type TranslationParams, Translations };
//# sourceMappingURL=params.d.ts.map