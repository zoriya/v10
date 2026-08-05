import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { MediaTimeState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/time/time-core.d.ts
/** Time display type. */
type TimeType = 'current' | 'duration' | 'remaining';
interface TimeProps {
  /** Which time value to display. */
  type?: TimeType | undefined;
  /** Symbol prepended to remaining time. */
  negativeSign?: string | undefined;
  /** Custom label for accessibility. */
  label?: Text | string | ((state: TimeState) => Text | string) | undefined;
  /** Whether the time display can be toggled. */
  toggle?: boolean | undefined;
}
interface TimeState {
  /** Time display type. */
  type: TimeType;
  /** Raw value in seconds. */
  seconds: number;
  /** Whether the time value is negative (remaining time before end). */
  negative: boolean;
  /** Formatted display text without sign (e.g., "1:30"). */
  text: string;
  /** Human-readable phrase (e.g., "1 minute, 30 seconds"). */
  phrase: string;
  /** ISO 8601 duration (e.g., "PT1M30S"). */
  datetime: string;
}
declare class TimeCore {
  #private;
  static readonly defaultProps: NonNullableObject<TimeProps>;
  constructor(props?: TimeProps);
  setProps(props: TimeProps): void;
  setMedia(media: MediaTimeState): void;
  getLabel(state: TimeState, type?: TimeType): Text | string;
  getLabelParams(state: TimeState): {
    duration: string;
  } | undefined;
  getAttrs(state: TimeState, type?: TimeType): {
    'aria-label': string | Text;
    role: string | undefined;
    tabIndex: number | undefined;
  };
  getState(): TimeState;
}
declare namespace TimeCore {
  type Props = TimeProps;
  type State = TimeState;
}
//#endregion
export { TimeCore, TimeProps, TimeState, TimeType };
//# sourceMappingURL=time-core.d.ts.map