import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { Container } from "../../player/container.js";
import { isRenderProp } from "../../utils/use-render.js";
import { AirPlayButton } from "../../ui/airplay-button/airplay-button.js";
import { AlertDialogPopup } from "../../ui/alert-dialog/alert-dialog-popup.js";
import { BufferingIndicator } from "../../ui/buffering-indicator/buffering-indicator.js";
import { CaptionsButton } from "../../ui/captions-button/captions-button.js";
import { useCaptionsOptions } from "../../ui/captions-radio-group/use-captions-options.js";
import { CastButton } from "../../ui/cast-button/cast-button.js";
import { ControlsRoot } from "../../ui/controls/controls-root.js";
import { ErrorDialogClose } from "../../ui/error-dialog/error-dialog-close.js";
import { ErrorDialogDescription } from "../../ui/error-dialog/error-dialog-description.js";
import { ErrorDialogRoot } from "../../ui/error-dialog/error-dialog-root.js";
import { ErrorDialogTitle } from "../../ui/error-dialog/error-dialog-title.js";
import { FullscreenButton } from "../../ui/fullscreen-button/fullscreen-button.js";
import { Gesture } from "../../ui/gesture/gesture.js";
import { Hotkey } from "../../ui/hotkey/hotkey.js";
import { LiveButton } from "../../ui/live-button/live-button.js";
import { MenuContent } from "../../ui/menu/menu-content.js";
import { MenuItemIndicator } from "../../ui/menu/menu-item-indicator.js";
import { MenuRadioGroup } from "../../ui/menu/menu-radio-group.js";
import { MenuRadioItem } from "../../ui/menu/menu-radio-item.js";
import { MenuRoot } from "../../ui/menu/menu-root.js";
import { MenuTrigger } from "../../ui/menu/menu-trigger.js";
import { MuteButton } from "../../ui/mute-button/mute-button.js";
import { PiPButton } from "../../ui/pip-button/pip-button.js";
import { PlayButton } from "../../ui/play-button/play-button.js";
import { PopoverPopup } from "../../ui/popover/popover-popup.js";
import { PopoverRoot } from "../../ui/popover/popover-root.js";
import { PopoverTrigger } from "../../ui/popover/popover-trigger.js";
import { Poster } from "../../ui/poster/poster.js";
import { SliderFill as SliderFill$1 } from "../../ui/slider/slider-fill.js";
import { SliderThumb as SliderThumb$1 } from "../../ui/slider/slider-thumb.js";
import { SliderTrack as SliderTrack$1 } from "../../ui/slider/slider-track.js";
import { StatusAnnouncer } from "../../ui/status-announcer/status-announcer.js";
import { StatusIndicatorRoot } from "../../ui/status-indicator/status-indicator-root.js";
import { StatusIndicatorValue } from "../../ui/status-indicator/status-indicator-value.js";
import { TooltipLabel } from "../../ui/tooltip/tooltip-label.js";
import { TooltipShortcut } from "../../ui/tooltip/tooltip-shortcut.js";
import { TooltipPopup } from "../../ui/tooltip/tooltip-popup.js";
import { TooltipProvider } from "../../ui/tooltip/tooltip-provider.js";
import { TooltipRoot } from "../../ui/tooltip/tooltip-root.js";
import { TooltipTrigger } from "../../ui/tooltip/tooltip-trigger.js";
import { VolumeIndicatorFill } from "../../ui/volume-indicator/volume-indicator-fill.js";
import { VolumeIndicatorRoot } from "../../ui/volume-indicator/volume-indicator-root.js";
import { VolumeIndicatorValue } from "../../ui/volume-indicator/volume-indicator-value.js";
import { VolumeSliderRoot } from "../../ui/volume-slider/volume-slider-root.js";
import AirPlayEnterIcon from "../../icons/dist/react/minimal/airplay-enter.js";
import AirPlayExitIcon from "../../icons/dist/react/minimal/airplay-exit.js";
import CaptionsOffIcon from "../../icons/dist/react/minimal/captions-off.js";
import CaptionsOnIcon from "../../icons/dist/react/minimal/captions-on.js";
import CastEnterIcon from "../../icons/dist/react/minimal/cast-enter.js";
import CastExitIcon from "../../icons/dist/react/minimal/cast-exit.js";
import CheckIcon from "../../icons/dist/react/minimal/check.js";
import FullscreenEnterIcon from "../../icons/dist/react/minimal/fullscreen-enter.js";
import FullscreenExitIcon from "../../icons/dist/react/minimal/fullscreen-exit.js";
import PauseIcon from "../../icons/dist/react/minimal/pause.js";
import PipEnterIcon from "../../icons/dist/react/minimal/pip-enter.js";
import PipExitIcon from "../../icons/dist/react/minimal/pip-exit.js";
import PlayIcon from "../../icons/dist/react/minimal/play.js";
import RestartIcon from "../../icons/dist/react/minimal/restart.js";
import SpinnerIcon from "../../icons/dist/react/minimal/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/minimal/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/minimal/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/minimal/volume-off.js";
import { iconState } from "../../skins/dist/default/shared/tailwind/icon-state.js";
import { bufferingIndicator } from "../../skins/dist/default/minimal/tailwind/components/buffering.js";
import { button } from "../../skins/dist/default/minimal/tailwind/components/button.js";
import { icon } from "../../skins/dist/default/minimal/tailwind/components/icon.js";
import { inputFeedback } from "../../skins/dist/default/minimal/tailwind/components/input-feedback.js";
import { overlay } from "../../skins/dist/default/minimal/tailwind/components/overlay.js";
import { poster } from "../../skins/dist/default/minimal/tailwind/components/poster.js";
import { buttonGroupEnd, buttonGroupStart, controls, error, menu, popup, root, slider, spacer } from "../../skins/dist/default/minimal/tailwind/video.tailwind.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { isString } from "@videojs/utils/predicate";
import { captionsText } from "@videojs/core/i18n/text/menu";
import { cn } from "@videojs/utils/style";
//#region src/presets/live-video/minimal-skin.tailwind.tsx
const TOP_STATUS_ACTIONS = [
	"toggleSubtitles",
	"toggleFullscreen",
	"togglePictureInPicture"
];
const CENTER_STATUS_ACTIONS = ["togglePaused"];
const Button = forwardRef(function Button({ className, ...props }, ref) {
	return /* @__PURE__ */ jsx("button", {
		ref,
		type: "button",
		className: cn(button.base, button.subtle, button.icon, className),
		...props
	});
});
const SliderRoot = forwardRef(function SliderRoot({ className, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(slider.root, className),
		...props
	});
});
const SliderTrack = forwardRef(function SliderTrack({ className, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(slider.track, className),
		...props
	});
});
const SliderFill = forwardRef(function SliderFill({ type = "fill", className, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(slider.fill.base, type === "fill" ? slider.fill.fill : slider.fill.buffer, className),
		...props
	});
});
const SliderThumb = forwardRef(function SliderThumb({ persistent, className, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(slider.thumb.base, persistent ? void 0 : slider.thumb.interactive, className),
		...props
	});
});
function VolumePopover() {
	const volumeUnsupported = usePlayer((s) => s.volumeAvailability === "unsupported");
	const muteButton = /* @__PURE__ */ jsxs(MuteButton, {
		className: iconState.mute.button,
		render: /* @__PURE__ */ jsx(Button, {}),
		children: [
			/* @__PURE__ */ jsx(VolumeOffIcon, { className: cn(icon, iconState.mute.volumeOff) }),
			/* @__PURE__ */ jsx(VolumeLowIcon, { className: cn(icon, iconState.mute.volumeLow) }),
			/* @__PURE__ */ jsx(VolumeHighIcon, { className: cn(icon, iconState.mute.volumeHigh) })
		]
	});
	if (volumeUnsupported) return muteButton;
	return /* @__PURE__ */ jsxs(PopoverRoot, {
		openOnHover: true,
		delay: 200,
		closeDelay: 100,
		side: "right",
		children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: muteButton }), /* @__PURE__ */ jsx(PopoverPopup, {
			className: cn(popup.volume),
			children: /* @__PURE__ */ jsxs(VolumeSliderRoot, {
				orientation: "horizontal",
				thumbAlignment: "edge",
				render: /* @__PURE__ */ jsx(SliderRoot, {}),
				children: [/* @__PURE__ */ jsx(SliderTrack$1, {
					render: /* @__PURE__ */ jsx(SliderTrack, {}),
					children: /* @__PURE__ */ jsx(SliderFill$1, { render: /* @__PURE__ */ jsx(SliderFill, {}) })
				}), /* @__PURE__ */ jsx(SliderThumb$1, { render: (props) => /* @__PURE__ */ jsx(SliderThumb, {
					persistent: true,
					...props
				}) })]
			})
		})]
	});
}
function CaptionsTrigger() {
	const t = useTranslator();
	const captions = useCaptionsOptions();
	if (!captions) return null;
	const { disabled } = captions;
	if (!captions.showMenu) return /* @__PURE__ */ jsxs(TooltipRoot, {
		side: "top",
		children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CaptionsButton, {
			className: iconState.captions.button,
			render: /* @__PURE__ */ jsx(Button, {}),
			children: [/* @__PURE__ */ jsx(CaptionsOffIcon, { className: cn(icon, iconState.captions.off) }), /* @__PURE__ */ jsx(CaptionsOnIcon, { className: cn(icon, iconState.captions.on) })]
		}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
			className: cn(popup.tooltip),
			children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
		})]
	});
	return /* @__PURE__ */ jsxs(MenuRoot, {
		side: "top",
		align: "center",
		children: [/* @__PURE__ */ jsx(MenuTrigger, {
			disabled,
			render: /* @__PURE__ */ jsxs(CaptionsButton, {
				className: iconState.captions.button,
				render: /* @__PURE__ */ jsx(Button, {}),
				children: [/* @__PURE__ */ jsx(CaptionsOffIcon, { className: cn(icon, iconState.captions.off) }), /* @__PURE__ */ jsx(CaptionsOnIcon, { className: cn(icon, iconState.captions.on) })]
			})
		}), /* @__PURE__ */ jsx(MenuContent, {
			className: cn(popup.popover, menu.root),
			children: /* @__PURE__ */ jsx(MenuRadioGroup, {
				className: menu.group,
				value: captions.value,
				onValueChange: captions.setValue,
				"aria-label": t(captionsText),
				children: captions.options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
					className: menu.item,
					value: option.value,
					disabled: option.disabled,
					children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
						checked: option.value === captions.value,
						forceMount: true,
						className: menu.indicator,
						children: /* @__PURE__ */ jsx(CheckIcon, { className: cn(icon, menu.icon) })
					})]
				}, option.value))
			})
		})]
	});
}
function MinimalLiveVideoSkinTailwind(props) {
	const { children, className, poster: posterProp, placeholder, style, ...rest } = props;
	const containerStyle = placeholder ? {
		"--media-poster-placeholder": `url(${placeholder})`,
		...style
	} : style;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn(root(false), className),
		style: containerStyle,
		...rest,
		children: [
			children,
			posterProp && /* @__PURE__ */ jsx(Poster, {
				src: isString(posterProp) ? posterProp : void 0,
				render: isRenderProp(posterProp) ? posterProp : void 0,
				className: poster(false)
			}),
			/* @__PURE__ */ jsx(BufferingIndicator, { render: (props) => /* @__PURE__ */ jsx("div", {
				...props,
				className: bufferingIndicator,
				children: /* @__PURE__ */ jsx(SpinnerIcon, { className: icon })
			}) }),
			/* @__PURE__ */ jsx(ErrorDialogRoot, { children: /* @__PURE__ */ jsx(AlertDialogPopup, {
				className: error.root,
				children: /* @__PURE__ */ jsxs("div", {
					className: error.dialog,
					children: [/* @__PURE__ */ jsxs("div", {
						className: error.content,
						children: [/* @__PURE__ */ jsx(ErrorDialogTitle, { className: error.title }), /* @__PURE__ */ jsx(ErrorDialogDescription, { className: error.description })]
					}), /* @__PURE__ */ jsx("div", {
						className: error.actions,
						children: /* @__PURE__ */ jsx(ErrorDialogClose, { className: cn(button.base, button.primary) })
					})]
				})
			}) }),
			/* @__PURE__ */ jsx(ControlsRoot, {
				"data-controls": "",
				className: controls,
				children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: buttonGroupStart,
						children: [
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PlayButton, {
									className: iconState.play.button,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [
										/* @__PURE__ */ jsx(RestartIcon, { className: cn(icon, iconState.play.restart) }),
										/* @__PURE__ */ jsx(PlayIcon, { className: cn(icon, iconState.play.play) }),
										/* @__PURE__ */ jsx(PauseIcon, { className: cn(icon, iconState.play.pause) })
									]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							}),
							/* @__PURE__ */ jsx(LiveButton, { className: cn(button.base, button.subtle, button.live) }),
							/* @__PURE__ */ jsx(VolumePopover, {})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: spacer,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: buttonGroupEnd,
						children: [
							/* @__PURE__ */ jsx(CaptionsTrigger, {}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CastButton, {
									className: iconState.cast.button,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(CastEnterIcon, { className: cn(icon, iconState.cast.enter) }), /* @__PURE__ */ jsx(CastExitIcon, { className: cn(icon, iconState.cast.exit) })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(AirPlayButton, {
									className: iconState.airplay.button,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(AirPlayEnterIcon, { className: cn(icon, iconState.airplay.enter) }), /* @__PURE__ */ jsx(AirPlayExitIcon, { className: cn(icon, iconState.airplay.exit) })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PiPButton, {
									className: iconState.pip.button,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(PipEnterIcon, { className: cn(icon, iconState.pip.off) }), /* @__PURE__ */ jsx(PipExitIcon, { className: cn(icon, iconState.pip.on) })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(FullscreenButton, {
									className: iconState.fullscreen.button,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(FullscreenEnterIcon, { className: cn(icon, iconState.fullscreen.enter) }), /* @__PURE__ */ jsx(FullscreenExitIcon, { className: cn(icon, iconState.fullscreen.exit) })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							})
						]
					})
				] })
			}),
			/* @__PURE__ */ jsx("div", { className: overlay }),
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
				keys: "f",
				action: "toggleFullscreen"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "c",
				action: "toggleSubtitles"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "i",
				action: "togglePictureInPicture"
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
			/* @__PURE__ */ jsx(Gesture, {
				type: "tap",
				action: "togglePaused",
				pointer: "mouse",
				region: "center"
			}),
			/* @__PURE__ */ jsx(Gesture, {
				type: "tap",
				action: "toggleControls",
				pointer: "touch"
			}),
			/* @__PURE__ */ jsx(Gesture, {
				type: "doubletap",
				action: "toggleFullscreen",
				region: "center"
			}),
			/* @__PURE__ */ jsx(StatusAnnouncer, { className: "sr-only" }),
			/* @__PURE__ */ jsxs("div", {
				className: inputFeedback.root,
				children: [
					/* @__PURE__ */ jsx(VolumeIndicatorRoot, {
						className: cn(inputFeedback.island.base, inputFeedback.island.volume, inputFeedback.island.shownVolume),
						children: /* @__PURE__ */ jsxs(VolumeIndicatorFill, {
							"data-feedback-island-content": "",
							className: inputFeedback.island.content,
							children: [
								/* @__PURE__ */ jsx(VolumeHighIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownVolumeHigh) }),
								/* @__PURE__ */ jsx(VolumeLowIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownVolumeLow) }),
								/* @__PURE__ */ jsx(VolumeOffIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownVolumeOff) }),
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: inputFeedback.island.volumeProgress
								}),
								/* @__PURE__ */ jsx(VolumeIndicatorValue, { className: inputFeedback.island.value })
							]
						})
					}),
					/* @__PURE__ */ jsx(StatusIndicatorRoot, {
						actions: TOP_STATUS_ACTIONS,
						className: cn(inputFeedback.island.base, inputFeedback.island.shownStatus),
						children: /* @__PURE__ */ jsxs("div", {
							className: inputFeedback.island.content,
							children: [
								/* @__PURE__ */ jsx(CaptionsOnIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownCaptionsOn) }),
								/* @__PURE__ */ jsx(CaptionsOffIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownCaptionsOff) }),
								/* @__PURE__ */ jsx(FullscreenEnterIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownFullscreenEnter) }),
								/* @__PURE__ */ jsx(FullscreenExitIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownFullscreenExit) }),
								/* @__PURE__ */ jsx(PipEnterIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownPipEnter) }),
								/* @__PURE__ */ jsx(PipExitIcon, { className: cn(inputFeedback.island.icon, inputFeedback.island.shownPipExit) }),
								/* @__PURE__ */ jsx(StatusIndicatorValue, { className: inputFeedback.island.value })
							]
						})
					}),
					/* @__PURE__ */ jsxs(StatusIndicatorRoot, {
						actions: CENTER_STATUS_ACTIONS,
						className: inputFeedback.bubble.base,
						children: [/* @__PURE__ */ jsx(PlayIcon, { className: cn(inputFeedback.bubble.icon, inputFeedback.bubble.shownPlay) }), /* @__PURE__ */ jsx(PauseIcon, { className: cn(inputFeedback.bubble.icon, inputFeedback.bubble.shownPause) })]
					})
				]
			})
		]
	});
}
//#endregion
export { MinimalLiveVideoSkinTailwind };

//# sourceMappingURL=minimal-skin.tailwind.js.map