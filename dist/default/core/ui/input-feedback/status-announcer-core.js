import { IndicatorCloseController, getIndicatorCloseDelay } from "./indicator-lifecycle.js";
import { DEFAULT_STATUS_ANNOUNCER_LABELS, formatPlaybackRateAnnouncerLabel, formatSeekAnnouncerLabel, formatVolumeValue } from "./status.js";
import { createState } from "@videojs/store";
//#region src/core/ui/input-feedback/status-announcer-core.ts
const ANNOUNCEMENT_DEBOUNCE = 200;
var StatusAnnouncerCore = class {
	state = createState({ label: null });
	#props = {};
	#snapshot = null;
	#seekStartTime = null;
	#seekTargetTime = null;
	#timer = null;
	#close = new IndicatorCloseController(() => this.state.patch({ label: null }), () => getIndicatorCloseDelay(this.#props));
	setProps(props) {
		this.#props = props;
	}
	resetSnapshot() {
		this.#snapshot = null;
		this.#seekStartTime = null;
		this.#seekTargetTime = null;
		this.#clearTimer();
		this.#close.close();
	}
	destroy() {
		this.#clearTimer();
		this.#close.destroy();
	}
	processSnapshot(snapshot) {
		const previous = this.#snapshot;
		this.#snapshot = snapshot;
		if (!previous) return false;
		const labels = this.#getLabels();
		let handled = false;
		const queue = [];
		if (hasChanged(previous.paused, snapshot.paused)) queue.push(snapshot.paused ? labels.paused : labels.playing);
		if (hasChanged(previous.subtitlesShowing, snapshot.subtitlesShowing) && snapshot.subtitlesAvailable !== false) queue.push(snapshot.subtitlesShowing ? labels.captionsOn : labels.captionsOff);
		if (hasChanged(previous.fullscreen, snapshot.fullscreen)) queue.push(snapshot.fullscreen ? labels.fullscreen : labels.exitFullscreen);
		if (hasChanged(previous.pip, snapshot.pip)) queue.push(snapshot.pip ? labels.pictureInPicture : labels.exitPictureInPicture);
		if (hasChanged(previous.playbackRate, snapshot.playbackRate)) queue.push(formatPlaybackRateAnnouncerLabel(snapshot.playbackRate, labels));
		if (queue.length > 0) handled = this.#announce(queue.join(". "));
		if (this.#processSeekSnapshot(previous, snapshot, labels, handled)) handled = true;
		if (this.#processVolumeSnapshot(previous, snapshot, labels, handled)) handled = true;
		return handled;
	}
	#getLabels() {
		return {
			...DEFAULT_STATUS_ANNOUNCER_LABELS,
			...this.#props.labels
		};
	}
	#announce(label) {
		this.#clearTimer();
		this.state.patch({ label });
		this.#close.arm();
		return true;
	}
	#processVolumeSnapshot(previous, snapshot, labels, alreadyHandled) {
		if (!hasChanged(previous.volume, snapshot.volume) && !hasChanged(previous.muted, snapshot.muted)) return false;
		if (this.#props.shouldAnnounceVolume?.(snapshot) === false) return false;
		if (alreadyHandled) return false;
		const volume = snapshot.volume ?? previous.volume;
		const muted = snapshot.muted ?? previous.muted;
		if (volume === void 0 && muted === void 0) return false;
		const label = muted || (volume ?? 0) <= 0 ? labels.muted : labels.volumeWithValue(formatVolumeValue(volume ?? 0));
		this.#schedule(label, () => this.#props.shouldAnnounceVolume?.(snapshot) !== false);
		return true;
	}
	#processSeekSnapshot(previous, snapshot, labels, alreadyHandled) {
		if (previous.seeking !== true && snapshot.seeking === true) {
			this.#seekStartTime = previous.currentTime ?? null;
			this.#seekTargetTime = snapshot.currentTime ?? null;
			this.#clearTimer();
			return false;
		}
		if (snapshot.seeking === true) {
			this.#seekTargetTime = snapshot.currentTime ?? this.#seekTargetTime;
			return false;
		}
		if (previous.seeking !== true || snapshot.seeking !== false) return false;
		const targetTime = snapshot.currentTime ?? this.#seekTargetTime;
		const startTime = this.#seekStartTime;
		this.#seekStartTime = null;
		this.#seekTargetTime = null;
		if (targetTime === void 0 || targetTime === null || Object.is(targetTime, startTime)) return false;
		if (this.#props.shouldAnnounceSeek?.(snapshot) === false) return false;
		if (alreadyHandled) return false;
		this.#schedule(formatSeekAnnouncerLabel(targetTime, labels), () => this.#props.shouldAnnounceSeek?.(snapshot) !== false);
		return true;
	}
	#schedule(label, shouldAnnounce) {
		this.#clearTimer();
		this.#timer = setTimeout(() => {
			this.#timer = null;
			if (!shouldAnnounce()) return;
			this.#announce(label);
		}, ANNOUNCEMENT_DEBOUNCE);
	}
	#clearTimer() {
		if (!this.#timer) return;
		clearTimeout(this.#timer);
		this.#timer = null;
	}
};
function hasChanged(previous, next) {
	return previous !== void 0 && next !== void 0 && !Object.is(previous, next);
}
//#endregion
export { StatusAnnouncerCore };

//# sourceMappingURL=status-announcer-core.js.map