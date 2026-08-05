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
import { SliderFill } from "../../ui/slider/slider-fill.js";
import { SliderThumb } from "../../ui/slider/slider-thumb.js";
import { SliderTrack } from "../../ui/slider/slider-track.js";
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
import AirPlayEnterIcon from "../../icons/dist/react/default/airplay-enter.js";
import AirPlayExitIcon from "../../icons/dist/react/default/airplay-exit.js";
import CaptionsOffIcon from "../../icons/dist/react/default/captions-off.js";
import CaptionsOnIcon from "../../icons/dist/react/default/captions-on.js";
import CastEnterIcon from "../../icons/dist/react/default/cast-enter.js";
import CastExitIcon from "../../icons/dist/react/default/cast-exit.js";
import CheckIcon from "../../icons/dist/react/default/check.js";
import FullscreenEnterIcon from "../../icons/dist/react/default/fullscreen-enter.js";
import FullscreenExitIcon from "../../icons/dist/react/default/fullscreen-exit.js";
import PauseIcon from "../../icons/dist/react/default/pause.js";
import PipEnterIcon from "../../icons/dist/react/default/pip-enter.js";
import PipExitIcon from "../../icons/dist/react/default/pip-exit.js";
import PlayIcon from "../../icons/dist/react/default/play.js";
import RestartIcon from "../../icons/dist/react/default/restart.js";
import SpinnerIcon from "../../icons/dist/react/default/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/default/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/default/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/default/volume-off.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { isString } from "@videojs/utils/predicate";
import { captionsText } from "@videojs/core/i18n/text/menu";
import { cn } from "@videojs/utils/style";
//#region src/presets/live-video/skin.tsx
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
		side: "top",
		children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: muteButton }), /* @__PURE__ */ jsx(PopoverPopup, {
			className: "media-surface media-popover media-popover--volume",
			children: /* @__PURE__ */ jsxs(VolumeSliderRoot, {
				className: "media-slider",
				orientation: "vertical",
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
* Default video skin configured for live playback. Mirrors {@link VideoSkin}
* but omits the time slider and the duration / current-time displays. A
* flexible spacer stretches between the start and end button groups so they
* sit at opposite edges of the control bar.
*/
function CaptionsTrigger() {
	const t = useTranslator();
	const captions = useCaptionsOptions();
	if (!captions) return null;
	const { disabled } = captions;
	if (!captions.showMenu) return /* @__PURE__ */ jsxs(TooltipRoot, {
		side: "top",
		children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CaptionsButton, {
			className: "media-button--captions",
			render: /* @__PURE__ */ jsx(Button, {}),
			children: [/* @__PURE__ */ jsx(CaptionsOffIcon, { className: "media-icon media-icon--captions-off" }), /* @__PURE__ */ jsx(CaptionsOnIcon, { className: "media-icon media-icon--captions-on" })]
		}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
			className: "media-surface media-tooltip",
			children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
		})]
	});
	const { options, setValue, value } = captions;
	return /* @__PURE__ */ jsxs(MenuRoot, {
		side: "top",
		align: "center",
		children: [/* @__PURE__ */ jsx(MenuTrigger, {
			disabled,
			render: /* @__PURE__ */ jsxs(CaptionsButton, {
				className: "media-button--captions",
				render: /* @__PURE__ */ jsx(Button, {}),
				children: [/* @__PURE__ */ jsx(CaptionsOffIcon, { className: "media-icon media-icon--captions-off" }), /* @__PURE__ */ jsx(CaptionsOnIcon, { className: "media-icon media-icon--captions-on" })]
			})
		}), /* @__PURE__ */ jsx(MenuContent, {
			className: "media-surface media-popover media-menu media-menu--captions",
			children: /* @__PURE__ */ jsx(MenuRadioGroup, {
				className: "media-menu__group",
				value,
				onValueChange: setValue,
				"aria-label": t(captionsText),
				children: options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
					className: "media-menu__item",
					value: option.value,
					disabled: option.disabled,
					children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
						checked: option.value === value,
						forceMount: true,
						className: "media-menu__indicator",
						children: /* @__PURE__ */ jsx(CheckIcon, { className: "media-icon" })
					})]
				}, option.value))
			})
		})]
	});
}
function LiveVideoSkin(props) {
	const { children, className, poster, placeholder, style, ...rest } = props;
	const containerStyle = placeholder ? {
		"--media-poster-placeholder": `url(${placeholder})`,
		...style
	} : style;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn("media-default-skin media-default-skin--video", className),
		style: containerStyle,
		...rest,
		children: [
			children,
			poster && /* @__PURE__ */ jsx(Poster, {
				src: isString(poster) ? poster : void 0,
				render: isRenderProp(poster) ? poster : void 0
			}),
			/* @__PURE__ */ jsx(BufferingIndicator, { render: (props) => /* @__PURE__ */ jsx("div", {
				...props,
				className: "media-buffering-indicator",
				children: /* @__PURE__ */ jsx(SpinnerIcon, { className: "media-icon" })
			}) }),
			/* @__PURE__ */ jsx(ErrorDialogRoot, { children: /* @__PURE__ */ jsx(AlertDialogPopup, {
				className: "media-error",
				children: /* @__PURE__ */ jsxs("div", {
					className: "media-error__dialog media-surface",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "media-error__content",
						children: [/* @__PURE__ */ jsx(ErrorDialogTitle, { className: "media-error__title" }), /* @__PURE__ */ jsx(ErrorDialogDescription, { className: "media-error__description" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "media-error__actions",
						children: /* @__PURE__ */ jsx(ErrorDialogClose, { className: "media-button media-button--primary" })
					})]
				})
			}) }),
			/* @__PURE__ */ jsx(ControlsRoot, {
				className: "media-surface media-controls media-controls--root",
				children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs("div", {
					className: "media-surface media-controls media-controls--primary",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "media-button-group",
							children: [/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PlayButton, {
									className: "media-button--play",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [
										/* @__PURE__ */ jsx(RestartIcon, { className: "media-icon media-icon--restart" }),
										/* @__PURE__ */ jsx(PlayIcon, { className: "media-icon media-icon--play" }),
										/* @__PURE__ */ jsx(PauseIcon, { className: "media-icon media-icon--pause" })
									]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-surface media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							}), /* @__PURE__ */ jsx(LiveButton, { className: "media-button media-button--subtle media-button--live" })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "media-time-controls",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "media-button-group",
							children: [
								/* @__PURE__ */ jsx(VolumePopover, {}),
								/* @__PURE__ */ jsx(CaptionsTrigger, {}),
								/* @__PURE__ */ jsxs(TooltipRoot, {
									side: "top",
									children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CastButton, {
										className: "media-button--cast",
										render: /* @__PURE__ */ jsx(Button, {}),
										children: [/* @__PURE__ */ jsx(CastEnterIcon, { className: "media-icon media-icon--cast-enter" }), /* @__PURE__ */ jsx(CastExitIcon, { className: "media-icon media-icon--cast-exit" })]
									}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
										className: "media-surface media-tooltip",
										children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
									})]
								}),
								/* @__PURE__ */ jsxs(TooltipRoot, {
									side: "top",
									children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(AirPlayButton, {
										className: "media-button--airplay",
										render: /* @__PURE__ */ jsx(Button, {}),
										children: [/* @__PURE__ */ jsx(AirPlayEnterIcon, { className: "media-icon media-icon--airplay-enter" }), /* @__PURE__ */ jsx(AirPlayExitIcon, { className: "media-icon media-icon--airplay-exit" })]
									}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
										className: "media-surface media-tooltip",
										children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
									})]
								}),
								/* @__PURE__ */ jsxs(TooltipRoot, {
									side: "top",
									children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PiPButton, {
										className: "media-button--pip",
										render: /* @__PURE__ */ jsx(Button, {}),
										children: [/* @__PURE__ */ jsx(PipEnterIcon, { className: "media-icon media-icon--pip-enter" }), /* @__PURE__ */ jsx(PipExitIcon, { className: "media-icon media-icon--pip-exit" })]
									}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
										className: "media-surface media-tooltip",
										children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
									})]
								}),
								/* @__PURE__ */ jsxs(TooltipRoot, {
									side: "top",
									children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(FullscreenButton, {
										className: "media-button--fullscreen",
										render: /* @__PURE__ */ jsx(Button, {}),
										children: [/* @__PURE__ */ jsx(FullscreenEnterIcon, { className: "media-icon media-icon--fullscreen-enter" }), /* @__PURE__ */ jsx(FullscreenExitIcon, { className: "media-icon media-icon--fullscreen-exit" })]
									}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
										className: "media-surface media-tooltip",
										children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
									})]
								})
							]
						})
					]
				}) })
			}),
			/* @__PURE__ */ jsx("div", { className: "media-overlay" }),
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
			/* @__PURE__ */ jsx(StatusAnnouncer, { className: "media-sr-only" }),
			/* @__PURE__ */ jsxs("div", {
				className: "media-input-feedback",
				children: [
					/* @__PURE__ */ jsx(VolumeIndicatorRoot, {
						className: "media-surface media-input-feedback-island media-input-feedback-island--volume",
						children: /* @__PURE__ */ jsxs(VolumeIndicatorFill, {
							className: "media-input-feedback-island__content",
							children: [
								/* @__PURE__ */ jsx(VolumeHighIcon, { className: "media-icon media-icon--volume-high" }),
								/* @__PURE__ */ jsx(VolumeLowIcon, { className: "media-icon media-icon--volume-low" }),
								/* @__PURE__ */ jsx(VolumeOffIcon, { className: "media-icon media-icon--volume-off" }),
								/* @__PURE__ */ jsx(VolumeIndicatorValue, { className: "media-input-feedback-island__value" })
							]
						})
					}),
					/* @__PURE__ */ jsx(StatusIndicatorRoot, {
						actions: TOP_STATUS_ACTIONS,
						className: "media-surface media-input-feedback-island media-input-feedback-island--status",
						children: /* @__PURE__ */ jsxs("div", {
							className: "media-input-feedback-island__content",
							children: [
								/* @__PURE__ */ jsx(CaptionsOnIcon, { className: "media-icon media-icon--captions-on" }),
								/* @__PURE__ */ jsx(CaptionsOffIcon, { className: "media-icon media-icon--captions-off" }),
								/* @__PURE__ */ jsx(FullscreenEnterIcon, { className: "media-icon media-icon--fullscreen-enter" }),
								/* @__PURE__ */ jsx(FullscreenExitIcon, { className: "media-icon media-icon--fullscreen-exit" }),
								/* @__PURE__ */ jsx(PipEnterIcon, { className: "media-icon media-icon--pip-enter" }),
								/* @__PURE__ */ jsx(PipExitIcon, { className: "media-icon media-icon--pip-exit" }),
								/* @__PURE__ */ jsx(StatusIndicatorValue, { className: "media-input-feedback-island__value" })
							]
						})
					}),
					/* @__PURE__ */ jsxs(StatusIndicatorRoot, {
						actions: CENTER_STATUS_ACTIONS,
						className: "media-input-feedback-bubble",
						children: [/* @__PURE__ */ jsx(PlayIcon, { className: "media-icon media-icon--play" }), /* @__PURE__ */ jsx(PauseIcon, { className: "media-icon media-icon--pause" })]
					})
				]
			})
		]
	});
}
//#endregion
export { LiveVideoSkin };

//# sourceMappingURL=skin.js.map