//#region src/core/i18n/locales.d.ts
/** Non-English locale packs shipped with Video.js. */
declare const LOCALES: readonly ['ar', 'az', 'bs', 'bg', 'bn', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'gd', 'gl', 'he', 'hi', 'hr', 'hu', 'it', 'ja', 'ko', 'lv', 'mr', 'nb', 'nl', 'nn', 'ne', 'oc', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl', 'sr', 'sv', 'te', 'th', 'tr', 'uk', 'vi', 'zh-CN', 'zh-TW'];
type LocaleAlias<Tags extends readonly string[]> = Tags[number] extends `${infer Lang}-${string}` ? Lang : never;
declare function localeAliases<const Tags extends readonly string[]>(tags: Tags): LocaleAlias<Tags>[];
//#endregion
export { LOCALES, LocaleAlias, localeAliases };
//# sourceMappingURL=locales.d.ts.map