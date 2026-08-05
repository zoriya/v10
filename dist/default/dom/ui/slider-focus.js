import { containsComposed, getDeepActiveElement, isDocument } from "@videojs/utils/dom";
//#region src/dom/ui/slider-focus.ts
function isSliderFocused(root = document) {
	const active = getDeepActiveElement(isDocument(root) ? root : root.ownerDocument);
	if (active?.getAttribute("role") !== "slider") return false;
	return isDocument(root) || containsComposed(root, active);
}
//#endregion
export { isSliderFocused };

//# sourceMappingURL=slider-focus.js.map