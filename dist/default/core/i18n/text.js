import { isObject } from "@videojs/utils/predicate";
//#region src/core/i18n/text.ts
function isText(value) {
	return isObject(value) && "key" in value && "text" in value;
}
//#endregion
export { isText };

//# sourceMappingURL=text.js.map