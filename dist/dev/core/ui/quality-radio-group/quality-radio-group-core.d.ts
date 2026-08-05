import { Text, TextParams } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaQualityState, MediaVideoRendition } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/quality-radio-group/quality-radio-group-core.d.ts
interface QualityRadioGroupProps {
  /** Custom label for the options group. */
  label?: Text | string | ((state: QualityRadioGroupState) => Text | string) | undefined;
  /** Custom formatter for visible rendition labels. */
  formatRendition?: ((rendition: MediaVideoRendition) => Text | string) | undefined;
  /** Whether quality selection is disabled. */
  disabled?: boolean | undefined;
}
interface QualityRadioGroupRendition {
  value: string;
  label: Text | string;
  tier?: string | undefined;
  badge?: string | undefined;
}
interface QualityRadioGroupState extends ButtonState {
  renditions: readonly QualityRadioGroupRendition[];
  autoLabel: Text | string;
  autoLabelParams?: TextParams;
  value: string;
  disabled: boolean;
  availability: 'available' | 'unavailable';
}
declare const QUALITY_AUTO_VALUE = "auto";
declare class QualityRadioGroupCore {
  #private;
  static readonly defaultProps: NonNullableObject<QualityRadioGroupProps>;
  readonly state: import("@videojs/store").WritableState<QualityRadioGroupState>;
  constructor(props?: QualityRadioGroupProps);
  setProps(props: QualityRadioGroupProps): void;
  getLabel(state: QualityRadioGroupState): Text | string;
  getRenditionLabel(rendition: MediaVideoRendition): Text | string;
  getRenditionBadge(rendition: MediaVideoRendition, renditions?: readonly MediaVideoRendition[]): string | undefined;
  getRenditionTier(rendition: MediaVideoRendition): string | undefined;
  getRenditionValue(rendition: MediaVideoRendition, index: number): string;
  getAttrs(state: QualityRadioGroupState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
  };
  setMedia(media: MediaQualityState): void;
  getState(): QualityRadioGroupState;
  select(media: MediaQualityState, value: string): void;
  selectValue(media: MediaQualityState, value: string): void;
}
declare namespace QualityRadioGroupCore {
  type Props = QualityRadioGroupProps;
  type State = QualityRadioGroupState;
}
//#endregion
export { QUALITY_AUTO_VALUE, QualityRadioGroupCore, QualityRadioGroupProps, QualityRadioGroupRendition, QualityRadioGroupState };
//# sourceMappingURL=quality-radio-group-core.d.ts.map