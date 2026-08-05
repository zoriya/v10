//#region src/core/ui/airplay-button/airplay-button-data-attrs.d.ts
declare const AirPlayButtonDataAttrs: {
  /**
   * Current AirPlay connection state.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   */
  readonly state: 'data-airplay-state';
  /**
   * Whether AirPlay is available on the active platform and media.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback
   */
  readonly availability: 'data-availability';
  /** Present when the button is non-interactive (mirrors `aria-disabled`). */
  readonly disabled: 'data-disabled';
  /** Present when the button is hidden because AirPlay is unavailable. */
  readonly hidden: 'data-hidden';
};
//#endregion
export { AirPlayButtonDataAttrs };
//# sourceMappingURL=airplay-button-data-attrs.d.ts.map