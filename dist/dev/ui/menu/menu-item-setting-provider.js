"use client";
import { useTranslator } from "../../i18n/context.js";
import { MenuItemSettingContextProvider } from "./context.js";
import { useAudioTrackOptions } from "../audio-track/use-audio-track-options.js";
import { useCaptionsOptions } from "../captions-radio-group/use-captions-options.js";
import { usePlaybackRateOptions } from "../playback-rate/use-playback-rate-options.js";
import { useQualityOptions } from "../quality/use-quality-options.js";
import { translateText } from "@videojs/core/i18n";
import { jsx } from "react/jsx-runtime";
import { CAPTIONS_OFF_VALUE } from "@videojs/core";
import { autoText, offText } from "@videojs/core/i18n/text/menu";
//#region src/ui/menu/menu-item-setting-provider.tsx
function PlaybackRateMenuItemSettingProvider({ children }) {
	const playbackRate = usePlaybackRateOptions();
	if (!playbackRate) return children;
	const { state, options, value } = playbackRate;
	return /* @__PURE__ */ jsx(MenuItemSettingContextProvider, {
		value: {
			type: "playback-rate",
			label: options.find((option) => option.value === value)?.label ?? "",
			availability: state.availability
		},
		children
	});
}
function CaptionsMenuItemSettingProvider({ children }) {
	const captions = useCaptionsOptions();
	const t = useTranslator();
	if (!captions) return children;
	const { state, options, value } = captions;
	return /* @__PURE__ */ jsx(MenuItemSettingContextProvider, {
		value: {
			type: "captions",
			label: value === CAPTIONS_OFF_VALUE ? translateText(offText, t) : options.find((option) => option.value === value)?.label ?? translateText(offText, t),
			availability: state.availability
		},
		children
	});
}
function QualityMenuItemSettingProvider({ children }) {
	const quality = useQualityOptions();
	const t = useTranslator();
	if (!quality) return children;
	const { state, options, value } = quality;
	return /* @__PURE__ */ jsx(MenuItemSettingContextProvider, {
		value: {
			type: "quality",
			label: options.find((option) => option.value === value)?.label ?? translateText(autoText, t),
			availability: state.availability
		},
		children
	});
}
function AudioTrackMenuItemSettingProvider({ children }) {
	const audioTrack = useAudioTrackOptions();
	if (!audioTrack) return children;
	const { state, options, value } = audioTrack;
	return /* @__PURE__ */ jsx(MenuItemSettingContextProvider, {
		value: {
			type: "audio-track",
			label: options.find((option) => option.value === value)?.label ?? "",
			availability: state.availability
		},
		children
	});
}
function MenuItemSettingProvider({ type, children }) {
	if (type === "playback-rate") return /* @__PURE__ */ jsx(PlaybackRateMenuItemSettingProvider, { children });
	if (type === "quality") return /* @__PURE__ */ jsx(QualityMenuItemSettingProvider, { children });
	if (type === "audio-track") return /* @__PURE__ */ jsx(AudioTrackMenuItemSettingProvider, { children });
	if (type === "captions") return /* @__PURE__ */ jsx(CaptionsMenuItemSettingProvider, { children });
	return children;
}
//#endregion
export { MenuItemSettingProvider };

//# sourceMappingURL=menu-item-setting-provider.js.map