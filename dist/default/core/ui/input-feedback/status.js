import { translateText } from "../../i18n/translate-text.js";
import { exitText } from "../../../i18n/text/fullscreen.js";
import { rateText } from "../../../i18n/text/playback.js";
import { captionsOffText, captionsOnText, exitPipText, fullscreenText, pausedText, pipText, playingText, seekedToText } from "../../../i18n/text/status.js";
import { labelText, mutedText, valueText } from "../../../i18n/text/volume.js";
import { formatTime, formatTimeAsPhrase } from "@videojs/utils/time";
import { clamp } from "@videojs/utils/number";
//#region src/core/ui/input-feedback/status.ts
const DEFAULT_INPUT_INDICATOR_LABELS = {
	muted: translateText(mutedText),
	volume: translateText(labelText),
	captionsOn: translateText(captionsOnText),
	captionsOff: translateText(captionsOffText),
	paused: translateText(pausedText),
	playing: translateText(playingText),
	fullscreen: translateText(fullscreenText),
	exitFullscreen: translateText(exitText),
	pictureInPicture: translateText(pipText),
	exitPictureInPicture: translateText(exitPipText)
};
const DEFAULT_STATUS_ANNOUNCER_LABELS = {
	...DEFAULT_INPUT_INDICATOR_LABELS,
	volumeWithValue: (value) => translateText(valueText, { value }),
	seekedTo: (time) => translateText(seekedToText, { time: formatTimeAsPhrase(time) }),
	playbackRate: (rate) => translateText(rateText, { rate })
};
function isVolumeIndicatorAction(action) {
	return action === "toggleMuted" || action === "volumeStep";
}
function isSeekIndicatorAction(action) {
	return action === "seekStep" || action === "seekToPercent";
}
function deriveStatus(event, snapshot, labels = DEFAULT_INPUT_INDICATOR_LABELS) {
	switch (event.action) {
		case "togglePaused": {
			const paused = snapshot.paused !== void 0 ? !snapshot.paused : true;
			return {
				status: paused ? "pause" : "play",
				label: paused ? labels.paused : labels.playing,
				value: null,
				volumeLevel: null
			};
		}
		case "toggleMuted":
		case "volumeStep": return deriveVolumeStatus(event, snapshot, labels);
		case "toggleSubtitles": {
			if (snapshot.subtitlesAvailable === false) return null;
			const showing = snapshot.subtitlesShowing !== void 0 ? !snapshot.subtitlesShowing : true;
			return {
				status: showing ? "captions-on" : "captions-off",
				label: showing ? labels.captionsOn : labels.captionsOff,
				value: null,
				volumeLevel: null
			};
		}
		case "toggleFullscreen": {
			const fullscreen = snapshot.fullscreen !== void 0 ? !snapshot.fullscreen : true;
			return {
				status: fullscreen ? "fullscreen" : "exit-fullscreen",
				label: fullscreen ? labels.fullscreen : labels.exitFullscreen,
				value: null,
				volumeLevel: null
			};
		}
		case "togglePictureInPicture": {
			const pip = snapshot.pip !== void 0 ? !snapshot.pip : true;
			return {
				status: pip ? "pip" : "exit-pip",
				label: pip ? labels.pictureInPicture : labels.exitPictureInPicture,
				value: null,
				volumeLevel: null
			};
		}
		default: return null;
	}
}
function getVolumeLevel(volume) {
	if (volume <= 0) return "off";
	return volume <= .5 ? "low" : "high";
}
function formatVolumeValue(volume) {
	return `${Math.round(clamp(volume, 0, 1) * 100)}%`;
}
function formatPlaybackRateValue(rate) {
	return `${rate}×`;
}
function formatCurrentTime(snapshot) {
	return formatTime(snapshot.currentTime ?? 0, snapshot.duration);
}
function formatSeekAnnouncerLabel(time, labels) {
	return labels.seekedTo(time);
}
function formatPlaybackRateAnnouncerLabel(rate, labels) {
	return labels.playbackRate(formatPlaybackRateValue(rate));
}
function getStatusIndicatorDisplayValue(state) {
	return state.value ?? state.label ?? "";
}
function getVolumeIndicatorDisplayValue(state) {
	return state.value ?? "";
}
function getSeekIndicatorDisplayValue(state) {
	return state.value ?? state.currentTime;
}
function getSeekToPercent(event) {
	if (event.value !== void 0) return clamp(event.value, 0, 100);
	if (!event.key || event.key < "0" || event.key > "9") return null;
	return Number(event.key) * 10;
}
function getSeekDirection(event, snapshot) {
	if (event.action === "seekStep" && event.value !== void 0) {
		if (event.value > 0) return "forward";
		if (event.value < 0) return "backward";
	}
	if (event.action === "seekToPercent") {
		const percent = getSeekToPercent(event);
		if (percent === null || snapshot.duration === void 0 || snapshot.duration <= 0) return null;
		const targetTime = percent / 100 * snapshot.duration;
		const currentTime = snapshot.currentTime ?? 0;
		if (targetTime > currentTime) return "forward";
		if (targetTime < currentTime) return "backward";
	}
	return null;
}
function isInputActionIncluded(action, actions) {
	if (!action) return false;
	return !actions || actions.includes(action);
}
function predictVolumeActionOutcome(event, snapshot) {
	const muted = snapshot.muted === true;
	const snapshotVolume = snapshot.volume ?? 0;
	if (event.action === "toggleMuted") return {
		snapshotVolume,
		nextMuted: !muted,
		nextVolume: snapshotVolume
	};
	if (event.action === "volumeStep") {
		const nextVolume = clamp(snapshotVolume + (event.value ?? 0), 0, 1);
		return {
			snapshotVolume,
			nextMuted: muted && nextVolume <= 0,
			nextVolume
		};
	}
	return {
		snapshotVolume,
		nextMuted: muted,
		nextVolume: snapshotVolume
	};
}
function volumePredictionToStatusDetails(prediction, labels) {
	const level = prediction.nextMuted ? "off" : getVolumeLevel(prediction.nextVolume);
	const value = prediction.nextMuted ? "0%" : formatVolumeValue(prediction.nextVolume);
	return {
		status: level === "off" ? "volume-off" : level === "low" ? "volume-low" : "volume-high",
		label: level === "off" ? labels.muted : labels.volume,
		value,
		volumeLevel: level
	};
}
/** Labels/value/level for volume actions — single source shared with `VolumeIndicatorCore`. */
function deriveVolumeStatus(event, snapshot, labels = DEFAULT_INPUT_INDICATOR_LABELS, cachedPrediction) {
	return volumePredictionToStatusDetails(cachedPrediction ?? predictVolumeActionOutcome(event, snapshot), labels);
}
//#endregion
export { DEFAULT_INPUT_INDICATOR_LABELS, DEFAULT_STATUS_ANNOUNCER_LABELS, deriveStatus, deriveVolumeStatus, formatCurrentTime, formatPlaybackRateAnnouncerLabel, formatPlaybackRateValue, formatSeekAnnouncerLabel, formatVolumeValue, getSeekDirection, getSeekIndicatorDisplayValue, getSeekToPercent, getStatusIndicatorDisplayValue, getVolumeIndicatorDisplayValue, getVolumeLevel, isInputActionIncluded, isSeekIndicatorAction, isVolumeIndicatorAction, predictVolumeActionOutcome };

//# sourceMappingURL=status.js.map