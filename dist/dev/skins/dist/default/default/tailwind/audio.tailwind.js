import { iconState } from "../../shared/tailwind/icon-state.js";
import { controls as controls$1 } from "./components/controls.js";
import { error as error$1 } from "./components/error.js";
import { popup as popup$1 } from "./components/popup.js";
import { root as root$1 } from "./components/root.js";
import { slider as slider$1 } from "./components/slider.js";
import { surface } from "./components/surface.js";
import { time as time$1 } from "./components/time.js";
import "./components/badge.js";
import "./components/buffering.js";
import { button } from "./components/button.js";
import { buttonGroup } from "./components/button-group.js";
import { icon, iconContainer, iconFlipped } from "./components/icon.js";
import { menu } from "./components/menu.js";
import { playbackRate } from "./components/playback-rate.js";
import { seek } from "./components/seek.js";
import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/default/tailwind/audio.tailwind.js
const root = cn(root$1, "[--media-text-color:var(--media-color-primary,oklch(0_0_0))]", "[--media-surface-background-color:oklch(1_0_0/0.5)]", "[--media-surface-inner-border-color:oklch(1_0_0/0.1)]", "[--media-surface-outer-border-color:oklch(0_0_0/0.05)]", "[--media-surface-shadow-color:oklch(0_0_0/0.15)]", "[--media-surface-backdrop-filter:blur(16px)_saturate(1.5)]", "[--media-error-dialog-transition-duration:250ms]", "[--media-error-dialog-transition-delay:100ms]", "[--media-popup-transition-duration:100ms]", "[--media-popup-transition-timing-function:ease-out]", "motion-reduce:[--media-error-dialog-transition-duration:50ms]", "motion-reduce:[--media-error-dialog-transition-delay:0ms]", "motion-reduce:[--media-popup-transition-duration:0ms]", "dark:[--media-surface-background-color:oklch(0_0_0/0.4)]", "dark:[--media-text-color:var(--media-color-primary,oklch(1_0_0))]", "[@media(prefers-reduced-transparency:reduce)]:[--media-surface-background-color:oklch(1_0_0)]", "contrast-more:[--media-surface-background-color:oklch(1_0_0)]", "[@media(prefers-reduced-transparency:reduce)]:[--media-surface-outer-border-color:oklch(0_0_0/0.05)]", "contrast-more:[--media-surface-outer-border-color:oklch(0_0_0/0.05)]", "dark:[@media(prefers-reduced-transparency:reduce)]:[--media-surface-background-color:oklch(0_0_0)]", "dark:contrast-more:[--media-surface-background-color:oklch(0_0_0)]", "dark:[@media(prefers-reduced-transparency:reduce)]:[--media-surface-inner-border-color:oklch(1_0_0/0.2)]", "dark:contrast-more:[--media-surface-inner-border-color:oklch(1_0_0/0.2)]", "dark:[@media(prefers-reduced-transparency:reduce)]:[--media-surface-outer-border-color:transparent]", "dark:contrast-more:[--media-surface-outer-border-color:transparent]");
const controls = cn(controls$1, surface, "[--base-boundary-offset:2]", "text-(--media-text-color)", "peer-data-open/error:**:invisible");
const spacer = "grow";
const time = {
	...time$1,
	group: cn(time$1.group, "px-3")
};
const playButton = {
	wrapper: "group/play inline-flex relative",
	/** `peer/play-buffering` on `bufferingRoot`; merge onto the play trigger after the peer in DOM. */
	control: "peer-data-visible/play-buffering:[&>svg]:opacity-0",
	bufferingRoot: cn("peer/play-buffering", "absolute inset-0 z-10 hidden place-content-center pointer-events-none text-inherit", "not-data-visible:[--media-spinner-animation:none]", "data-visible:grid")
};
const slider = {
	...slider$1,
	track: cn(slider$1.track, "bg-black/10", "dark:bg-white/20 dark:ring-1 dark:ring-black/5")
};
const popup = {
	...popup$1,
	popover: cn(surface, popup$1.popover),
	tooltip: cn(surface, popup$1.tooltip)
};
const error = {
	...error$1,
	dialog: cn("absolute inset-0 z-20 flex items-center gap-3 rounded-full px-5 pr-0.5", "bg-(--media-surface-background-color) text-(--media-text-color)", "backdrop-blur-lg backdrop-saturate-150", "transition-[opacity,filter] ease-out", "duration-(--media-error-dialog-transition-duration)", "delay-(--media-error-dialog-transition-delay)", "group-data-starting-style/error:opacity-0 group-data-starting-style/error:blur-xs", "group-data-ending-style/error:opacity-0 group-data-ending-style/error:blur-xs", "group-data-ending-style/error:delay-0"),
	content: "flex flex-1 items-center gap-2"
};
//#endregion
export { button, buttonGroup, controls, error, icon, iconContainer, iconFlipped, iconState, menu, playButton, playbackRate, popup, root, seek, slider, spacer, time };

//# sourceMappingURL=audio.tailwind.js.map