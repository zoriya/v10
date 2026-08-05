import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { SliderCore, SliderProps, SliderState } from "../slider/slider-core.js";
import { MediaFeatureAvailability, MediaVolumeState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/volume-slider/volume-slider-core.d.ts
interface VolumeSliderProps extends SliderProps {
  /** Step increment for wheel scrolling. */
  wheelStep?: number | undefined;
  /** @internal Derived from `volume` (0–100) — not user-settable. */
  value?: number | undefined;
  /** @internal Always 0 — not user-settable. */
  min?: number | undefined;
  /** @internal Always 100 — not user-settable. */
  max?: number | undefined;
}
interface VolumeSliderState extends SliderState, Pick<MediaVolumeState, 'volume' | 'muted'> {
  availability: MediaFeatureAvailability;
}
/** Volume-domain slider: maps media volume/mute state to slider state. */
declare class VolumeSliderCore extends SliderCore {
  #private;
  static readonly defaultProps: NonNullableObject<VolumeSliderProps>;
  constructor(props?: VolumeSliderProps);
  setProps(props: VolumeSliderProps): void;
  setMedia(media: MediaVolumeState): void;
  /** @internal Platform adapters set the active i18n locale for `aria-valuetext` percent formatting. */
  setFormatLocale(locale: string | string[] | undefined): void;
  getState(): VolumeSliderState;
  /** Wheel step as a percentage of the slider range. */
  getWheelStepPercent(): number;
  getLabel(state: SliderState): Text | string;
  getValueText(state: VolumeSliderState): Text | string;
  getValueTextParams(state: VolumeSliderState): {
    percent: string;
  };
  getAttrs(state: VolumeSliderState): {
    role: string;
    tabIndex: number;
    autoComplete: string;
    'aria-label': string | Text;
    'aria-valuemin': number;
    'aria-valuemax': number;
    'aria-valuenow': number;
    'aria-orientation': "horizontal" | "vertical";
    'aria-disabled': string | undefined;
    'aria-valuetext': string | Text;
  };
}
declare namespace VolumeSliderCore {
  type Props = VolumeSliderProps;
  type State = VolumeSliderState;
}
//#endregion
export { VolumeSliderCore, VolumeSliderProps, VolumeSliderState };
//# sourceMappingURL=volume-slider-core.d.ts.map