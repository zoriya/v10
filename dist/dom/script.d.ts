//#region src/dom/script.d.ts
/**
 * Load a script once. Concurrent and repeat calls for the same `src` share a
 * single promise; failed loads are evicted (and the tag removed) so they can
 * be retried.
 */
declare function loadScript(src: string): Promise<void>;
//#endregion
export { loadScript };
//# sourceMappingURL=script.d.ts.map