import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { Container } from "../../player/container.js";
import { isRenderProp } from "../../utils/use-render.js";
import { AirPlayButton } from "../../ui/airplay-button/airplay-button.js";
import { AlertDialogPopup } from "../../ui/alert-dialog/alert-dialog-popup.js";
import { useAudioTrackOptions } from "../../ui/audio-track/use-audio-track-options.js";
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
import { MenuBack } from "../../ui/menu/menu-back.js";
import { MenuContent } from "../../ui/menu/menu-content.js";
import { usePlaybackRateOptions } from "../../ui/playback-rate/use-playback-rate-options.js";
import { useQualityOptions } from "../../ui/quality/use-quality-options.js";
import { MenuItemIndicator } from "../../ui/menu/menu-item-indicator.js";
import { MenuItemValue } from "../../ui/menu/menu-item-value.js";
import { MenuRadioGroup } from "../../ui/menu/menu-radio-group.js";
import { MenuRadioItem } from "../../ui/menu/menu-radio-item.js";
import { MenuRoot } from "../../ui/menu/menu-root.js";
import { MenuSeparator } from "../../ui/menu/menu-separator.js";
import { MenuTrigger } from "../../ui/menu/menu-trigger.js";
import { MenuView } from "../../ui/menu/menu-view.js";
import { MuteButton } from "../../ui/mute-button/mute-button.js";
import { PiPButton } from "../../ui/pip-button/pip-button.js";
import { PlayButton } from "../../ui/play-button/play-button.js";
import { PopoverPopup } from "../../ui/popover/popover-popup.js";
import { PopoverRoot } from "../../ui/popover/popover-root.js";
import { PopoverTrigger } from "../../ui/popover/popover-trigger.js";
import { Poster } from "../../ui/poster/poster.js";
import { SeekIndicatorRoot } from "../../ui/seek-indicator/seek-indicator-root.js";
import { SeekIndicatorValue } from "../../ui/seek-indicator/seek-indicator-value.js";
import { SliderBuffer } from "../../ui/slider/slider-buffer.js";
import { SliderFill } from "../../ui/slider/slider-fill.js";
import { SliderPreview } from "../../ui/slider/slider-preview.js";
import { SliderThumb } from "../../ui/slider/slider-thumb.js";
import { SliderThumbnail } from "../../ui/slider/slider-thumbnail.js";
import { SliderTrack } from "../../ui/slider/slider-track.js";
import { SliderValue } from "../../ui/slider/slider-value.js";
import { StatusAnnouncer } from "../../ui/status-announcer/status-announcer.js";
import { StatusIndicatorRoot } from "../../ui/status-indicator/status-indicator-root.js";
import { StatusIndicatorValue } from "../../ui/status-indicator/status-indicator-value.js";
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
import ChevronIcon from "../../icons/dist/react/minimal/chevron.js";
import FullscreenEnterIcon from "../../icons/dist/react/minimal/fullscreen-enter.js";
import FullscreenExitIcon from "../../icons/dist/react/minimal/fullscreen-exit.js";
import GearIcon from "../../icons/dist/react/minimal/gear.js";
import PauseIcon from "../../icons/dist/react/minimal/pause.js";
import PipEnterIcon from "../../icons/dist/react/minimal/pip-enter.js";
import PipExitIcon from "../../icons/dist/react/minimal/pip-exit.js";
import PlayIcon from "../../icons/dist/react/minimal/play.js";
import QualityIcon from "../../icons/dist/react/minimal/quality.js";
import RestartIcon from "../../icons/dist/react/minimal/restart.js";
import SpeechIcon from "../../icons/dist/react/minimal/speech.js";
import SpeedIcon from "../../icons/dist/react/minimal/speed.js";
import SpinnerIcon from "../../icons/dist/react/minimal/spinner.js";
import VolumeHighIcon from "../../icons/dist/react/minimal/volume-high.js";
import VolumeLowIcon from "../../icons/dist/react/minimal/volume-low.js";
import VolumeOffIcon from "../../icons/dist/react/minimal/volume-off.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { isString } from "@videojs/utils/predicate";
import { audioText, captionsText, playbackRateText, qualityText, settingsText, speedText } from "@videojs/core/i18n/text/menu";
import { cn } from "@videojs/utils/style";
//#region src/presets/video/minimal-skin.tsx
const SEEK_TIME = 10;
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
		side: "right",
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
function MenuChevron({ flipped = false }) {
	return /* @__PURE__ */ jsx(ChevronIcon, { className: cn("media-icon media-menu__chevron", flipped ? "media-icon--flipped" : void 0) });
}
function SettingsMenu() {
	const t = useTranslator();
	const playbackRate = usePlaybackRateOptions();
	const quality = useQualityOptions();
	const audioTrack = useAudioTrackOptions();
	const captions = useCaptionsOptions();
	const hasPlaybackRate = playbackRate?.state.availability === "available";
	const hasQuality = quality?.state.availability === "available";
	const hasAudioTrack = audioTrack?.state.availability === "available";
	const hasCaptions = captions?.state.availability === "available";
	if (!hasPlaybackRate && !hasQuality && !hasAudioTrack && !hasCaptions) return null;
	return /* @__PURE__ */ jsxs(MenuRoot, {
		side: "top",
		align: "center",
		children: [/* @__PURE__ */ jsx(MenuTrigger, {
			"aria-label": t(settingsText),
			className: "media-button--settings",
			render: /* @__PURE__ */ jsx(Button, {}),
			children: /* @__PURE__ */ jsx(GearIcon, { className: "media-icon media-icon--settings" })
		}), /* @__PURE__ */ jsx(MenuContent, {
			className: "media-popover media-menu media-menu--settings",
			children: /* @__PURE__ */ jsx(MenuView, {
				className: "media-menu__panel",
				children: /* @__PURE__ */ jsxs("div", {
					className: "media-menu__group",
					children: [
						hasQuality ? /* @__PURE__ */ jsxs(MenuRoot, { children: [/* @__PURE__ */ jsx(MenuTrigger, {
							type: "quality",
							className: "media-menu__item media-menu__item--submenu",
							render: (props) => /* @__PURE__ */ jsxs("div", {
								...props,
								children: [
									/* @__PURE__ */ jsx(QualityIcon, { className: "media-icon" }),
									/* @__PURE__ */ jsx("span", { children: t(qualityText) }),
									/* @__PURE__ */ jsxs("span", {
										className: "media-menu__hint",
										children: [/* @__PURE__ */ jsx(MenuItemValue, { className: "media-menu__hint-label" }), /* @__PURE__ */ jsx(MenuChevron, {})]
									})
								]
							})
						}), /* @__PURE__ */ jsxs(MenuContent, {
							className: "media-menu__panel",
							children: [
								/* @__PURE__ */ jsxs(MenuBack, {
									className: "media-menu__back",
									children: [/* @__PURE__ */ jsx(MenuChevron, { flipped: true }), t(qualityText)]
								}),
								/* @__PURE__ */ jsx(MenuSeparator, { className: "media-menu__separator" }),
								/* @__PURE__ */ jsx(MenuRadioGroup, {
									className: "media-menu__group",
									value: quality.value,
									onValueChange: quality.setValue,
									"aria-label": t(qualityText),
									children: quality.options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
										className: "media-menu__item",
										value: option.value,
										disabled: option.disabled,
										children: [
											/* @__PURE__ */ jsxs("span", { children: [option.label, option.tier ? /* @__PURE__ */ jsx("sup", {
												className: "media-menu__tier",
												children: option.tier
											}) : null] }),
											option.badge ? /* @__PURE__ */ jsx("span", {
												className: "media-badge",
												children: option.badge
											}) : null,
											/* @__PURE__ */ jsx(MenuItemIndicator, {
												checked: option.value === quality.value,
												forceMount: true,
												className: "media-menu__indicator",
												children: /* @__PURE__ */ jsx(CheckIcon, { className: "media-icon" })
											})
										]
									}, option.value))
								})
							]
						})] }) : null,
						hasAudioTrack ? /* @__PURE__ */ jsxs(MenuRoot, { children: [/* @__PURE__ */ jsx(MenuTrigger, {
							type: "audio-track",
							className: "media-menu__item media-menu__item--submenu",
							render: (props) => /* @__PURE__ */ jsxs("div", {
								...props,
								children: [
									/* @__PURE__ */ jsx(SpeechIcon, { className: "media-icon" }),
									/* @__PURE__ */ jsx("span", { children: t(audioText) }),
									/* @__PURE__ */ jsxs("span", {
										className: "media-menu__hint",
										children: [/* @__PURE__ */ jsx(MenuItemValue, { className: "media-menu__hint-label" }), /* @__PURE__ */ jsx(MenuChevron, {})]
									})
								]
							})
						}), /* @__PURE__ */ jsxs(MenuContent, {
							className: "media-menu__panel",
							children: [
								/* @__PURE__ */ jsxs(MenuBack, {
									className: "media-menu__back",
									children: [/* @__PURE__ */ jsx(MenuChevron, { flipped: true }), t(audioText)]
								}),
								/* @__PURE__ */ jsx(MenuSeparator, { className: "media-menu__separator" }),
								/* @__PURE__ */ jsx(MenuRadioGroup, {
									className: "media-menu__group",
									value: audioTrack.value,
									onValueChange: audioTrack.setValue,
									"aria-label": t(audioText),
									children: audioTrack.options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
										className: "media-menu__item",
										value: option.value,
										disabled: option.disabled,
										children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
											checked: option.value === audioTrack.value,
											forceMount: true,
											className: "media-menu__indicator",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "media-icon" })
										})]
									}, option.value))
								})
							]
						})] }) : null,
						hasPlaybackRate ? /* @__PURE__ */ jsxs(MenuRoot, { children: [/* @__PURE__ */ jsx(MenuTrigger, {
							type: "playback-rate",
							className: "media-menu__item media-menu__item--submenu",
							render: (props) => /* @__PURE__ */ jsxs("div", {
								...props,
								children: [
									/* @__PURE__ */ jsx(SpeedIcon, { className: "media-icon" }),
									/* @__PURE__ */ jsx("span", { children: t(speedText) }),
									/* @__PURE__ */ jsxs("span", {
										className: "media-menu__hint",
										children: [/* @__PURE__ */ jsx(MenuItemValue, { className: "media-menu__hint-label" }), /* @__PURE__ */ jsx(MenuChevron, {})]
									})
								]
							})
						}), /* @__PURE__ */ jsxs(MenuContent, {
							className: "media-menu__panel",
							children: [
								/* @__PURE__ */ jsxs(MenuBack, {
									className: "media-menu__back",
									children: [/* @__PURE__ */ jsx(MenuChevron, { flipped: true }), t(speedText)]
								}),
								/* @__PURE__ */ jsx(MenuSeparator, { className: "media-menu__separator" }),
								/* @__PURE__ */ jsx(MenuRadioGroup, {
									className: "media-menu__group",
									value: playbackRate.value,
									onValueChange: playbackRate.setValue,
									"aria-label": t(playbackRateText),
									children: playbackRate.options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
										className: "media-menu__item",
										value: option.value,
										disabled: option.disabled,
										children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
											checked: option.value === playbackRate.value,
											forceMount: true,
											className: "media-menu__indicator",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "media-icon" })
										})]
									}, option.value))
								})
							]
						})] }) : null,
						hasCaptions ? /* @__PURE__ */ jsxs(MenuRoot, { children: [/* @__PURE__ */ jsx(MenuTrigger, {
							type: "captions",
							className: "media-menu__item media-menu__item--submenu",
							render: (props) => /* @__PURE__ */ jsxs("div", {
								...props,
								children: [
									/* @__PURE__ */ jsx(CaptionsOffIcon, { className: "media-icon" }),
									/* @__PURE__ */ jsx("span", { children: t(captionsText) }),
									/* @__PURE__ */ jsxs("span", {
										className: "media-menu__hint",
										children: [/* @__PURE__ */ jsx(MenuItemValue, { className: "media-menu__hint-label" }), /* @__PURE__ */ jsx(MenuChevron, {})]
									})
								]
							})
						}), /* @__PURE__ */ jsxs(MenuContent, {
							className: "media-menu__panel",
							children: [
								/* @__PURE__ */ jsxs(MenuBack, {
									className: "media-menu__back",
									children: [/* @__PURE__ */ jsx(MenuChevron, { flipped: true }), t(captionsText)]
								}),
								/* @__PURE__ */ jsx(MenuSeparator, { className: "media-menu__separator" }),
								/* @__PURE__ */ jsx(MenuRadioGroup, {
									className: "media-menu__group",
									value: captions.value,
									onValueChange: captions.setValue,
									"aria-label": t(captionsText),
									children: captions.options.map((option) => /* @__PURE__ */ jsxs(MenuRadioItem, {
										className: "media-menu__item",
										value: option.value,
										disabled: option.disabled,
										children: [/* @__PURE__ */ jsx("span", { children: option.label }), /* @__PURE__ */ jsx(MenuItemIndicator, {
											checked: option.value === captions.value,
											forceMount: true,
											className: "media-menu__indicator",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "media-icon" })
										})]
									}, option.value))
								})
							]
						})] }) : null
					]
				})
			})
		})]
	});
}
function MinimalVideoSkin(props) {
	const { children, className, poster, placeholder, style, ...rest } = props;
	const containerStyle = placeholder ? {
		"--media-poster-placeholder": `url(${placeholder})`,
		...style
	} : style;
	return /* @__PURE__ */ jsxs(Container, {
		className: cn("media-minimal-skin media-minimal-skin--video", className),
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
					className: "media-error__dialog",
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
				className: "media-controls",
				children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
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
								className: "media-tooltip",
								children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
							})]
						}), /* @__PURE__ */ jsx(VolumePopover, {})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "media-time-controls",
						children: [/* @__PURE__ */ jsxs(Group, {
							className: "media-time-group",
							children: [
								/* @__PURE__ */ jsx(Value, {
									toggle: true,
									type: "current",
									className: "media-time media-time--current"
								}),
								/* @__PURE__ */ jsx(Separator, { className: "media-time-separator" }),
								/* @__PURE__ */ jsx(Value, {
									type: "duration",
									className: "media-time media-time--duration"
								})
							]
						}), /* @__PURE__ */ jsxs(TimeSliderRoot, {
							className: "media-slider",
							children: [
								/* @__PURE__ */ jsxs(SliderTrack, {
									className: "media-slider__track",
									children: [/* @__PURE__ */ jsx(SliderFill, { className: "media-slider__fill" }), /* @__PURE__ */ jsx(SliderBuffer, { className: "media-slider__buffer" })]
								}),
								/* @__PURE__ */ jsx(SliderThumb, { className: "media-slider__thumb" }),
								/* @__PURE__ */ jsxs("div", {
									className: "media-thumbnail media-slider__thumbnail",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "media-thumbnail__image-wrapper",
											children: /* @__PURE__ */ jsx(SliderThumbnail, { className: "media-thumbnail__image" })
										}),
										/* @__PURE__ */ jsx(SliderValue, {
											type: "pointer",
											className: "media-time media-thumbnail__time"
										}),
										/* @__PURE__ */ jsx(SpinnerIcon, { className: "media-thumbnail__spinner media-icon" })
									]
								}),
								/* @__PURE__ */ jsx(SliderPreview, {
									className: "media-slider__preview",
									children: /* @__PURE__ */ jsx(SliderValue, {
										type: "pointer",
										className: "media-time media-slider__value"
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "media-button-group",
						children: [
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CaptionsButton, {
									className: "media-button--captions",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(CaptionsOffIcon, { className: "media-icon media-icon--captions-off" }), /* @__PURE__ */ jsx(CaptionsOnIcon, { className: "media-icon media-icon--captions-on" })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							}),
							/* @__PURE__ */ jsx(SettingsMenu, {}),
							/* @__PURE__ */ jsxs(TooltipRoot, {
								side: "top",
								children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs(CastButton, {
									className: "media-button--cast",
									render: /* @__PURE__ */ jsx(Button, {}),
									children: [/* @__PURE__ */ jsx(CastEnterIcon, { className: "media-icon media-icon--cast-enter" }), /* @__PURE__ */ jsx(CastExitIcon, { className: "media-icon media-icon--cast-exit" })]
								}) }), /* @__PURE__ */ jsxs(TooltipPopup, {
									className: "media-tooltip",
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
									className: "media-tooltip",
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
									className: "media-tooltip",
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
									className: "media-tooltip",
									children: [/* @__PURE__ */ jsx(TooltipLabel, {}), /* @__PURE__ */ jsx(TooltipShortcut, { className: "media-tooltip__kbd" })]
								})]
							})
						]
					})
				] })
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
				keys: "ArrowRight",
				action: "seekStep",
				value: SEEK_TIME / 2
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "ArrowLeft",
				action: "seekStep",
				value: -5
			}),
			/* @__PURE__ */ jsx(Hotkey, {
				keys: "l",
				action: "seekStep",
				value: SEEK_TIME
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
				action: "seekStep",
				value: -10,
				region: "left"
			}),
			/* @__PURE__ */ jsx(Gesture, {
				type: "doubletap",
				action: "toggleFullscreen",
				region: "center"
			}),
			/* @__PURE__ */ jsx(Gesture, {
				type: "doubletap",
				action: "seekStep",
				value: SEEK_TIME,
				region: "right"
			}),
			/* @__PURE__ */ jsx(StatusAnnouncer, { className: "media-sr-only" }),
			/* @__PURE__ */ jsxs("div", {
				className: "media-input-feedback",
				children: [
					/* @__PURE__ */ jsx(VolumeIndicatorRoot, {
						className: "media-input-feedback-island media-input-feedback-island--volume",
						children: /* @__PURE__ */ jsxs(VolumeIndicatorFill, {
							className: "media-input-feedback-island__content",
							children: [
								/* @__PURE__ */ jsx(VolumeHighIcon, { className: "media-icon media-icon--volume-high" }),
								/* @__PURE__ */ jsx(VolumeLowIcon, { className: "media-icon media-icon--volume-low" }),
								/* @__PURE__ */ jsx(VolumeOffIcon, { className: "media-icon media-icon--volume-off" }),
								/* @__PURE__ */ jsx("div", {
									className: "media-input-feedback-island__progress",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx(VolumeIndicatorValue, { className: "media-input-feedback-island__value" })
							]
						})
					}),
					/* @__PURE__ */ jsx(StatusIndicatorRoot, {
						actions: TOP_STATUS_ACTIONS,
						className: "media-input-feedback-island media-input-feedback-island--status",
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
					/* @__PURE__ */ jsxs(SeekIndicatorRoot, {
						className: "media-input-feedback-bubble",
						children: [/* @__PURE__ */ jsx(ChevronIcon, { className: "media-icon media-icon--seek" }), /* @__PURE__ */ jsx(SeekIndicatorValue, { className: "media-time" })]
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
export { MinimalVideoSkin };

//# sourceMappingURL=minimal-skin.js.map