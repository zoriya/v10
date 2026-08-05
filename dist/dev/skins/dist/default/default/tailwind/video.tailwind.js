import { iconState } from "../../shared/tailwind/icon-state.js";
import { controls as controls$1 } from "./components/controls.js";
import { error as error$1 } from "./components/error.js";
import { popup as popup$1 } from "./components/popup.js";
import { root as root$1 } from "./components/root.js";
import { slider as slider$1 } from "./components/slider.js";
import { surface } from "./components/surface.js";
import { time as time$1 } from "./components/time.js";
import { badge } from "./components/badge.js";
import { bufferingIndicator as bufferingIndicator$1 } from "./components/buffering.js";
import { button } from "./components/button.js";
import { buttonGroup } from "./components/button-group.js";
import { icon, iconFlipped } from "./components/icon.js";
import { menu as menu$1 } from "./components/menu.js";
import "./components/playback-rate.js";
import "./components/seek.js";
import { inputFeedback as inputFeedback$1 } from "./components/input-feedback.js";
import { thumbnail as thumbnail$1 } from "./components/thumbnail.js";
import { overlay } from "./components/overlay.js";
import { poster } from "./components/poster.js";
import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/default/tailwind/video.tailwind.js
const root = (isShadowDOM) => cn(root$1, "group/skin", "bg-black overflow-clip", "after:absolute after:pointer-events-none after:rounded-[inherit] after:z-10", "[&:fullscreen]:after:hidden", "after:inset-0 after:ring-1 after:ring-inset after:ring-black/10 dark:after:ring-white/15", {
	"[&_::slotted(video)]:block [&_::slotted(video)]:w-full [&_::slotted(video)]:h-full [&_::slotted(video)]:rounded-(--media-video-border-radius) [&_::slotted(video)]:[object-fit:var(--media-object-fit,contain)] [&_::slotted(video)]:[object-position:var(--media-object-position,center)]": isShadowDOM,
	"[&_video]:block [&_video]:w-full [&_video]:h-full [&_video]:rounded-[inherit] [&_video]:[object-fit:var(--media-object-fit,contain)] [&_video]:[object-position:var(--media-object-position,center)]": !isShadowDOM
}, "[--media-spring-timing-function:linear(0,0.034_1.5%,0.763_9.7%,1.066_13.9%,1.198_19.9%,1.184_21.8%,0.963_37.5%,0.997_50.9%,1)]", "[--media-video-border-radius:var(--media-border-radius,1.75rem)]", "[--media-controls-transition-duration:100ms]", "[--media-controls-transition-timing-function:ease-out]", "[--media-error-dialog-transition-duration:350ms]", "[--media-error-dialog-transition-delay:100ms]", "[--media-error-dialog-transition-timing-function:var(--media-spring-timing-function)]", "[--media-popup-transition-duration:100ms]", "[--media-popup-transition-timing-function:ease-out]", "[--media-surface-background-color:oklch(1_0_0/0.1)]", "[--media-surface-inner-border-color:oklch(1_0_0/0.1)]", "[--media-surface-outer-border-color:oklch(0_0_0/0.1)]", "[--media-surface-shadow-color:oklch(0_0_0/0.15)]", "[--media-surface-backdrop-filter:blur(16px)_saturate(1.5)]", "min-[1280px]:[&:fullscreen]:[--scale:1.25]", "min-[1536px]:[&:fullscreen]:[--scale:1.5]", "min-[1920px]:[&:fullscreen]:[--scale:1.75]", "motion-reduce:[--media-error-dialog-transition-duration:50ms]", "motion-reduce:[--media-error-dialog-transition-delay:0ms]", "motion-reduce:[--media-error-dialog-transition-timing-function:ease-out]", "motion-reduce:[--media-popup-transition-duration:0ms]", "[@media(prefers-reduced-transparency:reduce)]:[--media-surface-background-color:oklch(0_0_0)]", "contrast-more:[--media-surface-background-color:oklch(0_0_0)]", "[@media(prefers-reduced-transparency:reduce)]:[--media-surface-inner-border-color:oklch(1_0_0/0.25)]", "contrast-more:[--media-surface-inner-border-color:oklch(1_0_0/0.25)]", "[@media(prefers-reduced-transparency:reduce)]:[--media-surface-outer-border-color:transparent]", "contrast-more:[--media-surface-outer-border-color:transparent]", "pointer-fine:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:300ms]", "pointer-coarse:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:150ms]", "motion-reduce:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:50ms]", "[--media-caption-track-y:--spacing(-2)]", "[--media-caption-track-delay:25ms]", "[--media-caption-track-duration:var(--media-controls-transition-duration)]", "has-[[data-controls][data-visible]]:[--media-caption-track-y:--spacing(-22)]", "@2xl/media-root:has-[[data-controls][data-visible]]:*:[--media-caption-track-y:--spacing(-14)]", !isShadowDOM ? [
	"[&_video::-webkit-media-text-track-container]:transition-[translate]",
	"[&_video::-webkit-media-text-track-container]:duration-(--media-caption-track-duration)",
	"[&_video::-webkit-media-text-track-container]:ease-out",
	"[&_video::-webkit-media-text-track-container]:delay-(--media-caption-track-delay)",
	"[&_video::-webkit-media-text-track-container]:translate-y-(--media-caption-track-y)",
	"[&_video::-webkit-media-text-track-container]:scale-98",
	"[&_video::-webkit-media-text-track-container]:z-1",
	"[&_video::-webkit-media-text-track-container]:font-[inherit]"
] : [], !isShadowDOM ? [
	"before:absolute before:inset-0 before:pointer-events-none",
	"before:[background-image:var(--media-poster-placeholder,none)]",
	"before:bg-no-repeat",
	"before:[background-position:var(--media-object-position,center)]",
	"before:[background-size:var(--media-object-fit,contain)]",
	"before:opacity-0 before:[filter:blur(var(--media-poster-placeholder-blur,20px))]",
	"before:transition-opacity before:duration-250",
	"has-[img[data-visible]:not([data-loaded])]:before:opacity-100"
] : [], "[&:fullscreen]:[--media-border-radius:0]", {
	"[&:fullscreen_video]:object-contain": !isShadowDOM,
	"[&:fullscreen_::slotted(video)]:object-contain": isShadowDOM
});
const controlsBase = cn(controls$1, surface, "[color:var(--media-color-primary,oklch(1_0_0))] z-10", "peer-data-open/error:hidden!", "ease-(--media-controls-transition-timing-function)", "duration-[calc(var(--media-controls-transition-duration)/2)]", "pointer-fine:will-change-[filter,opacity,scale,translate]", "pointer-fine:transition-[filter,opacity,scale,translate]", "pointer-coarse:will-change-[opacity,scale,translate]", "pointer-coarse:transition-[opacity,scale,translate]", "@2xl/media-root:[--base-boundary-offset:3]");
const controls = cn(controlsBase, "group/controls contents! after:hidden", "@lg/media-root:absolute @lg/media-root:flex!", "@lg/media-root:bottom-2 @lg/media-root:inset-x-2", "@2xl/media-root:bottom-3 @2xl/media-root:inset-x-3", "@lg/media-root:after:block @lg/media-root:origin-bottom", "@lg/media-root:not-data-visible:pointer-events-none", "@lg/media-root:not-data-visible:opacity-0", "@lg/media-root:not-data-visible:duration-(--media-controls-transition-duration)", "@lg/media-root:motion-safe:not-data-visible:scale-95", "@lg/media-root:pointer-fine:motion-safe:not-data-visible:blur-sm", "@lg/media-root:motion-safe:not-data-visible:translate-y-1");
const splitControls = cn(controlsBase, "absolute @max-lg/media-root:duration-[inherit] @max-lg/media-root:ease-[inherit]", "@lg/media-root:contents! @lg/media-root:after:hidden", "@max-lg/media-root:group-[:not([data-visible])]/controls:pointer-events-none", "@max-lg/media-root:group-[:not([data-visible])]/controls:opacity-0", "@max-lg/media-root:group-[:not([data-visible])]/controls:duration-(--media-controls-transition-duration)", "@max-lg/media-root:motion-safe:group-[:not([data-visible])]/controls:scale-95", "@max-lg/media-root:pointer-fine:motion-safe:group-[:not([data-visible])]/controls:blur-sm");
const primaryControls = cn(splitControls, "bottom-2 inset-x-2 origin-bottom", "@max-lg/media-root:motion-safe:group-[:not([data-visible])]/controls:translate-y-1");
const secondaryControls = cn(splitControls, "top-2 right-2 origin-top @container-normal", "@max-lg/media-root:motion-safe:group-[:not([data-visible])]/controls:-translate-y-1");
const buttonGroupStart = buttonGroup;
const buttonGroupEnd = buttonGroup;
const spacer = "grow";
const time = {
	...time$1,
	group: cn(time$1.group, "px-3")
};
const thumbnail = {
	...thumbnail$1,
	root: cn(thumbnail$1.root, surface, "[--max-width:--spacing(44)]", "[--max-height:--spacing(32)]", "[--padding:--spacing(-4.5)]", "[--inset:calc((100cqi-100%)/2)]", "absolute [left:clamp(calc(var(--max-width)/2+var(--padding)-var(--inset)),var(--media-slider-pointer),calc(100%-var(--max-width)/2-var(--padding)+var(--inset)))] [bottom:calc(100%+--spacing(4.8))] -translate-x-1/2", "opacity-0 scale-80 blur-sm origin-bottom", "transition-[scale,opacity,filter] duration-150", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:opacity-100", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:scale-100", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:blur-none"),
	image: cn(thumbnail$1.image, "max-w-(--max-width)", "max-h-(--max-height)")
};
const slider = {
	...slider$1,
	track: cn(slider$1.track, "bg-white/20 ring-1 ring-black/5")
};
const popup = {
	...popup$1,
	popover: cn(surface, popup$1.popover),
	tooltip: cn(surface, popup$1.tooltip)
};
const menu = {
	...menu$1,
	root: menu$1.root,
	settings: menu$1.settings
};
const bufferingIndicator = bufferingIndicator$1;
const error = {
	...error$1,
	dialog: cn(error$1.dialog, surface, "w-full text-shadow-2xs text-shadow-black/25"),
	content: cn(error$1.content, "text-shadow-inherit"),
	title: cn(error$1.title, "text-(length:--font-size-medium)")
};
const inputFeedback = {
	...inputFeedback$1,
	island: {
		...inputFeedback$1.island,
		base: cn(inputFeedback$1.island.base, surface)
	}
};
//#endregion
export { badge, bufferingIndicator, button, buttonGroup, buttonGroupEnd, buttonGroupStart, controls, error, icon, iconFlipped, iconState, inputFeedback, menu, overlay, popup, poster, primaryControls, root, secondaryControls, slider, spacer, thumbnail, time };

//# sourceMappingURL=video.tailwind.js.map