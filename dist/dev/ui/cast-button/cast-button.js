"use client";
import { createMediaButton } from "../create-media-button.js";
import { selectRemotePlayback } from "@videojs/core/dom";
import { CastButtonCore, CastButtonDataAttrs } from "@videojs/core";
//#region src/ui/cast-button/cast-button.tsx
/** A button that toggles casting to a remote device. */
const CastButton = createMediaButton({
	displayName: "CastButton",
	core: CastButtonCore,
	stateAttrMap: CastButtonDataAttrs,
	selector: selectRemotePlayback,
	action: (core, state) => core.toggle(state),
	isSupported: (state) => !state.hidden
});
//#endregion
export { CastButton };

//# sourceMappingURL=cast-button.js.map