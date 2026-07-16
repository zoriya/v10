/**
 * Flattens nested object values into dot-separated keys.
 *
 * @param object - The object to flatten.
 * @param prefix - A prefix to prepend to each flattened key.
 * @returns A new object containing the flattened values.
 *
 * @example
 * ```ts
 * flatten({ buttons: { play: 'Play' } });
 * // { 'buttons.play': 'Play' }
 * ```
 */
export function flatten(object: Record<string, unknown>, prefix = ''): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(object)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value as Record<string, unknown>, fullKey));
    } else {
      result[fullKey] = value;
    }
  }

  return result;
}
