"use client";
import { createMediaButton } from "../create-media-button.js";
import { selectRemotePlayback } from "@videojs/core/dom";
import { AirPlayButtonCore, AirPlayButtonDataAttrs } from "@videojs/core";
//#region src/ui/airplay-button/airplay-button.tsx
/** A button that toggles AirPlay to a remote device. */
const AirPlayButton = createMediaButton({
	displayName: "AirPlayButton",
	core: AirPlayButtonCore,
	stateAttrMap: AirPlayButtonDataAttrs,
	selector: selectRemotePlayback,
	action: (core, state) => core.toggle(state),
	isSupported: (state) => !state.hidden
});
//#endregion
export { AirPlayButton };

//# sourceMappingURL=airplay-button.js.map