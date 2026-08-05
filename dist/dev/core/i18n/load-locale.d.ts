import { FlatTranslations } from "./params.js";
//#region src/core/i18n/load-locale.d.ts
/** Lazy-import a shipped locale pack when the tag is not already in the registry. */
declare function loadLocale(tag: string): Promise<Partial<FlatTranslations> | undefined>;
//#endregion
export { loadLocale };
//# sourceMappingURL=load-locale.d.ts.map