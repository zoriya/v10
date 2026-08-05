//#region src/dom/predicates.ts
function isDocument(value) {
	return value instanceof Node && value.nodeType === 9;
}
function isShadowRoot(value) {
	return value instanceof Node && value.nodeType === 11 && "host" in value;
}
function isHTMLVideoElement(value) {
	return value instanceof HTMLVideoElement;
}
function isHTMLAudioElement(value) {
	return value instanceof HTMLAudioElement;
}
function isHTMLMediaElement(value) {
	return value instanceof HTMLMediaElement;
}
//#endregion
export { isDocument, isHTMLAudioElement, isHTMLMediaElement, isHTMLVideoElement, isShadowRoot };

//# sourceMappingURL=predicates.js.map