"use client";
import { usePlayer } from "../../player/context.js";
import { logMissingFeature, selectPlaybackRate } from "@videojs/core/dom";
import { useCallback, useState } from "react";
import { PlaybackRateRadioGroupCore } from "@videojs/core";
//#region src/ui/playback-rate/use-playback-rate-options.ts
/**
* Create playback rate menu options from the player playback rate state.
* Returns `null` when the playback rate feature is not configured.
*
* @param props - Optional `label`, `formatRate`, and `disabled` overrides.
*/
function usePlaybackRateOptions(props) {
	const media = usePlayer(selectPlaybackRate);
	const [core] = useState(() => new PlaybackRateRadioGroupCore());
	core.setProps(props ?? {});
	const setRate = useCallback((rate) => core.select(media, rate), [core, media]);
	const setValue = useCallback((value) => core.selectValue(media, value), [core, media]);
	if (!media) {
		logMissingFeature("usePlaybackRateOptions", selectPlaybackRate.displayName ?? "playbackRate");
		return null;
	}
	core.setMedia(media);
	const state = core.getState();
	return {
		state,
		rate: state.rate,
		value: core.getRateValue(state.rate),
		options: state.rates.map((rate) => ({
			rate,
			value: core.getRateValue(rate),
			label: core.getRateLabel(rate),
			disabled: state.disabled
		})),
		disabled: state.disabled,
		setRate,
		setValue
	};
}
//#endregion
export { usePlaybackRateOptions };

//# sourceMappingURL=use-playback-rate-options.js.map