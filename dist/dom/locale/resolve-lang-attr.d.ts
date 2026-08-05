//#region src/dom/locale/resolve-lang-attr.d.ts
/**
 * Normalizes a raw `lang` string (e.g. from {@link findNearestLang}): empty or whitespace-only →
 * `undefined`, otherwise the trimmed value.
 */
declare function resolveLangAttr<Locale extends string = string>(raw: string | undefined): Locale | undefined;
//#endregion
export { resolveLangAttr };
//# sourceMappingURL=resolve-lang-attr.d.ts.map