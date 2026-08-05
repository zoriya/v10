import { useSyncExternalStore } from "react";
import { nearestLang, resolveLangAttr, subscribeAmbientLang } from "@videojs/utils/dom";
//#region src/i18n/use-ambient-lang.ts
function ambientLangServerSnapshot() {}
function useAmbientLang(hasLangRoot, langRootElement) {
	return useSyncExternalStore(subscribeAmbientLang, () => {
		const root = hasLangRoot || typeof document === "undefined" ? langRootElement : document.documentElement;
		if (!root) return void 0;
		return resolveLangAttr(nearestLang(root));
	}, ambientLangServerSnapshot);
}
//#endregion
export { useAmbientLang };

//# sourceMappingURL=use-ambient-lang.js.map