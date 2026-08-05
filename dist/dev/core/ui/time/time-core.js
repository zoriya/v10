import { resolveLabel } from "../utils/resolve-label.js";
import { currentText, durationText, remainingText, showDurationText, showElapsedText, showRemainingText } from "../../../i18n/text/time.js";
import { defaults } from "@videojs/utils/object";
import { formatTime, formatTimeAsPhrase, secondsToIsoDuration } from "@videojs/utils/time";
//#region src/core/ui/time/time-core.ts
const TOGGLE_LABELS = {
	current: showElapsedText,
	duration: showDurationText,
	remaining: showRemainingText
};
const DEFAULT_LABELS = {
	current: currentText,
	duration: durationText,
	remaining: remainingText
};
var TimeCore = class TimeCore {
	static defaultProps = {
		type: "current",
		negativeSign: "-",
		label: "",
		toggle: false
	};
	#props = { ...TimeCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, TimeCore.defaultProps);
	}
	setMedia(media) {
		this.#media = media;
	}
	#getSeconds() {
		const media = this.#media;
		const { type } = this.#props;
		switch (type) {
			case "current": return media.currentTime;
			case "duration": return media.duration;
			case "remaining": return media.currentTime - media.duration;
			default: return 0;
		}
	}
	#getText() {
		const media = this.#media;
		const seconds = this.#getSeconds();
		return formatTime(Math.abs(seconds), media.duration);
	}
	#getPhrase() {
		const { type } = this.#props;
		const seconds = this.#getSeconds();
		if (type === "remaining") return formatTimeAsPhrase(seconds < 0 ? seconds : -Math.abs(seconds));
		return formatTimeAsPhrase(seconds);
	}
	#getDatetime() {
		const seconds = this.#getSeconds();
		return secondsToIsoDuration(Math.abs(seconds));
	}
	#getToggleType(type, currentType) {
		if (type === "current") return currentType === "remaining" ? "current" : "remaining";
		return currentType === "duration" ? "remaining" : "duration";
	}
	getLabel(state, type = this.#props.type) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		if (!this.#props.toggle) return DEFAULT_LABELS[this.#props.type];
		const toggleType = this.#getToggleType(type, state.type);
		return TOGGLE_LABELS[toggleType];
	}
	getLabelParams(state) {
		return resolveLabel(this.#props.label, state) === void 0 && this.#props.toggle ? { duration: state.phrase } : void 0;
	}
	getAttrs(state, type = this.#props.type) {
		return {
			"aria-label": this.getLabel(state, type),
			role: this.#props.toggle ? "button" : void 0,
			tabIndex: this.#props.toggle ? 0 : void 0
		};
	}
	getState() {
		const seconds = this.#getSeconds();
		return {
			type: this.#props.type,
			seconds,
			negative: this.#props.type === "remaining" && seconds < 0,
			text: this.#getText(),
			phrase: this.#getPhrase(),
			datetime: this.#getDatetime()
		};
	}
};
//#endregion
export { TimeCore };

//# sourceMappingURL=time-core.js.map