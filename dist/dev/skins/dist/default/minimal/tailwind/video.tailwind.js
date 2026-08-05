import { controls as controls$1 } from "./components/controls.js";
import { error as error$1 } from "./components/error.js";
import { popup as popup$1 } from "./components/popup.js";
import { root as root$1 } from "./components/root.js";
import { slider as slider$1 } from "./components/slider.js";
import { iconState } from "../../shared/tailwind/icon-state.js";
import { badge } from "./components/badge.js";
import { bufferingIndicator } from "./components/buffering.js";
import { button } from "./components/button.js";
import { buttonGroup } from "./components/button-group.js";
import { icon, iconFlipped } from "./components/icon.js";
import { menu as menu$1 } from "./components/menu.js";
import "./components/playback-rate.js";
import "./components/seek.js";
import { time as time$1 } from "./components/time.js";
import { thumbnail as thumbnail$1 } from "./components/thumbnail.js";
import { inputFeedback } from "./components/input-feedback.js";
import { overlay } from "./components/overlay.js";
import { poster } from "./components/poster.js";
import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/minimal/tailwind/video.tailwind.js
const root = (isShadowDOM) => cn(root$1, "group/skin", "bg-black overflow-clip", "after:absolute after:pointer-events-none after:rounded-[inherit] after:z-10", "[&:fullscreen]:after:hidden", "after:inset-0 after:ring-1 after:ring-inset after:ring-black/15 dark:after:ring-white/15", {
	"[&_::slotted(video)]:block [&_::slotted(video)]:w-full [&_::slotted(video)]:h-full [&_::slotted(video)]:rounded-(--media-video-border-radius) [&_::slotted(video)]:[object-fit:var(--media-object-fit,cover)] [&_::slotted(video)]:[object-position:var(--media-object-position,center)]": isShadowDOM,
	"[&_video]:block [&_video]:w-full [&_video]:h-full [&_video]:rounded-[inherit] [&_video]:[object-fit:var(--media-object-fit,contain)] [&_video]:[object-position:var(--media-object-position,center)]": !isShadowDOM
}, "[--media-video-border-radius:var(--media-border-radius,0.75rem)]", "[--media-controls-background-color:transparent]", "[--media-controls-transition-duration:100ms]", "[--media-controls-transition-timing-function:ease-out]", "[--media-error-dialog-transition-duration:150ms]", "[--media-error-dialog-transition-delay:100ms]", "[--media-error-dialog-transition-timing-function:ease-out]", "[--media-popup-transition-duration:100ms]", "[--media-popup-transition-timing-function:ease-out]", "[--media-popover-backdrop-filter:blur(16px)_saturate(1.5)]", "[--media-popover-background-color:oklch(0_0_0/0.5)]", "[--media-popover-border-color:oklch(1_0_0/0.1)]", "[--media-tooltip-backdrop-filter:var(--media-popover-backdrop-filter)]", "[--media-tooltip-background-color:var(--media-popover-background-color)]", "[--media-tooltip-border-color:var(--media-popover-border-color)]", "[--media-tooltip-text-color:currentColor]", "min-[1280px]:[&:fullscreen]:[--scale:1.25]", "min-[1536px]:[&:fullscreen]:[--scale:1.5]", "min-[1920px]:[&:fullscreen]:[--scale:1.75]", "motion-reduce:[--media-error-dialog-transition-duration:50ms]", "motion-reduce:[--media-error-dialog-transition-delay:0ms]", "motion-reduce:[--media-popup-transition-duration:0ms]", "[@media(prefers-reduced-transparency:reduce)]:[--media-controls-background-color:oklch(0_0_0)]", "contrast-more:[--media-controls-background-color:oklch(0_0_0)]", "[@media(prefers-reduced-transparency:reduce)]:[--media-tooltip-background-color:oklch(0_0_0)]", "contrast-more:[--media-tooltip-background-color:oklch(0_0_0)]", "pointer-fine:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:300ms]", "pointer-coarse:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:150ms]", "motion-reduce:has-[[data-controls]:not([data-visible])]:[--media-controls-transition-duration:50ms]", "[--media-caption-track-y:--spacing(-2)]", "[--media-caption-track-delay:25ms]", "[--media-caption-track-duration:var(--media-controls-transition-duration)]", "has-[[data-controls][data-visible]]:[--media-caption-track-y:--spacing(-20)]", "@2xl/media-root:has-[[data-controls][data-visible]]:*:[--media-caption-track-y:--spacing(-12)]", !isShadowDOM ? [
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
const controls = cn(controls$1, "absolute bottom-1 inset-x-1", "[--base-side-offset:2] [--base-boundary-offset:1]", "gap-x-2 flex-wrap rounded-[--spacing(3)] group/controls", "text-white z-20", "peer-data-open/error:hidden", "ease-(--media-controls-transition-timing-function)", "duration-[calc(var(--media-controls-transition-duration)/2)]", "not-data-visible:duration-(--media-controls-transition-duration)", "pointer-fine:will-change-[translate,filter,opacity]", "pointer-fine:transition-[translate,filter,opacity]", "pointer-coarse:will-change-[translate,opacity]", "pointer-coarse:transition-[translate,opacity]", "not-data-visible:opacity-0 not-data-visible:pointer-events-none", "motion-safe:not-data-visible:translate-y-full", "pointer-fine:motion-safe:not-data-visible:blur-sm", "@2xl/media-root:flex-nowrap @2xl/media-root:[--controls-padding:2] @2xl/media-root:[--base-side-offset:0]");
const buttonGroupStart = cn(buttonGroup, "flex-1 @2xl/media-root:flex-none");
const buttonGroupEnd = cn(buttonGroup, "flex-1 justify-end @2xl/media-root:flex-none");
const spacer = "grow";
const time = {
	...time$1,
	controls: cn(time$1.controls, "[--slider-height:--spacing(5)] grow-0 shrink-0 basis-full order-[-1] px-1.5", "@2xl/media-root:[--slider-height:--spacing(8)] @2xl/media-root:grow @2xl/media-root:shrink @2xl/media-root:basis-0 @2xl/media-root:order-[unset]", "@2xl/media-root:[mask-position:100%_0] @2xl/media-root:[mask-size:200%_100%]", "@2xl/media-root:[transition:mask-position_50ms_ease-out]", "group-has-[[data-volume-level][aria-expanded=true]]/controls:@2xl/media-root:[mask-image:linear-gradient(to_right,transparent_10%,black_25%,black_100%)]", "group-has-[[data-volume-level][aria-expanded=true]]/controls:@2xl/media-root:[mask-position:0_0]")
};
const error = {
	...error$1,
	root: cn(error$1.root, "pointer-events-none outline-none"),
	dialog: cn(error$1.dialog, "pointer-events-auto w-full max-w-64 p-4 rounded-none"),
	content: cn(error$1.content, "p-0 py-1.5"),
	title: "text-(length:--font-size-medium)"
};
const thumbnail = {
	...thumbnail$1,
	root: cn(thumbnail$1.root, "[--max-width:--spacing(44)]", "[--max-height:--spacing(32)]", "[--padding:--spacing(-2)]", "[--inset:calc(100cqi-100%)]", "absolute [left:clamp(calc(var(--max-width)/2+var(--padding)),var(--media-slider-pointer),calc(100%-var(--max-width)/2-var(--padding)+var(--inset)))] bottom-full -translate-x-1/2", "@2xl/media-root:[left:var(--media-slider-pointer)]", "opacity-0 scale-80 blur-sm origin-bottom", "transition-[scale,opacity,filter] duration-150", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:opacity-100", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:scale-100", "has-[[role=img]:not([data-hidden])]:group-data-pointing/slider:blur-none"),
	imageWrapper: cn(thumbnail$1.imageWrapper, "after:absolute after:inset-0 after:rounded-[inherit]", "after:ring-1 after:ring-black/5 after:shadow-sm after:shadow-black/20"),
	image: cn(thumbnail$1.image, "max-w-(--max-width)", "max-h-(--max-height)")
};
const slider = {
	...slider$1,
	track: cn(slider$1.track, "ring-1 ring-black/5")
};
const popup = {
	...popup$1,
	volume: cn(popup$1.popover, "p-0 bg-transparent")
};
const menu = {
	...menu$1,
	root: menu$1.root,
	settings: menu$1.settings
};
//#endregion
export { badge, bufferingIndicator, button, buttonGroup, buttonGroupEnd, buttonGroupStart, controls, error, icon, iconFlipped, iconState, inputFeedback, menu, overlay, popup, poster, root, slider, spacer, thumbnail, time };

//# sourceMappingURL=video.tailwind.js.map