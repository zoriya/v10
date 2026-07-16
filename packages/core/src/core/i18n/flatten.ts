import { flatten } from '@videojs/utils/object';
import type { FlatTranslations, Translations } from './types';

/** Convert an authored nested locale into the flat map used by the translator. */
export function flattenTranslations(locale: Translations, prefix = ''): FlatTranslations {
  return flatten(locale, prefix) as FlatTranslations;
}
