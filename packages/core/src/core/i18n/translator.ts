import { interpolate } from './interpolate';
import type { FlatTranslations, Locale, TranslationParams, Translator } from './types';

declare const __DEV__: boolean;

/**
 * Builds a typed translator from a resolved translation map (typically from `getI18nTranslations`).
 *
 * @param translations - Merged translation map for the active locale.
 * @param locale - BCP 47 tag associated with the map (reserved for future locale-aware behavior).
 * @public
 */
export function createTranslator(translations: FlatTranslations, locale: Locale): Translator {
  void locale;

  const translate = (key: keyof TranslationParams, params?: unknown): string => {
    const options = params as (Record<string, string | number> & { default?: string }) | undefined;
    const translation = translations[key];

    if (__DEV__ && translation === undefined && options?.default === undefined) {
      console.warn(`[videojs] Missing translation for "${String(key)}".`);
    }

    const fallback = options?.default;
    const values = options ? { ...options } : undefined;
    if (values) delete values.default;

    const raw = translation ?? fallback ?? String(key);
    return interpolate(raw, values);
  };

  return translate as Translator;
}
