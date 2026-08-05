import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaTextTrack, MediaTextTrackState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/captions-radio-group/captions-radio-group-core.d.ts
interface CaptionsRadioGroupProps {
  /** Custom label for the menu trigger. */
  label?: Text | string | ((state: CaptionsRadioGroupState) => Text | string) | undefined;
  /** Custom formatter for visible track labels. */
  formatTrack?: ((track: MediaTextTrack) => Text | string) | undefined;
  /** Whether track selection is disabled. */
  disabled?: boolean | undefined;
}
interface CaptionsRadioGroupTrack {
  value: string;
  label: Text | string;
}
interface CaptionsRadioGroupState extends Pick<MediaTextTrackState, 'subtitlesShowing'>, ButtonState {
  tracks: readonly CaptionsRadioGroupTrack[];
  value: string;
  disabled: boolean;
  availability: 'available' | 'unavailable';
}
declare const CAPTIONS_OFF_VALUE = "off";
declare class CaptionsRadioGroupCore {
  #private;
  static readonly defaultProps: NonNullableObject<CaptionsRadioGroupProps>;
  readonly state: import("@videojs/store").WritableState<CaptionsRadioGroupState>;
  constructor(props?: CaptionsRadioGroupProps);
  setProps(props: CaptionsRadioGroupProps): void;
  getLabel(state: CaptionsRadioGroupState): Text | string;
  getTrackLabel(track: MediaTextTrack): Text | string;
  getAttrs(state: CaptionsRadioGroupState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaTextTrackState): void;
  getState(): CaptionsRadioGroupState;
  select(media: MediaTextTrackState, value: string): void;
  selectValue(media: MediaTextTrackState, value: string): void;
}
declare namespace CaptionsRadioGroupCore {
  type Props = CaptionsRadioGroupProps;
  type State = CaptionsRadioGroupState;
}
//#endregion
export { CAPTIONS_OFF_VALUE, CaptionsRadioGroupCore, CaptionsRadioGroupProps, CaptionsRadioGroupState, CaptionsRadioGroupTrack };
//# sourceMappingURL=captions-radio-group-core.d.ts.map