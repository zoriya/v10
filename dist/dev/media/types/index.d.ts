//#region src/media/types/index.d.ts
/**
 * Core SPF Types
 *
 * Based on CMAF-HAM (Common Media Application Format - Hypothetical Application Model)
 * Protocol-agnostic representation of streaming media content.
 *
 * @see https://github.com/AcademySoftwareFoundation/common-media-library
 */
/**
 * Base identifier type for all HAM objects.
 */
interface Ham {
  id: string;
}
/**
 * Addressable resource with optional byte range.
 */
interface AddressableObject {
  url: string;
  byteRange?: {
    start: number;
    end: number;
  };
}
/**
 * Time span with start time and duration.
 * Used for segments and other timed ranges.
 */
interface TimeSpan {
  startTime: number;
  duration: number;
}
/**
 * Track content type.
 */
type TrackType = 'video' | 'audio' | 'text';
/**
 * Video frame rate expressed as numerator/denominator.
 *
 * Examples:
 * - 30 fps: { frameRateNumerator: 30 }
 * - 29.97 fps: { frameRateNumerator: 30000, frameRateDenominator: 1001 }
 */
interface FrameRate {
  frameRateNumerator: number;
  frameRateDenominator?: number;
}
/**
 * Generic type for partially resolved tracks.
 * Removes fields that come from media playlist parsing.
 *
 * @param T - Track type to make partially resolved (must extend Track)
 */
type PartiallyResolved<T extends Track = Track> = Omit<T, 'segments' | 'initialization' | keyof TimeSpan> & {
  segments?: never;
  duration?: never;
  startTime?: never;
  initialization?: never;
};
/**
 * Base track type containing common properties for all resolved tracks.
 * A resolved track has segments, duration, and initialization data.
 * All URLs are fully qualified (parsers resolve relative URLs).
 */
/**
 * Track startTime is always 0 (for future multi-period support).
 */
type Track = Ham & AddressableObject & TimeSpan & {
  type: TrackType;
  codecs?: string[];
  mimeType: string;
  language?: string | undefined;
  bandwidth: number;
  initialization?: AddressableObject;
  segments: Segment[];
  /**
   * Media-timeline (decode/encode) coordinate of the track's timeline origin
   * (`startTime`) — the media-time base value of the coordinate model, peer to
   * `startTime` (presentation). Derived from the container
   * (`tfdt.baseMediaDecodeTime ÷ mdhd.timescale`); the relocation offset is
   * `startTime − startMediaTime`, never stored.
   *
   * Optional: absent until established (0-PTS sources never set it — their
   * origin is already 0). Established once per source by the
   * `establishStartMediaTime` reactor. See
   * `internal/design/spf/presentation-timeline-model.md`.
   */
  startMediaTime?: number;
};
/**
 * Per-track-type origin-establishment data, accumulated across appends (the media
 * track's `track_id` + `mdhd` timescale from the init, `tfdt` baseMediaDecodeTime of
 * that same track from the first media segment) — hence optional. The transient input
 * the `establishStartMediaTime` reactor reduces into `Track.startMediaTime`.
 *
 * `trackId` is the ISO-BMFF `track_ID` of the buffered media track (`vide`/`soun`),
 * read from the init's `tkhd`; it ties the timescale to the *same* track's
 * `baseMediaDecodeTime` (matched via `tfhd.track_id`) so a muxed segment carrying a
 * second track (e.g. `clcp` captions) reads the right `tfdt` rather than the first one.
 *
 * `segmentStartTime` is the 0-based presentation start of the segment
 * `baseMediaDecodeTime` was read from — *not* a container value (it's the playlist
 * position), but co-located because the origin is `baseMediaDecodeTime/timescale −
 * segmentStartTime`: the first *loaded* segment isn't necessarily the 0th (a
 * non-zero initial `currentTime`, or live/DVR), so the decode time alone isn't the
 * stream origin.
 */
interface MediaContainerData {
  trackId?: number;
  timescale?: number;
  baseMediaDecodeTime?: number;
  segmentStartTime?: number;
}
/**
 * Raw media-segment bytes — a complete buffer or a byte stream. The transport-neutral
 * payload the loader pipeline carries; `AppendData` (the MSE `SourceBuffer` append
 * input in `media/dom/mse`) is an alias of this at the DOM boundary.
 */
type SegmentData = ArrayBuffer | AsyncIterable<Uint8Array>;
/**
 * Resolved video track with segments.
 */
type VideoTrack = Track & Required<Pick<Track, 'initialization' | 'codecs'>> & {
  type: 'video';
  width?: number;
  height?: number;
  frameRate?: FrameRate;
  /**
   * Audio groups (`EXT-X-STREAM-INF:AUDIO`) this video rendition can pair
   * with. A list because one rendition is typically listed across multiple
   * `EXT-X-STREAM-INF` entries — one per audio group (the HLS cross-product) —
   * which the parser collapses into a single track carrying every group it
   * advertised.
   */
  audioGroupIds?: string[];
};
/**
 * Resolved audio track with segments.
 */
type AudioTrack = Track & Required<Pick<Track, 'initialization' | 'codecs'>> & {
  type: 'audio';
  groupId: string;
  name: string;
  sampleRate: number;
  channels: number;
  default?: boolean;
  autoselect?: boolean;
};
/**
 * Resolved text track with segments.
 */
type TextTrack = Track & {
  type: 'text';
  groupId: string;
  label: string;
  kind: 'subtitles' | 'captions';
  default?: boolean;
  autoselect?: boolean;
  forced?: boolean;
};
/**
 * Predicate that answers "can this environment decode this track?" — the
 * capability-probing surface, read by the track-switching hard-constraint
 * pre-pass (`excludeUnplayableTracks`) to drop undecodable renditions before
 * selection. Kept DOM-free here (a plain function type over a minimal track
 * shape) so DOM-free behaviors can consume it; the DOM implementation
 * (`canPlayTrack` in `media/dom/capabilities.ts`) wraps
 * `MediaSource.isTypeSupported`.
 *
 * Takes the minimal codec-bearing shape both video and audio candidates
 * carry. `mimeType` is optional so unprobeable candidates (no MIME) can be
 * passed straight through as playable rather than dropped.
 */
type CanPlayTrack = (track: {
  mimeType?: string;
  codecs?: string[];
}) => boolean;
/**
 * Minimal text-track cue shape — start time, end time, and display text.
 *
 * Host-agnostic representation. `VTTCue` structurally satisfies this
 * interface, so DOM consumers pass `VTTCue` values directly. Non-DOM
 * hosts (workers, test fakes, non-browser engines) can satisfy the same
 * shape without pulling in DOM types.
 */
interface Cue {
  startTime: number;
  endTime: number;
  text: string;
}
/**
 * Partially resolved text track from multivariant playlist.
 * Has metadata but no segments or initialization yet (media playlist not fetched).
 */
type PartiallyResolvedTextTrack = PartiallyResolved<TextTrack>;
/**
 * Generic switching set type.
 * A group of tracks that can be switched between seamlessly.
 *
 * @param T - Track type (VideoTrack, AudioTrack, or TextTrack)
 */
type SwitchingSetOf<T extends Track = Track> = Ham & {
  type: T['type'];
  tracks: (PartiallyResolved<T> | T)[];
};
/**
 * Generic selection set type.
 * Groups switching sets by track type.
 *
 * @param T - Track type (VideoTrack, AudioTrack, or TextTrack)
 */
type SelectionSetOf<T extends Track = Track> = Ham & {
  type: T['type'];
  switchingSets: SwitchingSetOf<T>[];
};
/**
 * Video selection set - contains only video switching sets.
 */
type VideoSelectionSet = SelectionSetOf<VideoTrack>;
/**
 * Audio selection set - contains only audio switching sets.
 */
type AudioSelectionSet = SelectionSetOf<AudioTrack>;
/**
 * Text selection set - contains only text switching sets.
 */
type TextSelectionSet = SelectionSetOf<TextTrack>;
/**
 * Selection set - groups switching sets by track type.
 * Discriminated union ensures type-safe track access.
 */
type SelectionSet = VideoSelectionSet | AudioSelectionSet | TextSelectionSet;
/**
 * Media segment with timing information.
 * Follows CMAF-HAM composition pattern.
 */
type Segment = Ham & AddressableObject & TimeSpan;
/**
 * Presentation - a single playable period of content.
 * Uses TimeSpan fields (startTime always 0, duration optional until track resolved).
 *
 * Extends AddressableObject so `url` contains the original manifest URL.
 * All URLs are fully qualified (parsers resolve relative URLs).
 */
type Presentation = Ham & AddressableObject & Partial<TimeSpan> & {
  selectionSets: SelectionSet[];
};
/**
 * State-shaped presentation that may or may not be resolved yet.
 *
 * The lifecycle is a single value: a caller writes `{ url }`, and the
 * resolver populates the rest in place. `url` is always present; resolved
 * fields (`id`, `selectionSets`, duration) appear once parsing succeeds.
 *
 * Use `isResolvedPresentation` to narrow to `Presentation`.
 */
type MaybeResolvedPresentation = AddressableObject & Partial<Omit<Presentation, keyof AddressableObject>>;
//#endregion
export { AddressableObject, AudioSelectionSet, AudioTrack, CanPlayTrack, Cue, FrameRate, Ham, MaybeResolvedPresentation, MediaContainerData, PartiallyResolved, PartiallyResolvedTextTrack, Presentation, Segment, SegmentData, SelectionSet, SelectionSetOf, SwitchingSetOf, TextSelectionSet, TextTrack, TimeSpan, Track, TrackType, VideoSelectionSet, VideoTrack };
//# sourceMappingURL=index.d.ts.map