import { isUndefined } from "../predicate/predicate.js";
//#region src/dom/walk-ancestors.ts
function walkAncestors(start, callback) {
	if (!start || typeof document === "undefined") return;
	let node = start;
	while (node) {
		const value = callback(node);
		if (!isUndefined(value)) return value;
		node = node.parentElement;
	}
}
//#endregion
export { walkAncestors };

//# sourceMappingURL=walk-ancestors.js.map