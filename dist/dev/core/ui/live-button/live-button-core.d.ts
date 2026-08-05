import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaBufferState, MediaLiveState, MediaTimeState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/live-button/live-button-core.d.ts
interface LiveButtonProps {
  /** Custom label for the button. */
  label?: Text | string | ((state: LiveButtonState) => Text | string) | undefined;
  /** Whether the button is disabled. */
  disabled?: boolean | undefined;
}
/**
 * Media state slice consumed by `LiveButtonCore` — composed by the HTML
 * and React `LiveButton` adapters from the `live`, `time`, and `buffer`
 * store slices.
 */
type LiveButtonMediaState = Pick<MediaTimeState, 'currentTime' | 'seek'> & Pick<MediaBufferState, 'seekable'> & MediaLiveState;
interface LiveButtonState extends ButtonState {
  /** Whether the stream is live (or DVR). */
  live: boolean;
  /** Whether playback is at the live edge. */
  liveEdge: boolean;
}
/**
 * Core state machine for a "Live" button. Indicates whether the player is
 * playing at the live edge and seeks to the Seekable Live Edge when activated.
 *
 * @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
 */
declare class LiveButtonCore {
  #private;
  /** Default visible text used when no children are provided. */
  static defaultText: Text | string;
  static readonly defaultProps: NonNullableObject<LiveButtonProps>;
  readonly state: import("@videojs/store").WritableState<LiveButtonState>;
  constructor(props?: LiveButtonProps);
  setProps(props: LiveButtonProps): void;
  getLabel(state: LiveButtonState): Text | string;
  getAttrs(state: LiveButtonState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: LiveButtonMediaState): void;
  getState(): LiveButtonState;
  /** Seek to the Seekable Live Edge. No-op when not live or already at edge. */
  seekToLive(media: LiveButtonMediaState): Promise<void>;
}
declare namespace LiveButtonCore {
  type Props = LiveButtonProps;
  type State = LiveButtonState;
  type MediaState = LiveButtonMediaState;
}
//#endregion
export { LiveButtonCore, LiveButtonMediaState, LiveButtonProps, LiveButtonState };
//# sourceMappingURL=live-button-core.d.ts.map