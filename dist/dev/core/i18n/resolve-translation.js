//#region src/core/i18n/resolve-translation.ts
/** Resolves a semantic key with optional template params via a translator. */
function resolveTranslation(translator, key, ...args) {
	const [params] = args;
	const translate = translator;
	return params !== void 0 ? translate(key, params) : translate(key);
}
//#endregion
export { resolveTranslation };

//# sourceMappingURL=resolve-translation.js.map