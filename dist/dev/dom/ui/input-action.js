import { IndicatorVisibilityCoordinator } from "../../core/ui/input-feedback/indicator-lifecycle.js";
import { getGestureCoordinator } from "../gesture/coordinator.js";
import { selectFullscreen, selectPiP, selectPlayback, selectPlaybackRate, selectTextTrack, selectTime, selectVolume } from "../store/selectors.js";
import { getHotkeyCoordinator } from "../hotkey/hotkey.js";
import { isCaptionOrSubtitleTrack } from "@videojs/utils/dom";
//#region src/dom/ui/input-action.ts
function toInputActionEvent(event) {
	return {
		action: event.action,
		value: event.value,
		source: event.source,
		key: "key" in event.event ? event.event.key : void 0
	};
}
function getMediaSnapshot(store) {
	if (!store) return {};
	const state = store.state;
	const time = selectTime(state);
	const textTrack = selectTextTrack(state);
	return {
		paused: selectPlayback(state)?.paused,
		volume: selectVolume(state)?.volume,
		muted: selectVolume(state)?.muted,
		playbackRate: selectPlaybackRate(state)?.playbackRate,
		fullscreen: selectFullscreen(state)?.fullscreen,
		subtitlesShowing: textTrack?.subtitlesShowing,
		subtitlesAvailable: textTrack ? (textTrack.textTrackList ?? []).some(isCaptionOrSubtitleTrack) : void 0,
		pip: selectPiP(state)?.pip,
		currentTime: time?.currentTime,
		duration: time?.duration,
		seeking: time?.seeking
	};
}
function subscribeToInputActions(container, callback) {
	const handleEvent = (event) => callback(toInputActionEvent(event));
	const gestureUnsubscribe = getGestureCoordinator(container).subscribe(handleEvent);
	const hotkeyUnsubscribe = getHotkeyCoordinator(container).subscribe(handleEvent);
	return () => {
		gestureUnsubscribe();
		hotkeyUnsubscribe();
	};
}
const indicatorVisibilityCoordinators = /* @__PURE__ */ new WeakMap();
function getIndicatorVisibilityCoordinator(container) {
	let coordinator = indicatorVisibilityCoordinators.get(container);
	if (!coordinator) {
		coordinator = new IndicatorVisibilityCoordinator();
		indicatorVisibilityCoordinators.set(container, coordinator);
	}
	return coordinator;
}
//#endregion
export { getIndicatorVisibilityCoordinator, getMediaSnapshot, subscribeToInputActions, toInputActionEvent };

//# sourceMappingURL=input-action.js.map