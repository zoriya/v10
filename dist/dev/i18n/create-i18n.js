"use client";
import { I18nContext, LocaleRootContext, useLocale, useTranslator } from "./context.js";
import { getProviderRootProps } from "./get-provider-root-props.js";
import { useAmbientLang } from "./use-ambient-lang.js";
import { useLangRootElement } from "./use-lang-root-element.js";
import { useLazyTranslations } from "./use-lazy-translations.js";
import { useLocaleRootNotifications } from "./use-locale-root-notifications.js";
import { useMergedTranslations } from "./use-merged-translations.js";
import { createTranslator, loadLocale } from "@videojs/core/i18n";
import { useContext, useMemo } from "react";
import { effectiveLocale } from "@videojs/utils/dom";
import { jsx } from "react/jsx-runtime";
//#region src/i18n/create-i18n.tsx
/**
* Creates an i18n provider and hooks for the shared React i18n context.
*
* @param options - Optional hooks such as custom built-in locale loading.
* @public
*/
function createI18n(options) {
	const loader = options?.loader ?? loadLocale;
	function I18nProviderRoot({ locale: localeProp, langRootRef, parentLocale, localeFromProp = localeProp !== void 0, translations: translationsProp, children, onActiveLocaleChange, parentAddLocaleRoot }) {
		const langRootElement = useLangRootElement(langRootRef, parentAddLocaleRoot);
		const ambientLang = useAmbientLang(langRootRef !== void 0, langRootElement);
		const resolvedLocale = useMemo(() => effectiveLocale(localeProp, ambientLang ?? parentLocale), [
			localeProp,
			ambientLang,
			parentLocale
		]);
		const addLocaleRoot = useLocaleRootNotifications(resolvedLocale, onActiveLocaleChange);
		const translations = useMergedTranslations(resolvedLocale, useLazyTranslations(resolvedLocale, loader), translationsProp);
		const translator = useMemo(() => createTranslator(translations, resolvedLocale), [translations, resolvedLocale]);
		const value = useMemo(() => ({
			translator,
			locale: resolvedLocale,
			localeFromProp,
			...translationsProp !== void 0 ? { translations: translationsProp } : {},
			...onActiveLocaleChange !== void 0 ? { onActiveLocaleChange } : {}
		}), [
			translator,
			resolvedLocale,
			localeFromProp,
			translationsProp,
			onActiveLocaleChange
		]);
		return /* @__PURE__ */ jsx(LocaleRootContext.Provider, {
			value: addLocaleRoot,
			children: /* @__PURE__ */ jsx(I18nContext.Provider, {
				value,
				children
			})
		});
	}
	function I18nProvider(props) {
		const rootProps = getProviderRootProps(props, useContext(I18nContext), useContext(LocaleRootContext));
		if (!rootProps) return props.children;
		return /* @__PURE__ */ jsx(I18nProviderRoot, { ...rootProps });
	}
	return {
		I18nContext,
		I18nProvider,
		useTranslator,
		useLocale
	};
}
/**
* Resolves locale and supplies a typed translator to descendants. Mount this explicitly for
* translated controls, forced locales, SSR copy, or locale-aware player roots.
*
* @public
*/
const I18nProvider = createI18n().I18nProvider;
//#endregion
export { I18nProvider, createI18n };

//# sourceMappingURL=create-i18n.js.map