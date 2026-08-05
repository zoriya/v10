//#region src/dom/focus.ts
function getDeepActiveElement(root = document) {
	let active = root.activeElement;
	while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
	return active;
}
//#endregion
export { getDeepActiveElement };

//# sourceMappingURL=focus.js.map