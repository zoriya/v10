import { resolveText } from "../../i18n/resolve-text.js";
import { resolveLabel } from "../utils/resolve-label.js";
import { rateText } from "../../../i18n/text/playback.js";
import { createState } from "@videojs/store";
import { defaults } from "@videojs/utils/object";
import { isUndefined } from "@videojs/utils/predicate";
//#region src/core/ui/playback-rate-radio-group/playback-rate-radio-group-core.ts
function formatPlaybackRate(rate) {
	return `${rate}×`;
}
var PlaybackRateRadioGroupCore = class PlaybackRateRadioGroupCore {
	static defaultProps = {
		label: "",
		formatRate: formatPlaybackRate,
		disabled: false
	};
	state = createState({
		rate: 1,
		rates: [],
		disabled: false,
		availability: "unavailable",
		label: ""
	});
	#props = { ...PlaybackRateRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PlaybackRateRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		return rateText;
	}
	getLabelParams(state) {
		if (resolveLabel(this.#props.label, state) !== void 0) return void 0;
		return { rate: state.rate };
	}
	getRateLabel(rate) {
		return this.#props.formatRate(rate);
	}
	getRateValue(rate) {
		return String(rate);
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
		const availability = media.playbackRates.length > 0 ? "available" : "unavailable";
		this.state.patch({
			rate: media.playbackRate,
			rates: media.playbackRates,
			disabled: this.#props.disabled || media.playbackRates.length === 0,
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, rate) {
		if (this.#props.disabled) return;
		if (!media.playbackRates.includes(rate)) return;
		media.setPlaybackRate(rate);
	}
	selectValue(media, value) {
		const rate = media.playbackRates.find((candidate) => this.getRateValue(candidate) === value);
		if (isUndefined(rate)) return;
		this.select(media, rate);
	}
};
//#endregion
export { PlaybackRateRadioGroupCore };

//# sourceMappingURL=playback-rate-radio-group-core.js.map