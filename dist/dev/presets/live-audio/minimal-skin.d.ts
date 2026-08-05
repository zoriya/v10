import { BaseSkinProps } from "../types.js";
import { ReactNode } from "react";
//#region src/presets/live-audio/minimal-skin.d.ts
type MinimalLiveAudioSkinProps = BaseSkinProps;
/**
 * Minimal audio skin configured for live playback. Mirrors
 * {@link MinimalAudioSkin} but omits the time slider and the current /
 * duration / remaining time displays. A flexible spacer stretches between
 * the play and volume controls so they sit at opposite edges of the
 * control bar.
 */
declare function MinimalLiveAudioSkin(props: MinimalLiveAudioSkinProps): ReactNode;
//#endregion
export { MinimalLiveAudioSkin, MinimalLiveAudioSkinProps };
//# sourceMappingURL=minimal-skin.d.ts.map