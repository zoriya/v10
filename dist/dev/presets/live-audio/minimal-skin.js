import { usePlayer } from "../../player/context.js";
import { Container } from "../../player/container.js";
import { AlertDialogPopup } from "../../ui/alert-dialog/alert-dialog-popup.js";
import { BufferingIndicator } from "../../ui/buffering-indicator/buffering-indicator.js";
import { ErrorDialogClose } from "../../ui/error-dialog/error-dialog-close.js";
import { ErrorDialogDescription } from "../../ui/error-dialog/error-dialog-description.js";
import { ErrorDialogRoot } from "../../ui/error-dialog/error-dialog-root.js";
import { ErrorDialogTitle } from "../../ui/error-dialog/error-dialog-title.js";
import { Hotkey } from "../../ui/hotkey/hotkey.js";
import { LiveButton } from "../../ui/live-button/live-button.js";
import { MuteButton } from "../../ui/mute-button/mute-button.js";
import { PlayButton } from "../../ui/play-button/play-button.js";
import { PopoverPopup } from "../../ui/popover/popover-popup.js";
import { PopoverRoot } from "../../ui/popover/popover-root.js";
import { PopoverTrigger } from "../../ui/popover/popover-trigger.js";
import { SliderFill } from "../../ui/slider/slider-fill.js";
import { SliderThumb } from "../../ui/slider/slider-thumb.js";
import { SliderTrack } from "../../ui/slider/slider-track.js";
import { StatusAnnouncer } from "../../ui/status-announcer/status-announcer.js";
import { TooltipLabel } from "../../ui/tooltip/tooltip-label.js";
import { TooltipShortcut } from "../../ui/tooltip/tooltip-shortcut.js";
import { TooltipPopup } from "../../ui/tooltip/tooltip-popup.js";
import { TooltipProvider } from "../../ui/tooltip/tooltip-provider.js";
import { TooltipRoot } from "../../ui/tooltip/tooltip-root.js";
import { TooltipTrigger } from "../../ui/tooltip/tooltip-trigger.js";
import { VolumeSliderRoot } from "../../ui/volume-slider/volume-slider-root.js";
import PauseIcon from "../../icons/dist/react/minimal/pause.js";
import PlayIcon from "../../icons/dist/react/minimal/play.js";
import RestartIcon from "../../icons/dist/react/minimal/restart.js";
import SpinnerIcon from "../../icons/dist/react/minimal/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/minimal/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/minimal/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/minimal/volume-off.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@videojs/utils/style";
//#region src/presets/live-audio/minimal-skin.tsx
const Button = forwardRef(function Button({ className, ...props }, ref) {
	return /* @__PURE__ */ jsx("button", {
		ref,
		type: "button",
		className: cn("media-button media-button--subtle media-button--icon", className),
		...props
	});
});
function VolumePopover() {
	const volumeUnsupported = usePlayer((s) => s.volumeAvailability === "unsupported");
	const muteButton = /* @__PURE__ */ jsxs(MuteButton, {
		className: "media-button--mute",
		render: /* @__PURE__ */ jsx(Button, {}),
		children: [
			/* @__PURE__ */ jsx(VolumeOffIcon, { className: "media-icon media-icon--volume-off" }),
			/* @__PURE__ */ jsx(VolumeLowIcon, { className: "media-icon media-icon--volume-low" }),
			/* @__PURE__ */ jsx(VolumeHighIcon, { className: "media-icon media-icon--volume-high" })
		]
	});
	if (volumeUnsupported) return muteButton;
	return /* @__PURE__ */ jsxs(PopoverRoot, {
		openOnHover: true,
		delay: 200,
		closeDelay: 100,
		side: "left",
		boundary: "viewport",
		children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: muteButton }), /* @__PURE__ */ jsx(PopoverPopup, {
			className: "media-popover media-popover--volume",
			children: /* @__PURE__ */ jsxs(VolumeSliderRoot, {
				className: "media-slider",
				orientation: "horizontal",
				thumbAlignment: "edge",
				children: [/* @__PURE__ */ jsx(SliderTrack, {
					className: "media-slider__track",
					children: /* @__PURE__ */ jsx(SliderFill, { className: "media-slider__fill" })
				}), /* @__PURE__ */ jsx(SliderThumb, { className: "media-slider__thumb media-slider__thumb--persistent" })]
			})
		})]
	});
}
/**
* Minimal audio skin configured for live playback. Mirrors
* {@link MinimalAudioSkin} but omits the time slider and the current /
* duration / remaining time displays. A flexible spacer stretches between
* the play and volume controls so they sit at opposite edges of the
* control bar.
*/
function MinimalLiveAudioSkin(props) {
	const { children, className, ...rest } = props;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn("media-minimal-skin media-minimal-skin--audio", className),
		...rest,
		children: [
			children,
			/* @__PURE__ */ jsx(ErrorDialogRoot, { children: /* @__PURE__ */ jsx(AlertDialogPopup, {
				className: "media-error",
				children: /* @__PURE__ */ jsxs("div", {
					className: "media-error__dialog",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "media-error__content",
						children: [/* @__PURE__ */ jsx(ErrorDialogTitle, { className: "media-error__title" }), /* @__PURE__ */ jsx(ErrorDialogDescription, { className: "media-error__description" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "media-error__actions",
						children: /* @__PURE__ */ jsx(ErrorDialogClose, { className: "media-button media-button--subtle" })
					})]
				})
			}) }),
			/* @__PURE__ */ jsx("div", {
				className: "media-controls",
				children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "media-button-group",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "media-button--play__wrapper",
							children: [/* @__PURE__ */ jsx(BufferingIndicator, { render: (props) => /* @__PURE__ */ jsx("div", {
								...props,
								className: "media-buffering-indicator",
								children: /* @__PURE__ */ jsx(SpinnerIcon, { className: "media-icon" })
							}) }), /* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								boundary: "viewport",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PlayButton, {
									className: "media-button--play",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [
										/* @__PURE__ */ jsx(RestartIcon, { className: "media-icon media-icon--restart" }),
										/* @__PURE__ */ jsx(PlayIcon, { className: "media-icon media-icon--play" }),
										/* @__PURE__ */ jsx(PauseIcon, { className: "media-icon media-icon--pause" })
									]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							})]
						}), /* @__PURE__ */ jsx(LiveButton, { className: "media-button media-button--subtle media-button--live" })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "media-time-controls",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "media-button-group",
						children: /* @__PURE__ */ jsx(VolumePopover, {})
					})
				] })
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "Space",
				action: "togglePaused"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "k",
				action: "togglePaused"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "m",
				action: "toggleMuted"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "ArrowUp",
				action: "volumeStep",
				value: .05
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "ArrowDown",
				action: "volumeStep",
				value: -.05
			}),
			/* @__PURE__ */ jsx(StatusAnnouncer, { className: "media-sr-only" })
		]
	});
}
//#endregion
export { MinimalLiveAudioSkin };

//# sourceMappingURL=minimal-skin.js.map