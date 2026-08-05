import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { Container } from "../../player/container.js";
import { AlertDialogPopup } from "../../ui/alert-dialog/alert-dialog-popup.js";
import { BufferingIndicator } from "../../ui/buffering-indicator/buffering-indicator.js";
import { ErrorDialogClose } from "../../ui/error-dialog/error-dialog-close.js";
import { ErrorDialogDescription } from "../../ui/error-dialog/error-dialog-description.js";
import { ErrorDialogRoot } from "../../ui/error-dialog/error-dialog-root.js";
import { ErrorDialogTitle } from "../../ui/error-dialog/error-dialog-title.js";
import { Hotkey } from "../../ui/hotkey/hotkey.js";
import { MenuContent } from "../../ui/menu/menu-content.js";
import { usePlaybackRateOptions } from "../../ui/playback-rate/use-playback-rate-options.js";
import { MenuItemIndicator } from "../../ui/menu/menu-item-indicator.js";
import { MenuRadioGroup } from "../../ui/menu/menu-radio-group.js";
import { MenuRadioItem } from "../../ui/menu/menu-radio-item.js";
import { MenuRoot } from "../../ui/menu/menu-root.js";
import { MenuTrigger } from "../../ui/menu/menu-trigger.js";
import { MuteButton } from "../../ui/mute-button/mute-button.js";
import { PlayButton } from "../../ui/play-button/play-button.js";
import { PlaybackRateButton } from "../../ui/playback-rate-button/playback-rate-button.js";
import { PopoverPopup } from "../../ui/popover/popover-popup.js";
import { PopoverRoot } from "../../ui/popover/popover-root.js";
import { PopoverTrigger } from "../../ui/popover/popover-trigger.js";
import { SeekButton } from "../../ui/seek-button/seek-button.js";
import { SliderBuffer } from "../../ui/slider/slider-buffer.js";
import { SliderFill } from "../../ui/slider/slider-fill.js";
import { SliderPreview } from "../../ui/slider/slider-preview.js";
import { SliderThumb } from "../../ui/slider/slider-thumb.js";
import { SliderTrack } from "../../ui/slider/slider-track.js";
import { SliderValue } from "../../ui/slider/slider-value.js";
import { StatusAnnouncer } from "../../ui/status-announcer/status-announcer.js";
import { Value } from "../../ui/time/time-value.js";
import { TimeSliderRoot } from "../../ui/time-slider/time-slider-root.js";
import { TooltipLabel } from "../../ui/tooltip/tooltip-label.js";
import { TooltipShortcut } from "../../ui/tooltip/tooltip-shortcut.js";
import { TooltipPopup } from "../../ui/tooltip/tooltip-popup.js";
import { TooltipProvider } from "../../ui/tooltip/tooltip-provider.js";
import { TooltipRoot } from "../../ui/tooltip/tooltip-root.js";
import { TooltipTrigger } from "../../ui/tooltip/tooltip-trigger.js";
import { VolumeSliderRoot } from "../../ui/volume-slider/volume-slider-root.js";
import CheckIcon from "../../icons/dist/react/default/check.js";
import PauseIcon from "../../icons/dist/react/default/pause.js";
import PlayIcon from "../../icons/dist/react/default/play.js";
import RestartIcon from "../../icons/dist/react/default/restart.js";
import SeekIcon from "../../icons/dist/react/default/seek.js";
import SpinnerIcon from "../../icons/dist/react/default/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/default/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/default/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/default/volume-off.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { playbackRateText } from "@videojs/core/i18n/text/menu";
import { cn } from "@videojs/utils/style";
//#region src/presets/audio/skin.tsx
const SEEK_TIME = 10;
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
		boundary: "viewport",
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
function PlaybackRateRadioGroup() {
	const t = useTranslator();
	const state = usePlaybackRateOptions();
	if (!state) return null;
	const { options, setValue, value } = state;
	return /* @__PURE__ */ jsx(MenuRadioGroup, {
		className: "media-menu__group",
		value,
		onValueChange: setValue,
		"aria-label": t(playbackRateText),
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
	});
}
function PlaybackRateTrigger() {
	const state = usePlaybackRateOptions();
	if (!state) return null;
	return /* @__PURE__ */ jsx(MenuTrigger, {
		disabled: state.disabled,
		render: /* @__PURE__ */ jsx(PlaybackRateButton, {
			className: "media-button--playback-rate",
			render: /* @__PURE__ */ jsx(Button, {})
		})
	});
}
function AudioSkin(props) {
	const { children, className, ...rest } = props;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn("media-default-skin media-default-skin--audio", className),
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
				className: "media-surface media-controls",
				children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "media-button-group",
						children: [
							/* @__PURE__ */ jsxs("span", {
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
										className: "media-surface media-tooltip",
										children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								boundary: "viewport",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx(SeekButton, {
									seconds: -10,
									className: "media-button--seek",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: /* @__PURE__ */ jsxs("span", {
										className: "media-icon__container",
										children: [/* @__PURE__ */ jsx(SeekIcon, { className: "media-icon media-icon--seek media-icon--flipped" }), /* @__PURE__ */ jsx("span", {
											className: "media-icon__label",
											children: SEEK_TIME
										})]
									})
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-surface media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								boundary: "viewport",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx(SeekButton, {
									seconds: SEEK_TIME,
									className: "media-button--seek",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: /* @__PURE__ */ jsxs("span", {
										className: "media-icon__container",
										children: [/* @__PURE__ */ jsx(SeekIcon, { className: "media-icon media-icon--seek" }), /* @__PURE__ */ jsx("span", {
											className: "media-icon__label",
											children: SEEK_TIME
										})]
									})
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-surface media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "media-time-controls",
						children: [
							/* @__PURE__ */ jsx(Value, {
								type: "current",
								className: "media-time"
							}),
							/* @__PURE__ */ jsxs(TimeSliderRoot, {
								className: "media-slider",
								children: [
									/* @__PURE__ */ jsxs(SliderTrack, {
										className: "media-slider__track",
										children: [/* @__PURE__ */ jsx(SliderFill, { className: "media-slider__fill" }), /* @__PURE__ */ jsx(SliderBuffer, { className: "media-slider__buffer" })]
									}),
									/* @__PURE__ */ jsx(SliderThumb, { className: "media-slider__thumb" }),
									/* @__PURE__ */ jsx(SliderPreview, {
										className: "media-slider__preview",
										children: /* @__PURE__ */ jsx(SliderValue, {
											type: "pointer",
											className: "media-slider__value media-time"
										})
									})
								]
							}),
							/* @__PURE__ */ jsx(Value, {
								toggle: true,
								type: "remaining",
								className: "media-time"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "media-button-group",
						children: [/* @__PURE__ */ jsxs(MenuRoot, {
							side: "top",
							align: "center",
							boundary: "viewport",
							children: [/* @__PURE__ */ jsx(PlaybackRateTrigger, {}), /* @__PURE__ */ jsx(MenuContent, {
								className: "media-surface media-popover media-menu media-menu--playback-rate",
								children: /* @__PURE__ */ jsx(PlaybackRateRadioGroup, {})
							})]
						}), /* @__PURE__ */ jsx(VolumePopover, {})]
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
				keys: "ArrowRight",
				action: "seekStep",
				value: 5
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "ArrowLeft",
				action: "seekStep",
				value: -5
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "l",
				action: "seekStep",
				value: 10
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "j",
				action: "seekStep",
				value: -10
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
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "0-9",
				action: "seekToPercent"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "Home",
				action: "seekToPercent",
				value: 0
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "End",
				action: "seekToPercent",
				value: 100
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: ">",
				action: "speedUp"
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "<",
				action: "speedDown"
			}),
			/* @__PURE__ */ jsx(StatusAnnouncer, { className: "media-sr-only" })
		]
	});
}
//#endregion
export { AudioSkin };

//# sourceMappingURL=skin.js.map