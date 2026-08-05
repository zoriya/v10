import { exitText } from "../../../i18n/text/fullscreen.js";
import { rateText } from "../../../i18n/text/playback.js";
import { captionsOffText, captionsOnText, exitPipText, fullscreenText, pausedText, pipText, playingText, seekedToText } from "../../../i18n/text/status.js";
import { labelText, mutedText, valueText } from "../../../i18n/text/volume.js";
import { formatTimeAsPhrase } from "@videojs/utils/time";
//#region src/core/ui/input-feedback/labels.ts
/** Maps i18n indicator keys to {@link InputIndicatorLabels} for status / volume feedback. */
function createInputIndicatorLabels(translator) {
	return {
		muted: translator(mutedText),
		volume: translator(labelText),
		captionsOn: translator(captionsOnText),
		captionsOff: translator(captionsOffText),
		paused: translator(pausedText),
		playing: translator(playingText),
		fullscreen: translator(fullscreenText),
		exitFullscreen: translator(exitText),
		pictureInPicture: translator(pipText),
		exitPictureInPicture: translator(exitPipText)
	};
}
/** Adds the parameterized labels used by status announcements. */
function createStatusAnnouncerLabels(translator, locale = "en") {
	return {
		...createInputIndicatorLabels(translator),
		volumeWithValue: (value) => translator(valueText, { value }),
		seekedTo: (time) => translator(seekedToText, { time: formatTimeAsPhrase(time, { locale }) }),
		playbackRate: (rate) => translator(rateText, { rate })
	};
}
//#endregion
export { createInputIndicatorLabels, createStatusAnnouncerLabels };

//# sourceMappingURL=labels.js.map