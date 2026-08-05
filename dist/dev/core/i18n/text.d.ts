//#region src/core/i18n/text.d.ts
interface Text {
  readonly key: string;
  readonly text: string;
}
declare function isText(value: unknown): value is Text;
type TextParams = Record<string, string | number>;
//#endregion
export { Text, TextParams, isText };
//# sourceMappingURL=text.d.ts.map