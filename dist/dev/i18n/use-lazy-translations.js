import { findLocaleKeys, getBrowserTranslations, registerI18n, shouldAttemptBrowserTranslation } from "@videojs/core/i18n";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { mergeLocaleOverlays } from "@videojs/utils/dom";
//#region src/i18n/use-lazy-translations.ts
function useLazyTranslations(resolvedLocale, loader) {
	const [lazyLayer, setLazyLayer] = useState({});
	const lazySeqRef = useRef(0);
	useLayoutEffect(() => {
		lazySeqRef.current += 1;
		setLazyLayer({});
	}, [resolvedLocale]);
	useEffect(() => {
		const seq = lazySeqRef.current;
		const locale = resolvedLocale;
		(async () => {
			try {
				const { merged, loadedTags } = await mergeLocaleOverlays(locale, loader, findLocaleKeys);
				if (seq !== lazySeqRef.current) return;
				if (shouldAttemptBrowserTranslation(locale, loadedTags, merged)) {
					const browser = await getBrowserTranslations(locale);
					if (seq !== lazySeqRef.current) return;
					if (Object.keys(browser).length) registerI18n(locale, browser);
				}
				if (seq !== lazySeqRef.current) return;
				setLazyLayer(merged);
			} catch {}
		})();
		return () => {
			if (lazySeqRef.current === seq) lazySeqRef.current += 1;
		};
	}, [resolvedLocale, loader]);
	return lazyLayer;
}
//#endregion
export { useLazyTranslations };

//# sourceMappingURL=use-lazy-translations.js.map