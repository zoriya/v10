import { MaybeResolvedPresentation } from "../types/index.js";
//#region src/media/primitives/select-tracks.d.ts
/**
 * Configuration for video track selection.
 */
interface VideoSelectionConfig {
  /**
   * Initial bandwidth estimate for cold start (bits per second).
   * Used to select video quality before we have real measurements.
   * Default: 1 Mbps (conservative).
   */
  initialBandwidth?: number;
  /**
   * Safety margin for quality selection (0-1).
   * Default: 0.85 (15% headroom).
   */
  safetyMargin?: number;
}
/**
 * Contract for a track picker — a pure function that consults a
 * presentation (and optional config) and returns the id of the track to
 * select, or `undefined` to leave the slot unset.
 *
 * Behaviors that own a track-selection slot (`selectAudioTrack`,
 * `selectVideoTrack`, `switchVideoTrack`) accept a
 * `TrackPicker` via config. The behavior passes its own config straight
 * through as the picker's second argument — pickers that need richer
 * options (language preferences, default-track filtering, bandwidth-aware
 * selection) read from `config`; pickers that don't (e.g., first-track)
 * ignore it.
 */
type TrackPicker<Config = unknown> = (presentation: MaybeResolvedPresentation, config?: Config) => string | undefined;
//#endregion
export { TrackPicker, VideoSelectionConfig };
//# sourceMappingURL=select-tracks.d.ts.map