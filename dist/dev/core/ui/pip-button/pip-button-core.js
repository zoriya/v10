import { resolveText } from "../../i18n/resolve-text.js";
import { resolveLabel } from "../utils/resolve-label.js";
import { enterText, exitText } from "../../../i18n/text/pip.js";
import { createState } from "@videojs/store";
import { defaults } from "@videojs/utils/object";
//#region src/core/ui/pip-button/pip-button-core.ts
var PiPButtonCore = class PiPButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		pip: false,
		availability: "unavailable",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...PiPButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PiPButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.pip ? exitText : enterText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.pipAvailability;
		this.state.patch({
			pip: media.pip,
			availability,
			disabled: this.#props.disabled || availability !== "available",
			hidden: availability !== "available"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		return media.pip ? media.exitPictureInPicture() : media.requestPictureInPicture();
	}
};
//#endregion
export { PiPButtonCore };

//# sourceMappingURL=pip-button-core.js.map