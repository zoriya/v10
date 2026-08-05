import { resolveText } from "../../i18n/resolve-text.js";
import { resolveLabel } from "../utils/resolve-label.js";
import { audioText } from "../../../i18n/text/menu.js";
import { createState } from "@videojs/store";
import { defaults } from "@videojs/utils/object";
//#region src/core/ui/audio-track-radio-group/audio-track-radio-group-core.ts
function formatTrackLabel(track) {
	if (track.label) return track.label;
	if (track.language) return track.language;
	if (track.kind) return track.kind;
	return audioText;
}
function getTrackValue(track, index) {
	return track.id || String(index);
}
var AudioTrackRadioGroupCore = class AudioTrackRadioGroupCore {
	static defaultProps = {
		label: "",
		formatTrack: formatTrackLabel,
		disabled: false
	};
	state = createState({
		tracks: [],
		value: "",
		disabled: false,
		availability: "unavailable",
		label: ""
	});
	#props = { ...AudioTrackRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, AudioTrackRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return audioText;
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
		const enabledIndex = media.audioTrackList.findIndex((track) => track.enabled);
		const tracks = media.audioTrackList.map((track, index) => ({
			value: getTrackValue(track, index),
			label: this.getTrackLabel(track)
		}));
		const availability = tracks.length > 1 ? "available" : "unavailable";
		this.state.patch({
			tracks,
			value: enabledIndex === -1 ? "" : getTrackValue(media.audioTrackList[enabledIndex], enabledIndex),
			disabled: this.#props.disabled || availability === "unavailable",
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, value) {
		if (this.#props.disabled) return;
		if (!media.audioTrackList.some((track, index) => getTrackValue(track, index) === value)) return;
		media.selectAudioTrack(value);
	}
	selectValue(media, value) {
		this.select(media, value);
	}
};
//#endregion
export { AudioTrackRadioGroupCore };

//# sourceMappingURL=audio-track-radio-group-core.js.map