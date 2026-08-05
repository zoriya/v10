import { MediaAudioTrackCapability, MediaBufferCapability, MediaErrorCapability, MediaLiveCapability, MediaPauseCapability, MediaPlaybackRateCapability, MediaRemotePlaybackCapability, MediaSeekCapability, MediaSourceCapability, MediaStreamTypeCapability, MediaTextTrackCapability, MediaVideoDimensionsCapability, MediaVideoRenditionCapability, MediaVolumeCapability } from "./types.js";

//#region src/core/predicate.d.ts
declare function hasMetadata(media: MediaSourceCapability): boolean;
declare function isMediaPauseCapable(value: unknown): value is MediaPauseCapability;
declare function isMediaSeekCapable(value: unknown): value is MediaSeekCapability;
declare function isMediaSourceCapable(value: unknown): value is MediaSourceCapability;
declare function isMediaVolumeCapable(value: unknown): value is MediaVolumeCapability;
declare function isMediaPlaybackRateCapable(value: unknown): value is MediaPlaybackRateCapability;
declare function isMediaBufferCapable(value: unknown): value is MediaBufferCapability;
declare function isMediaErrorCapable(value: unknown): value is MediaErrorCapability;
declare function isMediaTextTrackCapable(value: unknown): value is MediaTextTrackCapability;
declare function isMediaVideoRenditionCapable(value: unknown): value is MediaVideoRenditionCapability;
declare function isMediaAudioTrackCapable(value: unknown): value is MediaAudioTrackCapability;
declare function isMediaVideoDimensionsCapable(value: unknown): value is MediaVideoDimensionsCapability;
declare function isMediaRemotePlaybackCapable(value: unknown): value is MediaRemotePlaybackCapability;
declare function isMediaStreamTypeCapable(value: unknown): value is MediaStreamTypeCapability;
declare function isMediaLiveCapable(value: unknown): value is MediaLiveCapability;
/** Framework-agnostic `NodeList`-like shape returned by `querySelectorAll`. */
interface NodeListLike<Element> {
  readonly length: number;
  readonly [index: number]: Element;
  item(index: number): Element | null;
  [Symbol.iterator](): Iterator<Element>;
}
declare function isQuerySelectorAllCapable<Element = unknown>(value: unknown): value is {
  querySelectorAll: (selectors: string) => NodeListLike<Element>;
};
//#endregion
export { NodeListLike, hasMetadata, isMediaAudioTrackCapable, isMediaBufferCapable, isMediaErrorCapable, isMediaLiveCapable, isMediaPauseCapable, isMediaPlaybackRateCapable, isMediaRemotePlaybackCapable, isMediaSeekCapable, isMediaSourceCapable, isMediaStreamTypeCapable, isMediaTextTrackCapable, isMediaVideoDimensionsCapable, isMediaVideoRenditionCapable, isMediaVolumeCapable, isQuerySelectorAllCapable };
//# sourceMappingURL=predicate.d.ts.map