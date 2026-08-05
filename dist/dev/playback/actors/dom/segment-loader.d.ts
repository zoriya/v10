import { AudioTrack, VideoTrack } from "../../../media/types/index.js";
import { MessageActor } from "../../../core/actors/create-machine-actor.js";
import "../../primitives/segment-load-pipeline.js";
import "./source-buffer.js";
//#region src/playback/actors/dom/segment-loader.d.ts
/** Track types that have SourceBuffers (video and audio only). */
type SegmentLoaderTrack = VideoTrack | AudioTrack;
/**
 * Message sent to a SegmentLoaderActor.
 *
 * `range` is optional to distinguish loading modes:
 * - No range: load init segment only (metadata preload mode)
 * - With range: load init + all segments overlapping [start, end]
 *
 * `start` and `end` are raw time values — no segment snapping.
 * The actor maps them onto segment boundaries internally.
 */
type SegmentLoaderMessage = {
  type: 'load';
  track: SegmentLoaderTrack;
  range?: {
    start: number;
    end: number;
  };
};
/** Finite states of the actor. */
type SegmentLoaderActorState = 'idle' | 'loading' | 'destroyed';
/** Non-finite (extended) data managed by the actor. */
interface SegmentLoaderActorContext {
  /** Track ID of the init segment currently being fetched/appended, or null. */
  inFlightInitTrackId: string | null;
  /**
   * Identity of the segment currently being fetched/appended, or null. Tracks
   * the `trackId` alongside the positional `id` because renditions number
   * segments independently (`segment-N`): an in-flight LOW `segment-0` must not
   * be mistaken for a needed HIGH `segment-0` on a switch (see the loading
   * handler's continue/preempt decision). Mirrors the text-track loader, which
   * already matches its in-flight segment on `(inFlightTrackId, inFlightSegmentId)`.
   */
  inFlightSegment: {
    id: string;
    trackId: string;
  } | null;
}
type SegmentLoaderActor = MessageActor<SegmentLoaderActorState, SegmentLoaderActorContext, SegmentLoaderMessage>;
//#endregion
export { SegmentLoaderActor, SegmentLoaderActorContext, SegmentLoaderActorState, SegmentLoaderMessage, SegmentLoaderTrack };
//# sourceMappingURL=segment-loader.d.ts.map