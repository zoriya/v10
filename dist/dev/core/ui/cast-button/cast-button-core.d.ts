import { Text } from "../../i18n/text.js";
import "../../../i18n.js";
import { ButtonState } from "../types.js";
import { MediaFeatureAvailability, MediaRemotePlaybackState, RemotePlaybackConnectionState } from "@videojs/media";
import { NonNullableObject } from "@videojs/utils/types";
//#region src/core/ui/cast-button/cast-button-core.d.ts
interface CastButtonProps {
  /** Custom label for the button. */
  label?: Text | string | ((state: CastButtonState) => Text | string) | undefined;
  /** Whether the button is disabled. */
  disabled?: boolean | undefined;
}
interface CastButtonState extends ButtonState {
  /** Current cast connection state (`disconnected`, `connecting`, or `connected`). */
  connection: RemotePlaybackConnectionState;
  /** Whether casting is `available` (a device is reachable), `unavailable` (no device), or `unsupported`. */
  availability: MediaFeatureAvailability;
  /** Non-interactive but still focusable (mirrors `aria-disabled`). */
  disabled: boolean;
  /** Whether the button is hidden because the feature is unsupported. */
  hidden: boolean;
}
declare class CastButtonCore {
  #private;
  static readonly defaultProps: NonNullableObject<CastButtonProps>;
  readonly state: import("@videojs/store").WritableState<CastButtonState>;
  constructor(props?: CastButtonProps);
  setProps(props: CastButtonProps): void;
  getLabel(state: CastButtonState): Text | string;
  getAttrs(state: CastButtonState): {
    'aria-label': string | Text;
    'aria-disabled': string | undefined;
    hidden: string | undefined;
  };
  setMedia(media: MediaRemotePlaybackState): void;
  getState(): CastButtonState;
  toggle(media: MediaRemotePlaybackState): Promise<void>;
}
declare namespace CastButtonCore {
  type Props = CastButtonProps;
  type State = CastButtonState;
}
//#endregion
export { CastButtonCore, CastButtonProps, CastButtonState };
//# sourceMappingURL=cast-button-core.d.ts.map