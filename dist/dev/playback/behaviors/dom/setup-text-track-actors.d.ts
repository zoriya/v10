import { ReadonlySignal, Signal } from "../../../core/signals/primitives.js";
import { Behavior } from "../../../core/composition/create-composition.js";
import { TextMessagePipelines, TextTrackSegmentResolver } from "../../primitives/text-segment-load-pipeline.js";
import { TextTracksActor } from "../../actors/text-tracks.js";
import { TextTrackSegmentLoaderActor, TextTrackSegmentLoaderActorConfig } from "../../actors/text-track-segment-loader.js";
//#region src/playback/behaviors/dom/setup-text-track-actors.d.ts
interface TextTrackActorsContext {
  mediaElement?: HTMLMediaElement | undefined;
  textTracksActor?: TextTracksActor<VTTCue> | undefined;
  textTrackSegmentLoaderActor?: TextTrackSegmentLoaderActor | undefined;
}
interface TextTrackActorsConfig extends Pick<TextTrackSegmentLoaderActorConfig<VTTCue>, 'forwardBuffer'> {
  resolveTextTrackSegment: TextTrackSegmentResolver<VTTCue>;
  /**
   * Ordered text step pipeline, mapped to the loader's `messagePipelines`. Named
   * with the `text` domain prefix to mirror the v/a `video`/`audioMessagePipelines`
   * composition-config slots. Defaults (in the loader) to `resolveCues → dispatchCues`.
   */
  textMessagePipelines?: TextMessagePipelines<VTTCue>;
}
declare const setupTextTrackActors: Behavior<Record<never, never>, {
  mediaElement: ReadonlySignal<TextTrackActorsContext['mediaElement']>;
  textTracksActor: Signal<TextTrackActorsContext['textTracksActor']>;
  textTrackSegmentLoaderActor: Signal<TextTrackActorsContext['textTrackSegmentLoaderActor']>;
}, TextTrackActorsConfig>;
//#endregion
export { TextTrackActorsConfig, TextTrackActorsContext, setupTextTrackActors };
//# sourceMappingURL=setup-text-track-actors.d.ts.map