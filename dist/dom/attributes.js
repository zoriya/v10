import { escapeHtml } from "../string/escape-html.js";
//#region src/dom/attributes.ts
/**
* Convert a NamedNodeMap to a plain object.
*/
function namedNodeMapToObject(namedNodeMap) {
	const obj = {};
	for (const attr of namedNodeMap) obj[attr.name] = attr.value;
	return obj;
}
/**
* Helper function to serialize attributes into a string.
*/
function serializeAttributes(attrs) {
	let html = "";
	for (const key in attrs) {
		const value = attrs[key];
		if (value === "") html += ` ${key}`;
		else html += ` ${key}="${escapeHtml(value)}"`;
	}
	return html;
}
//#endregion
export { namedNodeMapToObject, serializeAttributes };

//# sourceMappingURL=attributes.js.map