"use client";
import { createMediaButton } from "../create-media-button.js";
import { selectTextTrack } from "@videojs/core/dom";
import { CaptionsButtonCore, CaptionsButtonDataAttrs } from "@videojs/core";
//#region src/ui/captions-button/captions-button.tsx
/** A button that toggles captions. */
const CaptionsButton = createMediaButton({
	displayName: "CaptionsButton",
	core: CaptionsButtonCore,
	stateAttrMap: CaptionsButtonDataAttrs,
	selector: selectTextTrack,
	action: (core, state) => core.toggle(state),
	hotkeyAction: "toggleSubtitles",
	isSupported: (state) => !state.hidden
});
//#endregion
export { CaptionsButton };

//# sourceMappingURL=captions-button.js.map