import { flattenTranslations } from "./utils/flatten.js";
//#region src/core/i18n/registry.ts
const registry = /* @__PURE__ */ new Map();
const subscribers = /* @__PURE__ */ new Set();
function notify() {
	for (const cb of subscribers) cb();
}
function normalizeLocaleTag(tag) {
	return tag.trim().replaceAll("_", "-").toLowerCase();
}
/** Strip unicode locale extension sequences (`-u-…`) before any private-use `-x-` block. */
function stripUnicodeExtensions(tag) {
	const xIdx = tag.indexOf("-x-");
	const uIdx = (xIdx === -1 ? tag : tag.slice(0, xIdx)).indexOf("-u-");
	if (uIdx === -1) return tag;
	return tag.slice(0, uIdx) + (xIdx === -1 ? "" : tag.slice(xIdx));
}
function chineseFallback(segments) {
	if (segments[0] !== "zh") return;
	const script = segments.find((segment) => segment === "hant" || segment === "hans");
	return script === "hant" ? "zh-tw" : script === "hans" ? "zh-cn" : void 0;
}
/** Registry map key: normalized tag with unicode extensions removed (same base as {@link findLocaleKeys}). */
function getCanonicalLocaleKey(locale) {
	return stripUnicodeExtensions(normalizeLocaleTag(locale));
}
/**
* Most-specific-first BCP 47 lookup tags (normalized). Always ends with `en` when missing from the truncated chain.
*
* @example `es-419-u-nu-latn` → `['es-419', 'es', 'en']`
*/
function findLocaleKeys(locale) {
	const base = getCanonicalLocaleKey(locale);
	if (!base) return ["en"];
	const segments = base.split("-").filter(Boolean);
	const chain = [];
	for (let len = segments.length; len >= 1; len--) chain.push(segments.slice(0, len).join("-"));
	const zhFallback = chineseFallback(segments);
	const zhIndex = chain.indexOf("zh");
	if (zhFallback && zhIndex !== -1) chain.splice(zhIndex, 0, zhFallback);
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const tag of chain) if (!seen.has(tag)) {
		seen.add(tag);
		out.push(tag);
	}
	if (!seen.has("en")) out.push("en");
	return out;
}
function mergeI18nTranslations(chain) {
	const merged = {};
	for (let i = chain.length - 1; i >= 0; i--) {
		const tag = chain[i];
		const layer = registry.get(tag);
		if (layer) Object.assign(merged, layer);
	}
	return merged;
}
/**
* Register or merge translation strings for a BCP 47 locale tag.
*
* @param locale - BCP 47 tag (normalized to lowercase; unicode extensions stripped for the registry key).
* @param translations - Partial nested locale values; merges with any existing layer for the tag.
* @public
*/
function registerI18n(locale, translations) {
	const tag = getCanonicalLocaleKey(locale);
	const existing = registry.get(tag) ?? {};
	registry.set(tag, {
		...existing,
		...flattenTranslations(translations)
	});
	notify();
}
/**
* Return the merged registered translation map for a locale. Built-in English defaults are supplied by text descriptors.
*
* @param locale - BCP 47 tag to resolve (e.g. `es-MX`, `zh-Hant-HK`).
* @public
*/
function getI18nTranslations(locale) {
	return mergeI18nTranslations(findLocaleKeys(locale));
}
/**
* Subscribe to global registry mutations (for example after `registerI18n` or browser translation prefetch).
*
* @param callback - Invoked when any locale layer changes.
* @public
*/
function onI18nRegistryChange(callback) {
	subscribers.add(callback);
	return () => {
		subscribers.delete(callback);
	};
}
/**
* Whether an exact locale tag has been registered via `registerI18n` (not whether lazy packs exist).
*
* @param locale - BCP 47 tag to test.
* @public
*/
function hasRegisteredLocale(locale) {
	return registry.has(getCanonicalLocaleKey(locale));
}
/** Clears registered locale overlays (test isolation). */
function resetI18nRegistry() {
	registry.clear();
	subscribers.clear();
}
//#endregion
export { findLocaleKeys, getCanonicalLocaleKey, getI18nTranslations, hasRegisteredLocale, onI18nRegistryChange, registerI18n, resetI18nRegistry };

//# sourceMappingURL=registry.js.map