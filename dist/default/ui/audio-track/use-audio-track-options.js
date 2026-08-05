"use client";
import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { selectAudioTrack } from "@videojs/core/dom";
import { translateText } from "@videojs/core/i18n";
import { useCallback, useState } from "react";
import { AudioTrackRadioGroupCore } from "@videojs/core";
//#region src/ui/audio-track/use-audio-track-options.ts
/**
* Create audio track menu options from the player audio track state. Returns
* `null` when the audio track feature is not configured.
*
* @param props - Optional `label`, `formatTrack`, and `disabled` overrides.
*/
function useAudioTrackOptions(props) {
	"use no memo";
	const media = usePlayer(selectAudioTrack);
	const t = useTranslator();
	const [core] = useState(() => new AudioTrackRadioGroupCore());
	core.setProps(props ?? {});
	const setValue = useCallback((value) => core.selectValue(media, value), [core, media]);
	if (!media) return null;
	core.setMedia(media);
	const state = core.getState();
	return {
		state,
		value: state.value,
		options: state.tracks.map((track) => ({
			value: track.value,
			label: translateText(track.label, t),
			disabled: state.disabled
		})),
		disabled: state.disabled,
		setValue
	};
}
//#endregion
export { useAudioTrackOptions };

//# sourceMappingURL=use-audio-track-options.js.map