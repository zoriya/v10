import { Text, TextParams } from "./text.js";
import { Translator } from "./translator.js";
//#region src/core/i18n/translate-text.d.ts
declare function translateText(text: Text | string, params?: TextParams): string;
declare function translateText(text: Text | string, translator: Translator | undefined, params?: TextParams): string;
//#endregion
export { translateText };
//# sourceMappingURL=translate-text.d.ts.map