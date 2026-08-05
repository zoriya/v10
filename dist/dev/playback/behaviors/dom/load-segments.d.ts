import { MaybeResolvedPresentation } from "../../../media/types/index.js";
import { ReadonlySignal } from "../../../core/signals/primitives.js";
import { Reactor } from "../../../core/reactors/create-machine-reactor.js";
import { SegmentLoaderActor } from "../../actors/dom/segment-loader.js";
import { TextTrackSegmentLoaderActor } from "../../actors/text-track-segment-loader.js";
//#region src/playback/behaviors/dom/load-segments.d.ts
/** State shape for segment loading. */
interface SegmentLoadingState {
  presentation?: MaybeResolvedPresentation;
  preload?: string;
  /** Current playback position in seconds. Defaults to 0 when undefined. */
  currentTime?: number;
  /** True once a preload-overriding event has fired for the current source. */
  loadActivated?: boolean;
  /**
   * Intent-level policy input: initiate no new loading work while `true`.
   * Read here by the `loadXSegments` dispatchers (park in `'dormant'`,
   * highest precedence) and by `setupMediaSource` (a pending MediaSource
   * rebuild waits — attach runs the element's load algorithm). **Observed,
   * never declared**: no reader lists this key in `stateKeys`, so the slot
   * exists only in compositions where a feature behavior declares and
   * writes it (e.g. `setupAirPlay`, while a remote-playback session owns
   * presentation). An absent slot means never suspended.
   */
  loadingSuspended?: boolean;
  selectedVideoTrackId?: string;
  selectedAudioTrackId?: string;
  selectedTextTrackId?: string;
}
/** Context shape for segment loading. Each variant only consumes its own type's loader actor. */
interface SegmentLoadingContext {
  videoSegmentLoaderActor?: SegmentLoaderActor;
  audioSegmentLoaderActor?: SegmentLoaderActor;
  textTrackSegmentLoaderActor?: TextTrackSegmentLoaderActor;
}
type SegmentLoadingFsmState = 'preconditions-unmet' | 'dormant' | 'metadata-only' | 'full-range';
type SelectedTrackKey = 'selectedVideoTrackId' | 'selectedAudioTrackId' | 'selectedTextTrackId';
type SegmentLoadingStateMap<K extends SelectedTrackKey> = {
  presentation: ReadonlySignal<SegmentLoadingState['presentation']>;
  preload: ReadonlySignal<SegmentLoadingState['preload']>;
  currentTime: ReadonlySignal<SegmentLoadingState['currentTime']>;
  loadActivated: ReadonlySignal<SegmentLoadingState['loadActivated']>;
} & { [P in K]: ReadonlySignal<SegmentLoadingState[P]>; };
declare const loadVideoSegments: {
  stateKeys: readonly ["presentation", "preload", "currentTime", "loadActivated", "selectedVideoTrackId"];
  contextKeys: readonly ["videoSegmentLoaderActor"];
  setup: (deps: {
    state: SegmentLoadingStateMap<"selectedVideoTrackId">;
  } & {
    context: {
      videoSegmentLoaderActor: ReadonlySignal<SegmentLoadingContext['videoSegmentLoaderActor']>;
    };
  } & {
    config?: object;
  }) => Reactor<"destroyed" | "destroying" | SegmentLoadingFsmState>;
};
declare const loadAudioSegments: {
  stateKeys: readonly ["presentation", "preload", "currentTime", "loadActivated", "selectedAudioTrackId"];
  contextKeys: readonly ["audioSegmentLoaderActor"];
  setup: (deps: {
    state: SegmentLoadingStateMap<"selectedAudioTrackId">;
  } & {
    context: {
      audioSegmentLoaderActor: ReadonlySignal<SegmentLoadingContext['audioSegmentLoaderActor']>;
    };
  } & {
    config?: object;
  }) => Reactor<"destroyed" | "destroying" | SegmentLoadingFsmState>;
};
//#endregion
export { SegmentLoadingContext, SegmentLoadingState, loadAudioSegments, loadVideoSegments };
//# sourceMappingURL=load-segments.d.ts.map