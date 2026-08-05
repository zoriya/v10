"use client";
import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { selectTextTrack } from "@videojs/core/dom";
import { translateText } from "@videojs/core/i18n";
import { useCallback, useState } from "react";
import { CAPTIONS_OFF_VALUE, CaptionsRadioGroupCore } from "@videojs/core";
import { offText } from "@videojs/core/i18n/text/menu";
//#region src/ui/captions-radio-group/use-captions-options.ts
/**
* Create captions menu options (including an `Off` option) from the player
* text track state. Returns `null` when the text tracks feature is not
* configured.
*
* @param props - Optional `label`, `formatTrack`, and `disabled` overrides.
*/
function useCaptionsOptions(props) {
	"use no memo";
	const media = usePlayer(selectTextTrack);
	const t = useTranslator();
	const [core] = useState(() => new CaptionsRadioGroupCore());
	core.setProps(props ?? {});
	const setValue = useCallback((value) => core.selectValue(media, value), [core, media]);
	if (!media) return null;
	core.setMedia(media);
	const state = core.getState();
	const showMenu = state.tracks.length > 1;
	return {
		state,
		value: state.value,
		options: [{
			value: CAPTIONS_OFF_VALUE,
			label: translateText(offText, t),
			disabled: state.disabled
		}, ...state.tracks.map((track) => ({
			value: track.value,
			label: translateText(track.label, t),
			disabled: state.disabled
		}))],
		disabled: state.disabled,
		showMenu,
		setValue
	};
}
//#endregion
export { useCaptionsOptions };

//# sourceMappingURL=use-captions-options.js.map