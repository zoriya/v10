"use client";
import { useContainer, usePlayer } from "../../player/context.js";
import { createDoubleTapGesture, createTapGesture, resolveGestureAction } from "@videojs/core/dom";
import { useEffect } from "react";
//#region src/ui/gesture/gesture.tsx
function Gesture({ type, action, value, pointer, region, disabled }) {
	const store = usePlayer();
	const container = useContainer();
	useEffect(() => {
		if (!container || !type || !action || disabled) return;
		const resolver = resolveGestureAction(action);
		if (!resolver) return;
		const onActivate = (event) => {
			resolver({
				store,
				value,
				event
			});
		};
		const options = {
			pointer,
			region,
			action,
			value
		};
		if (type === "doubletap") return createDoubleTapGesture(container, onActivate, options);
		return createTapGesture(container, onActivate, options);
	}, [
		container,
		store,
		type,
		action,
		value,
		pointer,
		region,
		disabled
	]);
	return null;
}
/** @deprecated Use `Gesture` instead. */
const MediaGesture = Gesture;
//#endregion
export { Gesture, MediaGesture };

//# sourceMappingURL=gesture.js.map