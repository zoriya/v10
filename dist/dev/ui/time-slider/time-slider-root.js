"use client";
import { useLocale, useTranslator } from "../../i18n/context.js";
import { usePlayer } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { renderElement } from "../../utils/use-render.js";
import { useSlider } from "../hooks/use-slider.js";
import { SliderProvider } from "../slider/context.js";
import { getTimeSliderCSSVars, logMissingFeature, selectBuffer, selectPlayback, selectTime } from "@videojs/core/dom";
import { translateText } from "@videojs/core/i18n";
import { forwardRef, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { TimeSliderCore, TimeSliderDataAttrs } from "@videojs/core";
import { formatTime } from "@videojs/utils/time";
//#region src/ui/time-slider/time-slider-root.tsx
const noopSeek = () => Promise.resolve(0);
const TimeSliderRoot = forwardRef(function TimeSliderRoot(componentProps, forwardedRef) {
	const { render, className, style, label, changeThrottle = TimeSliderCore.defaultProps.changeThrottle, step = TimeSliderCore.defaultProps.step, largeStep = TimeSliderCore.defaultProps.largeStep, orientation, disabled, thumbAlignment, onDragStart, onDragEnd, pauseOnDrag, ...elementProps } = componentProps;
	const time = usePlayer(selectTime);
	const buffer = usePlayer(selectBuffer);
	const playback = usePlayer(selectPlayback);
	const translator = useTranslator();
	const locale = useLocale();
	const [core] = useState(() => new TimeSliderCore());
	core.setProps({
		label,
		step,
		largeStep,
		orientation,
		disabled,
		thumbAlignment,
		pauseOnDrag,
		changeThrottle
	});
	core.setFormatLocale(locale);
	const mediaRef = useLatestRef(time && buffer ? {
		...time,
		...buffer
	} : null);
	const playbackRef = useLatestRef(playback);
	useEffect(() => {
		return () => core.endDrag(playbackRef.current);
	}, [core]);
	const duration = time?.duration ?? 0;
	const { state, cssVars, rootRef, thumbRef, rootProps, rootStyle, thumbProps } = useSlider({
		computeState: (input) => {
			core.setInput(input);
			if (!time || !buffer) core.setMedia({
				currentTime: 0,
				duration: 0,
				seeking: false,
				seek: noopSeek,
				buffered: [],
				seekable: []
			});
			else core.setMedia({
				...time,
				...buffer
			});
			return core.getState();
		},
		getPercent: () => duration > 0 ? (time?.currentTime ?? 0) / duration * 100 : 0,
		getStepPercent: () => core.getStepPercent(),
		getLargeStepPercent: () => core.getLargeStepPercent(),
		orientation,
		disabled,
		changeThrottle,
		adjustPercent: (rawPercent, thumbSize, trackSize) => core.adjustPercentForAlignment(rawPercent, thumbSize, trackSize),
		getCSSVars: getTimeSliderCSSVars,
		onValueCommit: (percent) => {
			const media = mediaRef.current;
			if (media) media.seek(core.rawValueFromPercent(percent));
		},
		onDragStart: () => {
			core.startDrag(playbackRef.current);
			onDragStart?.();
		},
		onDragEnd: () => {
			core.endDrag(playbackRef.current);
			onDragEnd?.();
		}
	});
	if (!time) {
		logMissingFeature("TimeSlider", "time");
		return null;
	}
	return /* @__PURE__ */ jsx(SliderProvider, {
		value: {
			state,
			pointerValue: core.valueFromPercent(state.pointerPercent),
			thumbRef,
			thumbProps,
			stateAttrMap: TimeSliderDataAttrs,
			getAttrs: (sliderState) => {
				const attrs = core.getAttrs(sliderState);
				return {
					...attrs,
					"aria-label": translateText(attrs["aria-label"], translator),
					"aria-valuetext": translateText(attrs["aria-valuetext"], translator, core.getValueTextParams(sliderState))
				};
			},
			formatValue: (value) => formatTime(value, duration)
		},
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: TimeSliderDataAttrs,
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
export { TimeSliderRoot };

//# sourceMappingURL=time-slider-root.js.map