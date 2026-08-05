import { TooltipPopupProps } from "../../ui/tooltip/tooltip-popup.js";
import "../../ui/tooltip/index.js";
import { BaseSkinProps } from "../types.js";
import { ReactNode } from "react";
//#region src/presets/live-audio/skin.d.ts
type LiveAudioSkinProps = BaseSkinProps;
declare function TooltipPopup(props: Omit<TooltipPopupProps, 'children' | 'className'>): ReactNode;
/**
 * Default audio skin configured for live playback. Mirrors {@link AudioSkin}
 * but omits the time slider and the current / duration time displays. A
 * flexible spacer stretches between the play and volume controls so they
 * sit at opposite edges of the control bar.
 */
declare function LiveAudioSkin(props: LiveAudioSkinProps): ReactNode;
//#endregion
export { LiveAudioSkin, LiveAudioSkinProps, TooltipPopup };
//# sourceMappingURL=skin.d.ts.map