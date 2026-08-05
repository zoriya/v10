import { Cue, Segment } from "../../media/types/index.js";
//#region src/playback/primitives/text-track-messages.d.ts
/** Segment identity and timing — mirrors AppendSegmentMeta without trackId (keyed separately). */
type CueSegmentMeta = Pick<Segment, 'id' | 'startTime' | 'duration'> & {
  trackId: string;
};
interface AddCuesMessage<C extends Cue = Cue> {
  type: 'add-cues';
  meta: CueSegmentMeta;
  cues: C[];
}
//#endregion
export { AddCuesMessage, CueSegmentMeta };
//# sourceMappingURL=text-track-messages.d.ts.map