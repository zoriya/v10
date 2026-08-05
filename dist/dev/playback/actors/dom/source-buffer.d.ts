import { Segment, Track } from "../../../media/types/index.js";
import { AppendData } from "../../../media/dom/mse/append-segment.js";
import { MessageActor } from "../../../core/actors/create-machine-actor.js";
import { IndividualSourceBufferMessage } from "../../primitives/source-buffer-messages.js";
//#region src/playback/actors/dom/source-buffer.d.ts
interface BufferedRange {
  start: number;
  end: number;
}
type BatchMessage = {
  type: 'batch';
  messages: IndividualSourceBufferMessage[];
};
type CancelMessage = {
  type: 'cancel';
};
/** All messages accepted by a SourceBufferActor. */
type SourceBufferMessage = IndividualSourceBufferMessage | BatchMessage | CancelMessage;
/** Finite states of the actor. */
type SourceBufferActorState = 'idle' | 'updating' | 'destroyed';
/** Non-finite (extended) data managed by the actor — the XState "context". */
interface SourceBufferActorContext {
  initTrackId?: string | undefined;
  /**
   * Language of the most recently appended init segment's track (when
   * present on the playlist). Used by the segment-loader's `planTasks`
   * to detect cross-language switches and schedule ahead-buffer flush.
   * Undefined for video and for language-less audio.
   */
  initTrackLanguage?: string | undefined;
  segments: Array<Pick<Segment, 'id' | 'startTime' | 'duration'> & {
    trackId: Track['id'];
    trackBandwidth?: number;
    /**
     * True while a streaming append is in progress for this segment.
     * The segment's data is partially present in the SourceBuffer.
     * Downstream code must not treat a partial segment as fully buffered.
     */
    partial?: boolean;
  }>;
  bufferedRanges: BufferedRange[];
}
/** SourceBuffer actor: queues operations, owns its snapshot. */
type SourceBufferActor = MessageActor<SourceBufferActorState, SourceBufferActorContext, SourceBufferMessage>;
//#endregion
export { BatchMessage, BufferedRange, CancelMessage, SourceBufferActor, SourceBufferActorContext, SourceBufferActorState, SourceBufferMessage };
//# sourceMappingURL=source-buffer.d.ts.map