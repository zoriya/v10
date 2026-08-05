import { resolveText } from "../../i18n/resolve-text.js";
import { resolveLabel } from "../utils/resolve-label.js";
import { captionsText, subtitlesText } from "../../../i18n/text/menu.js";
import { disableText, enableText } from "../../../i18n/text/captions.js";
import { createState } from "@videojs/store";
import { isCaptionOrSubtitleTrack } from "@videojs/utils/dom";
import { defaults } from "@videojs/utils/object";
//#region src/core/ui/captions-radio-group/captions-radio-group-core.ts
const CAPTIONS_OFF_VALUE = "off";
function formatTrackLabel(track) {
	if (track.label) return track.label;
	if (track.language) return track.language;
	return track.kind === "captions" ? captionsText : subtitlesText;
}
function sortCaptionTracks(a, b) {
	return a.kind > b.kind ? 1 : a.kind < b.kind ? -1 : 0;
}
function getCaptionTracks(textTrackList) {
	return textTrackList.filter(isCaptionOrSubtitleTrack).sort(sortCaptionTracks);
}
var CaptionsRadioGroupCore = class CaptionsRadioGroupCore {
	static defaultProps = {
		label: "",
		formatTrack: formatTrackLabel,
		disabled: false
	};
	state = createState({
		tracks: [],
		value: "off",
		subtitlesShowing: false,
		disabled: false,
		availability: "unavailable",
		label: ""
	});
	#props = { ...CaptionsRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, CaptionsRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.subtitlesShowing ? disableText : enableText;
	}
	getTrackLabel(track) {
		return this.#props.formatTrack(track);
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const captionTracks = getCaptionTracks(media.textTrackList);
		const showingIndex = captionTracks.findIndex((track) => track.mode === "showing");
		const tracks = captionTracks.map((track, index) => ({
			value: track.id || String(index),
			label: this.getTrackLabel(track)
		}));
		const availability = captionTracks.length > 0 ? "available" : "unavailable";
		this.state.patch({
			tracks,
			value: showingIndex === -1 ? "off" : captionTracks[showingIndex].id || String(showingIndex),
			subtitlesShowing: media.subtitlesShowing,
			disabled: this.#props.disabled || captionTracks.length === 0,
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, value) {
		if (this.#props.disabled) return;
		const captionTracks = getCaptionTracks(media.textTrackList);
		if (!captionTracks.length) return;
		if (value === "off") {
			media.selectSubtitlesTrack("off");
			return;
		}
		if (!captionTracks.some((track, index) => (track.id || String(index)) === value)) return;
		media.selectSubtitlesTrack(value);
	}
	selectValue(media, value) {
		this.select(media, value);
	}
};
//#endregion
export { CAPTIONS_OFF_VALUE, CaptionsRadioGroupCore };

//# sourceMappingURL=captions-radio-group-core.js.map