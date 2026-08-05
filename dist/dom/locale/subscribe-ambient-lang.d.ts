//#region src/dom/locale/subscribe-ambient-lang.d.ts
/**
 * Subscribes to DOM updates that can change inherited `lang`: any `lang` attribute edit,
 * or subtree structural changes under `<html>` (which can move nodes between labeled ancestors).
 */
declare function subscribeAmbientLang(onStoreChange: () => void): () => void;
//#endregion
export { subscribeAmbientLang };
//# sourceMappingURL=subscribe-ambient-lang.d.ts.map