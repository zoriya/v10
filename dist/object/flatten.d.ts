//#region src/object/flatten.d.ts
/**
 * Flattens nested object values into dot-separated keys.
 *
 * @param object - The object to flatten.
 * @param options - Options controlling the flattened key path.
 * @returns A new object containing the flattened values.
 *
 * @example
 * ```ts
 * flatten({ buttons: { play: 'Play' } });
 * // { 'buttons.play': 'Play' }
 * ```
 */
interface FlattenOptions {
  prefix?: string;
}
declare function flatten(object: Record<string, unknown>, options?: FlattenOptions): Record<string, unknown>;
//#endregion
export { FlattenOptions, flatten };
//# sourceMappingURL=flatten.d.ts.map