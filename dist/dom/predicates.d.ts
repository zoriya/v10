//#region src/dom/predicates.d.ts
declare function isDocument(value: unknown): value is Document;
declare function isShadowRoot(value: unknown): value is ShadowRoot;
declare function isHTMLVideoElement(value: unknown): value is HTMLVideoElement;
declare function isHTMLAudioElement(value: unknown): value is HTMLAudioElement;
declare function isHTMLMediaElement(value: unknown): value is HTMLMediaElement;
//#endregion
export { isDocument, isHTMLAudioElement, isHTMLMediaElement, isHTMLVideoElement, isShadowRoot };
//# sourceMappingURL=predicates.d.ts.map