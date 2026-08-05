//#region src/dom/locale/effective-locale.d.ts
/** Resolves locale: explicit non-empty value → ambient `lang` → {@link fallback}. */
declare function effectiveLocale<Locale extends string = string>(explicitLocale: Locale | undefined, ambientLang: Locale | undefined, fallback?: Locale): Locale;
//#endregion
export { effectiveLocale };
//# sourceMappingURL=effective-locale.d.ts.map