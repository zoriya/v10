import { definePlayerFeature } from "../../feature.js";
import { findGestureCoordinator } from "../../gesture/coordinator.js";
import { isRemotePlaybackConnected, isRemotePlaybackConnecting } from "../../presentation/remote-playback.js";
import { listen } from "@videojs/utils/dom";
import { isNull } from "@videojs/utils/predicate";
import { isMediaPauseCapable, isMediaRemotePlaybackCapable } from "@videojs/media";
//#region src/dom/store/features/controls.ts
const IDLE_DELAY = 2e3;
const TAP_THRESHOLD = 250;
const TOUCH_SETTLE_DELAY = 500;
const controlsFeature = definePlayerFeature({
	name: "controls",
	state: ({ get, set }) => ({
		userActive: true,
		controlsVisible: true,
		toggleControls() {
			const next = !get().userActive;
			set({
				userActive: next,
				controlsVisible: next
			});
			return next;
		}
	}),
	attach({ target, signal, get, set }) {
		const { media, container } = target;
		if (!isMediaPauseCapable(media) || isNull(container)) {
			if (isNull(container)) console.warn("[vjs] controlsFeature requires a container element for activity tracking.");
			return;
		}
		const computeVisible = (userActive) => {
			return userActive || media.paused || isRemotePlaybackConnected(media) || isRemotePlaybackConnecting(media);
		};
		let idleTimer;
		function clearIdle() {
			clearTimeout(idleTimer);
			idleTimer = void 0;
		}
		function scheduleIdle() {
			clearIdle();
			idleTimer = setTimeout(setInactive, IDLE_DELAY);
		}
		function setActive() {
			if (!get().userActive) set({
				userActive: true,
				controlsVisible: true
			});
			scheduleIdle();
		}
		function setInactive() {
			clearIdle();
			set({
				userActive: false,
				controlsVisible: computeVisible(false)
			});
		}
		set({ toggleControls() {
			if (get().controlsVisible) setInactive();
			else setActive();
			return get().controlsVisible;
		} });
		let pointerDownTime = 0;
		let lastTouchAt = 0;
		const isRecentTouch = () => lastTouchAt > 0 && Date.now() - lastTouchAt < TOUCH_SETTLE_DELAY;
		function onPointerDown(event) {
			pointerDownTime = Date.now();
			if (event.pointerType === "touch") lastTouchAt = pointerDownTime;
		}
		function onPointerUp(event) {
			if (event.pointerType === "touch") lastTouchAt = Date.now();
			if (event.pointerType === "touch" && Date.now() - pointerDownTime < TAP_THRESHOLD) {
				if (findGestureCoordinator(container)?.claimsTap(event, "toggleControls")) return;
				const isMediaOrContainer = [media, container].includes(event.target);
				if (get().controlsVisible && isMediaOrContainer) setInactive();
				else setActive();
			} else setActive();
		}
		const onPlaybackChange = () => {
			const { userActive } = get();
			set({ controlsVisible: computeVisible(userActive) });
			if (!media.paused && userActive) scheduleIdle();
		};
		function onPointerMove(event) {
			if (event.pointerType === "touch") {
				if (get().userActive) scheduleIdle();
				return;
			}
			setActive();
		}
		listen(container, "pointermove", onPointerMove, { signal });
		listen(container, "pointerdown", onPointerDown, { signal });
		listen(container, "pointerup", onPointerUp, { signal });
		listen(container, "keyup", setActive, { signal });
		listen(container, "focusin", () => {
			if (isRecentTouch()) return;
			setActive();
		}, { signal });
		listen(container, "mouseleave", () => {
			if (isRecentTouch()) return;
			setInactive();
		}, { signal });
		listen(media, "play", onPlaybackChange, { signal });
		listen(media, "pause", onPlaybackChange, { signal });
		listen(media, "ended", onPlaybackChange, { signal });
		if (isMediaRemotePlaybackCapable(media)) {
			const onCastChange = () => {
				const { userActive } = get();
				set({ controlsVisible: computeVisible(userActive) });
			};
			listen(media.remote, "connect", onCastChange, { signal });
			listen(media.remote, "connecting", onCastChange, { signal });
			listen(media.remote, "disconnect", onCastChange, { signal });
		}
		signal.addEventListener("abort", clearIdle, { once: true });
		scheduleIdle();
	}
});
//#endregion
export { controlsFeature };

//# sourceMappingURL=controls.js.map