"use client";
import { useContainer } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { createTapGesture } from "@videojs/core/dom";
import { useEffect } from "react";
//#region src/ui/gesture/use-tap-gesture.ts
function useTapGesture(onActivate, options) {
	const { pointer, region, disabled = false, target } = options ?? {};
	const contextContainer = useContainer();
	const container = target?.current ?? contextContainer;
	const onActivateRef = useLatestRef(onActivate);
	useEffect(() => {
		if (!container || disabled) return;
		return createTapGesture(container, (event) => onActivateRef.current(event), {
			pointer,
			region
		});
	}, [
		container,
		disabled,
		pointer,
		region
	]);
}
//#endregion
export { useTapGesture };

//# sourceMappingURL=use-tap-gesture.js.map