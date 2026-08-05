"use client";
import { useTranslator } from "../../i18n/context.js";
import { renderElement } from "../../utils/use-render.js";
import { useInputIndicatorRoot } from "../input-indicators/use-input-indicator-root.js";
import { VolumeIndicatorProvider } from "./context.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { VolumeIndicatorCore, VolumeIndicatorDataAttrs, createInputIndicatorLabels } from "@videojs/core";
//#region src/ui/volume-indicator/volume-indicator-root.tsx
const VolumeIndicatorRoot = forwardRef(function VolumeIndicatorRoot(componentProps, forwardedRef) {
	const { render, className, style, closeDelay, ...elementProps } = componentProps;
	const { elementRef, present, state } = useInputIndicatorRoot(() => new VolumeIndicatorCore(), {
		closeDelay,
		labels: createInputIndicatorLabels(useTranslator())
	}, { replayOnUpdate: false });
	if (!present) return null;
	return /* @__PURE__ */ jsx(VolumeIndicatorProvider, {
		value: { state },
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: VolumeIndicatorDataAttrs,
			ref: [forwardedRef, elementRef],
			props: [elementProps]
		})
	});
});
//#endregion
export { VolumeIndicatorRoot };

//# sourceMappingURL=volume-indicator-root.js.map