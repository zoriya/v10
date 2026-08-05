import { AudioTrack, FrameRate, MaybeResolvedPresentation, VideoTrack } from "../types/index.js";
//#region src/media/media-tracks/media-tracks.d.ts
/** Properties that identify a distinct video rendition (multi-CDN copies share them). */
interface VideoDedupeKey {
  width?: VideoTrack['width'];
  height?: VideoTrack['height'];
  bandwidth?: VideoTrack['bandwidth'];
}
/** Properties that identify a distinct audio track (multi-CDN copies share them). */
interface AudioDedupeKey {
  language?: AudioTrack['language'];
  name?: AudioTrack['name'];
}
/**
 * The distinct video tracks of a presentation, deduped by {@link VideoDedupeKey} (first occurrence wins).
 *
 * Returns `[]` when the presentation is unresolved or has no video tracks.
 */
declare function dedupedVideoTracks(presentation: MaybeResolvedPresentation | undefined): VideoTrack[];
/**
 * The distinct audio tracks of a presentation, deduped by `language` + `name`
 * (first occurrence wins). Returns `[]` when the presentation is unresolved or has no audio tracks.
 */
declare function dedupedAudioTracks(presentation: MaybeResolvedPresentation | undefined): AudioTrack[];
/**
 * Find a video track by id, searching the same candidate set the engine resolves
 * against ({@link dedupedVideoTracks}'s pre-dedupe source). Returns `undefined`
 * when absent. Maps the engine's resolved `selectedVideoTrackId` back to its
 * properties for `active` reflection — the resolved id may be a per-CDN copy that
 * isn't the representative {@link dedupedVideoTracks} kept.
 */
declare function findVideoTrackById(presentation: MaybeResolvedPresentation | undefined, id: string | undefined): VideoTrack | undefined;
/** Audio counterpart of {@link findVideoTrackById}, for `enabled` reflection. */
declare function findAudioTrackById(presentation: MaybeResolvedPresentation | undefined, id: string | undefined): AudioTrack | undefined;
/**
 * Build a partial video track that can be used as `userVideoTrackSelection`.
 */
declare function toUserVideoTrackSelection<T extends VideoDedupeKey>(rendition?: T): Partial<VideoTrack> | undefined;
/**
 * Build a partial audio track that can be used as a `userAudioTrackSelection`.
 */
declare function toUserAudioTrackSelection<T extends AudioDedupeKey>(track?: T): Partial<AudioTrack> | undefined;
/** Whether two video tracks are the same by dedupe key */
declare function isSameVideoTrack(a: VideoDedupeKey, b: VideoDedupeKey | undefined): boolean;
/** Whether two audio tracks are the same by dedupe key */
declare function isSameAudioTrack(a: AudioDedupeKey, b: AudioDedupeKey | undefined): boolean;
/** Collapse a rational frame rate (numerator/denominator) to frames per second. */
declare const frameRateToNumber: (frameRate: FrameRate) => number;
//#endregion
export { AudioDedupeKey, type AudioTrack, VideoDedupeKey, type VideoTrack, dedupedAudioTracks, dedupedVideoTracks, findAudioTrackById, findVideoTrackById, frameRateToNumber, isSameAudioTrack, isSameVideoTrack, toUserAudioTrackSelection, toUserVideoTrackSelection };
//# sourceMappingURL=media-tracks.d.ts.map