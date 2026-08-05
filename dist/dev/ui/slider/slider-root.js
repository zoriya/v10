"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useSlider } from "../hooks/use-slider.js";
import { SliderProvider } from "./context.js";
import { getSliderCSSVars } from "@videojs/core/dom";
import { translateText } from "@videojs/core/i18n";
import { forwardRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { SliderCore, SliderDataAttrs } from "@videojs/core";
//#region src/ui/slider/slider-root.tsx
const SliderRoot = forwardRef(function SliderRoot(componentProps, forwardedRef) {
	const { render, className, style, label, min, max, step, largeStep, orientation, disabled, thumbAlignment, value = 0, onValueChange, onValueCommit, onDragStart, onDragEnd, ...elementProps } = componentProps;
	const [core] = useState(() => new SliderCore());
	const translator = useTranslator();
	core.setProps({
		label,
		min,
		max,
		step,
		largeStep,
		orientation,
		disabled,
		thumbAlignment
	});
	const { state, cssVars, rootRef, thumbRef: sliderThumbRef, rootProps, rootStyle, thumbProps } = useSlider({
		computeState: (input) => {
			core.setInput(input);
			return core.getSliderState(value);
		},
		getPercent: () => core.percentFromValue(value),
		getStepPercent: () => core.getStepPercent(),
		getLargeStepPercent: () => core.getLargeStepPercent(),
		orientation,
		disabled,
		adjustPercent: (rawPercent, thumbSize, trackSize) => core.adjustPercentForAlignment(rawPercent, thumbSize, trackSize),
		getCSSVars: getSliderCSSVars,
		onValueChange: (percent) => onValueChange?.(core.valueFromPercent(percent)),
		onValueCommit: (percent) => onValueCommit?.(core.valueFromPercent(percent)),
		onDragStart,
		onDragEnd
	});
	return /* @__PURE__ */ jsx(SliderProvider, {
		value: {
			state,
			pointerValue: core.valueFromPercent(state.pointerPercent),
			thumbRef: sliderThumbRef,
			thumbProps,
			stateAttrMap: SliderDataAttrs,
			getAttrs: (sliderState) => {
				const attrs = core.getAttrs(sliderState);
				return {
					...attrs,
					"aria-label": translateText(attrs["aria-label"], translator)
				};
			},
			formatValue: void 0
		},
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: SliderDataAttrs,
			ref: [forwardedRef, rootRef],
			props: [
				{ style: {
					...cssVars,
					...rootStyle
				} },
				rootProps,
				elementProps
			]
		})
	});
});
//#endregion
export { SliderRoot };

//# sourceMappingURL=slider-root.js.map