import { isShadowRoot } from "./predicates.js";
//#region src/dom/tree.ts
function containsComposed(root, element) {
	let current = element;
	while (current) {
		if (current === root || root.contains(current)) return true;
		const nodeRoot = current.getRootNode();
		current = isShadowRoot(nodeRoot) ? nodeRoot.host : current.parentNode;
	}
	return false;
}
//#endregion
export { containsComposed };

//# sourceMappingURL=tree.js.map