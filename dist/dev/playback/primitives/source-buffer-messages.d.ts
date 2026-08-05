import { Segment, SegmentData, Track } from "../../media/types/index.js";
//#region src/playback/primitives/source-buffer-messages.d.ts
type AppendSegmentMeta = Pick<Segment, 'id' | 'startTime' | 'duration'> & {
  trackId: Track['id'];
  /** Declared track bandwidth in bps (from playlist BANDWIDTH attribute). */
  trackBandwidth?: number;
  /**
   * Non-zero-PTS relocation: when present, applied as `SourceBuffer.timestampOffset`
   * before this append so native PTS is relocated onto a 0-based presentation
   * timeline. A relocating composition stamps it (constant per source) onto each
   * media segment's meta; the apply is idempotent-guarded. Absent = no relocation.
   */
  timestampOffset?: number;
};
type AppendInitMessage = {
  type: 'append-init';
  data: SegmentData;
  /**
   * `language` is captured alongside `trackId` so downstream loaders can
   * compare the buffered track's language to the newly-selected track's
   * language and decide whether ahead-buffer flush is warranted on track
   * switch (see `segment-loader`'s `planTasks`). Undefined for video and
   * for audio without explicit `LANGUAGE` attribute.
   */
  meta: {
    trackId: Track['id'];
    language?: string;
  };
};
type AppendSegmentMessage = {
  type: 'append-segment';
  data: SegmentData;
  meta: AppendSegmentMeta;
};
type RemoveMessage = {
  type: 'remove';
  start: number;
  end: number;
};
type IndividualSourceBufferMessage = AppendInitMessage | AppendSegmentMessage | RemoveMessage;
//#endregion
export { AppendInitMessage, AppendSegmentMessage, AppendSegmentMeta, IndividualSourceBufferMessage, RemoveMessage };
//# sourceMappingURL=source-buffer-messages.d.ts.map