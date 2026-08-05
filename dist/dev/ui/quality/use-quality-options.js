"use client";
import { useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { logMissingFeature, selectQuality } from "@videojs/core/dom";
import { translateText } from "@videojs/core/i18n";
import { useCallback, useState } from "react";
import { QUALITY_AUTO_VALUE, QualityRadioGroupCore } from "@videojs/core";
//#region src/ui/quality/use-quality-options.ts
/**
* Create quality menu options (including an `Auto` option) from the player
* video rendition state. Returns `null` when the quality feature is not
* configured.
*
* @param props - Optional `label`, `formatRendition`, and `disabled` overrides.
*/
function useQualityOptions(props) {
	"use no memo";
	const media = usePlayer(selectQuality);
	const t = useTranslator();
	const [core] = useState(() => new QualityRadioGroupCore());
	core.setProps(props ?? {});
	const setValue = useCallback((value) => core.selectValue(media, value), [core, media]);
	if (!media) {
		logMissingFeature("useQualityOptions", selectQuality.displayName ?? "quality");
		return null;
	}
	core.setMedia(media);
	const state = core.getState();
	return {
		state,
		value: state.value,
		options: [{
			value: QUALITY_AUTO_VALUE,
			label: translateText(state.autoLabel, t, state.autoLabelParams),
			disabled: state.disabled
		}, ...state.renditions.map((rendition) => ({
			value: rendition.value,
			label: translateText(rendition.label, t),
			...rendition.tier && { tier: rendition.tier },
			...rendition.badge && { badge: rendition.badge },
			disabled: state.disabled
		}))],
		disabled: state.disabled,
		setValue
	};
}
//#endregion
export { useQualityOptions };

//# sourceMappingURL=use-quality-options.js.map