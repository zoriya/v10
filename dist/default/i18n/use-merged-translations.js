import { useRegistryEpoch } from "./use-registry-epoch.js";
import { flattenTranslations, getI18nTranslations } from "@videojs/core/i18n";
import { useMemo } from "react";
//#region src/i18n/use-merged-translations.ts
function useMergedTranslations(resolvedLocale, lazyLayer, translationsProp) {
	return useMemo(() => {
		return {
			...getI18nTranslations(resolvedLocale),
			...lazyLayer,
			...flattenTranslations(translationsProp ?? {})
		};
	}, [
		resolvedLocale,
		lazyLayer,
		translationsProp,
		useRegistryEpoch()
	]);
}
//#endregion
export { useMergedTranslations };

//# sourceMappingURL=use-merged-translations.js.map