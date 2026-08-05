import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { Container } from "../../player/container.js";
import { AlertDialogPopup } from "../../ui/alert-dialog/alert-dialog-popup.js";
import { BufferingIndicator } from "../../ui/buffering-indicator/buffering-indicator.js";
import { ErrorDialogClose } from "../../ui/error-dialog/error-dialog-close.js";
import { ErrorDialogDescription } from "../../ui/error-dialog/error-dialog-description.js";
import { ErrorDialogRoot } from "../../ui/error-dialog/error-dialog-root.js";
import { ErrorDialogTitle } from "../../ui/error-dialog/error-dialog-title.js";
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
import { SliderBuffer as SliderBuffer$1 } from "../../ui/slider/slider-buffer.js";
import { SliderFill as SliderFill$1 } from "../../ui/slider/slider-fill.js";
import { SliderPreview } from "../../ui/slider/slider-preview.js";
import { SliderThumb as SliderThumb$1 } from "../../ui/slider/slider-thumb.js";
import { SliderTrack as SliderTrack$1 } from "../../ui/slider/slider-track.js";
import { SliderValue } from "../../ui/slider/slider-value.js";
import { Group } from "../../ui/time/time-group.js";
import { Separator } from "../../ui/time/time-separator.js";
import { Value } from "../../ui/time/time-value.js";
import { TimeSliderRoot } from "../../ui/time-slider/time-slider-root.js";
import { TooltipLabel } from "../../ui/tooltip/tooltip-label.js";
import { TooltipShortcut } from "../../ui/tooltip/tooltip-shortcut.js";
import { TooltipPopup } from "../../ui/tooltip/tooltip-popup.js";
import { TooltipProvider } from "../../ui/tooltip/tooltip-provider.js";
import { TooltipRoot } from "../../ui/tooltip/tooltip-root.js";
import { TooltipTrigger } from "../../ui/tooltip/tooltip-trigger.js";
import { VolumeSliderRoot } from "../../ui/volume-slider/volume-slider-root.js";
import CheckIcon from "../../icons/dist/react/minimal/check.js";
import PauseIcon from "../../icons/dist/react/minimal/pause.js";
import PlayIcon from "../../icons/dist/react/minimal/play.js";
import RestartIcon from "../../icons/dist/react/minimal/restart.js";
import SeekIcon from "../../icons/dist/react/minimal/seek.js";
import SpinnerIcon from "../../icons/dist/react/minimal/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/minimal/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/minimal/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/minimal/volume-off.js";
import { iconState } from "../../skins/dist/default/shared/tailwind/icon-state.js";
import { button } from "../../skins/dist/default/minimal/tailwind/components/button.js";
import { buttonGroup } from "../../skins/dist/default/minimal/tailwind/components/button-group.js";
import { icon, iconContainer, iconFlipped } from "../../skins/dist/default/minimal/tailwind/components/icon.js";
import { menu } from "../../skins/dist/default/minimal/tailwind/components/menu.js";
import { playbackRate } from "../../skins/dist/default/minimal/tailwind/components/playback-rate.js";
import { seek } from "../../skins/dist/default/minimal/tailwind/components/seek.js";
import { time } from "../../skins/dist/default/minimal/tailwind/components/time.js";
import { controls, error, playButton, popup, root, slider } from "../../skins/dist/default/minimal/tailwind/audio.tailwind.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { playbackRateText } from "@videojs/core/i18n/text/menu";
import { cn } from "@videojs/utils/style";
//#region src/presets/audio/minimal-skin.tailwind.tsx
const SEEK_TIME = 10;
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
const SliderBuffer = forwardRef(function SliderBuffer(props, ref) {
	return /* @__PURE__ */ jsx(SliderFill, {
		type: "buffer",
		ref,
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
		side: "left",
		boundary: "viewport",
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
function PlaybackRateRadioGroup() {
	const t = useTranslator();
	const state = usePlaybackRateOptions();
	if (!state) return null;
	const { options, setValue, value } = state;
	return /* @__PURE__ */ jsx(MenuRadioGroup, {
		className: menu.group,
		value,
		onValueChange: setValue,
		"aria-label": t(playbackRateText),
		children: options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
			className: menu.item,
			value: option.value,
			disabled: option.disabled,
			children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
				checked: option.value === value,
				forceMount: true,
				className: menu.indicator,
				children: /* @__PURE__ */ jsx(CheckIcon, { className: cn(icon, menu.icon) })
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
			className: playbackRate.button,
			render: /* @__PURE__ */ jsx(Button, {})
		})
	});
}
function MinimalAudioSkinTailwind(props) {
	const { children, className, ...rest } = props;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn(root, className),
		...rest,
		children: [
			children,
			/* @__PURE__ */ jsx(ErrorDialogRoot, { children: /* @__PURE__ */ jsx(AlertDialogPopup, {
				className: error.root,
				children: /* @__PURE__ */ jsxs("div", {
					className: error.dialog,
					children: [/* @__PURE__ */ jsxs("div", {
						className: error.content,
						children: [/* @__PURE__ */ jsx(ErrorDialogTitle, { className: error.title }), /* @__PURE__ */ jsx(ErrorDialogDescription, { className: error.description })]
					}), /* @__PURE__ */ jsx("div", {
						className: error.actions,
						children: /* @__PURE__ */ jsx(ErrorDialogClose, { className: cn(button.base, button.subtle) })
					})]
				})
			}) }),
			/* @__PURE__ */ jsx("div", {
				className: controls,
				children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: buttonGroup,
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: playButton.wrapper,
								children: [/* @__PURE__ */ jsx(BufferingIndicator, { render: (props) => /* @__PURE__ */ jsx("div", {
									...props,
									className: cn(playButton.bufferingRoot, props.className),
									children: /* @__PURE__ */ jsx(SpinnerIcon, { className: icon })
								}) }), /* @__PURE__ */ jsxs(TooltipRoot, {
									side: "top",
									boundary: "viewport",
									children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(PlayButton, {
										className: cn(iconState.play.button, playButton.control),
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
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								boundary: "viewport",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx(SeekButton, {
									seconds: -10,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: /* @__PURE__ */ jsxs("span", {
										className: iconContainer,
										children: [/* @__PURE__ */ jsx(SeekIcon, { className: cn(icon, iconFlipped) }), /* @__PURE__ */ jsx("span", {
											className: cn(seek.label, seek.labelBackward),
											children: SEEK_TIME
										})]
									})
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								boundary: "viewport",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsx(SeekButton, {
									seconds: SEEK_TIME,
									render: /* @__PURE__ */ jsx(Button, {}),
									children: /* @__PURE__ */ jsxs("span", {
										className: iconContainer,
										children: [/* @__PURE__ */ jsx(SeekIcon, { className: icon }), /* @__PURE__ */ jsx("span", {
											className: cn(seek.label, seek.labelForward),
											children: SEEK_TIME
										})]
									})
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: cn(popup.tooltip),
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: popup.tooltipShortcut })]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: time.controls,
						children: [/* @__PURE__ */ jsxs(Group, {
							className: time.group,
							children: [
								/* @__PURE__ */ jsx(Value, {
									toggle: true,
									type: "current",
									className: time.current
								}),
								/* @__PURE__ */ jsx(Separator, { className: time.separator }),
								/* @__PURE__ */ jsx(Value, {
									type: "duration",
									className: time.duration
								})
							]
						}), /* @__PURE__ */ jsxs(TimeSliderRoot, {
							render: /* @__PURE__ */ jsx(SliderRoot, {}),
							children: [
								/* @__PURE__ */ jsxs(SliderTrack$1, {
									render: /* @__PURE__ */ jsx(SliderTrack, {}),
									children: [/* @__PURE__ */ jsx(SliderFill$1, { render: /* @__PURE__ */ jsx(SliderFill, {}) }), /* @__PURE__ */ jsx(SliderBuffer$1, { render: /* @__PURE__ */ jsx(SliderBuffer, {}) })]
								}),
								/* @__PURE__ */ jsx(SliderThumb$1, { render: /* @__PURE__ */ jsx(SliderThumb, {}) }),
								/* @__PURE__ */ jsx(SliderPreview, {
									className: slider.preview,
									children: /* @__PURE__ */ jsx(SliderValue, {
										type: "pointer",
										className: slider.value
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: buttonGroup,
						children: [/* @__PURE__ */ jsx(VolumePopover, {}), /* @__PURE__ */ jsxs(MenuRoot, {
							side: "top",
							align: "center",
							boundary: "viewport",
							children: [/* @__PURE__ */ jsx(PlaybackRateTrigger, {}), /* @__PURE__ */ jsx(MenuContent, {
								className: cn(popup.popover, menu.root),
								children: /* @__PURE__ */ jsx(PlaybackRateRadioGroup, {})
							})]
						})]
					})
				] })
			})
		]
	});
}
//#endregion
export { MinimalAudioSkinTailwind };

//# sourceMappingURL=minimal-skin.tailwind.js.map