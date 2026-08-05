"use client";
import { renderElement } from "../../utils/use-render.js";
import { useInputIndicatorRoot } from "../input-indicators/use-input-indicator-root.js";
import { SeekIndicatorProvider } from "./context.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { SeekIndicatorCore, SeekIndicatorDataAttrs } from "@videojs/core";
//#region src/ui/seek-indicator/seek-indicator-root.tsx
const SeekIndicatorRoot = forwardRef(function SeekIndicatorRoot(componentProps, forwardedRef) {
	const { render, className, style, closeDelay, ...elementProps } = componentProps;
	const { elementRef, present, state } = useInputIndicatorRoot(() => new SeekIndicatorCore(), { closeDelay });
	if (!present) return null;
	return /* @__PURE__ */ jsx(SeekIndicatorProvider, {
		value: { state },
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: SeekIndicatorDataAttrs,
			ref: [forwardedRef, elementRef],
			props: [elementProps]
		})
	});
});
//#endregion
export { SeekIndicatorRoot };

//# sourceMappingURL=seek-indicator-root.js.map