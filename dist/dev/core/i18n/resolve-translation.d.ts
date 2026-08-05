import { TranslationParams } from "./params.generated.js";
import { TranslationKey } from "./params.js";
import { TranslationOptions, Translator } from "./translator.js";
//#region src/core/i18n/resolve-translation.d.ts
type ResolveTranslationArgs<Key extends string> = Key extends TranslationKey ? TranslationParams[Key] extends never ? [params?: TranslationOptions] : [params: TranslationParams[Key] & TranslationOptions] : [params?: Record<string, string | number> & TranslationOptions];
/** Resolves a semantic key with optional template params via a translator. */
declare function resolveTranslation<Key extends string>(translator: Translator, key: Key, ...args: ResolveTranslationArgs<Key>): string;
//#endregion
export { resolveTranslation };
//# sourceMappingURL=resolve-translation.d.ts.map