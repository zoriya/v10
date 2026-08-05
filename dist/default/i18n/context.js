"use client";
import { createTranslator, getI18nTranslations, onI18nRegistryChange } from "@videojs/core/i18n";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
//#region src/i18n/context.tsx
/** React context carrying the active translator and locale. @public */
const I18nContext = createContext(null);
const LocaleRootContext = createContext(void 0);
/**
* Returns the translator for the nearest `I18nProvider`, or English defaults when none is mounted.
*
* @public
*/
function useTranslator() {
	const ctx = useContext(I18nContext);
	const [registryEpoch, invalidateRegistry] = useReducer((epoch) => epoch + 1, 0);
	useEffect(() => {
		return onI18nRegistryChange(() => invalidateRegistry());
	}, []);
	const fallback = useMemo(() => {
		return createTranslator(getI18nTranslations("en"), "en");
	}, [registryEpoch]);
	if (!ctx) return fallback;
	return ctx.translator;
}
/**
* Returns the active BCP 47 locale tag from the nearest `I18nProvider`, or `'en'` when none is mounted.
*
* @public
*/
function useLocale() {
	return useContext(I18nContext)?.locale ?? "en";
}
//#endregion
export { I18nContext, LocaleRootContext, useLocale, useTranslator };

//# sourceMappingURL=context.js.map