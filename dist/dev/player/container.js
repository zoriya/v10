"use client";
import { useTranslator } from "../i18n/context.js";
import { useComposedRefs } from "../utils/use-composed-refs.js";
import { useContainerAttach } from "./context.js";
import { DEFAULT_CONTAINER_ROLE, DEFAULT_CONTAINER_TAB_INDEX, focusContainer } from "@videojs/core/dom";
import { forwardRef, useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
import { labelText } from "@videojs/core/i18n/text/container";
//#region src/player/container.tsx
const Container = forwardRef(function Container({ children, tabIndex = DEFAULT_CONTAINER_TAB_INDEX, role = DEFAULT_CONTAINER_ROLE, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
	const setContainer = useContainerAttach();
	const translator = useTranslator();
	const internalRef = useRef(null);
	const composedRef = useComposedRefs(ref, internalRef);
	useEffect(() => {
		setContainer?.(internalRef.current);
		return () => setContainer?.(null);
	}, [setContainer]);
	const handlePointerUp = (event) => {
		props.onPointerUp?.(event);
		const el = internalRef.current;
		if (!el) return;
		focusContainer(el);
	};
	return /* @__PURE__ */ jsx("div", {
		ref: composedRef,
		role,
		tabIndex,
		...ariaLabel !== void 0 || ariaLabelledBy !== void 0 ? {
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy
		} : { "aria-label": translator(labelText) },
		...props,
		onPointerUp: handlePointerUp,
		children
	});
});
//#endregion
export { Container };

//# sourceMappingURL=container.js.map