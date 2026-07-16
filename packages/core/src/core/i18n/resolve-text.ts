import { interpolate } from './interpolate';
import type { Text, TextParams } from './text';
import type { Translator } from './types';

export function resolveText(text: Text | string, translator?: Translator, params?: TextParams): string {
  if (typeof text === 'string') return text;
  if (!translator) return interpolate(text.text, params);

  const translated = (translator as (key: string, params?: TextParams) => string)(text.key, {
    ...params,
    default: text.text,
  });
  return translated === text.key ? interpolate(text.text, params) : translated;
}
