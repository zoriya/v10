import { containsComposed, getDeepActiveElement } from "@videojs/utils/dom";
//#region src/dom/ui/container-attrs.ts
const DEFAULT_CONTAINER_ROLE = "group";
const DEFAULT_CONTAINER_TAB_INDEX = 0;
function applyContainerAttrs(element) {
	if (!element.hasAttribute("role")) element.setAttribute("role", DEFAULT_CONTAINER_ROLE);
	if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", String(0));
}
function focusContainer(element) {
	const active = getDeepActiveElement(element.ownerDocument);
	if (!active || active === element.ownerDocument.body || !containsComposed(element, active)) element.focus({ preventScroll: true });
}
//#endregion
export { DEFAULT_CONTAINER_ROLE, DEFAULT_CONTAINER_TAB_INDEX, applyContainerAttrs, focusContainer };

//# sourceMappingURL=container-attrs.js.map