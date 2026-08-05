//#region src/core/ui/cast-button/cast-button-data-attrs.d.ts
declare const CastButtonDataAttrs: {
  /**
   * Current remote playback connection state.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   */
  readonly connection: 'data-cast-state';
  /**
   * Whether remote playback can be requested on this platform.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback
   */
  readonly availability: 'data-availability';
  /** Present when the button is non-interactive (mirrors `aria-disabled`). */
  readonly disabled: 'data-disabled';
  /** Present when the button is hidden because the feature is unsupported. */
  readonly hidden: 'data-hidden';
};
//#endregion
export { CastButtonDataAttrs };
//# sourceMappingURL=cast-button-data-attrs.d.ts.map