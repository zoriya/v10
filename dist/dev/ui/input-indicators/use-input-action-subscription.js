"use client";
import { useContainer, usePlayer } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { getMediaSnapshot, subscribeToInputActions } from "@videojs/core/dom";
import { useEffect } from "react";
//#region src/ui/input-indicators/use-input-action-subscription.ts
function useInputActionSubscription(callback) {
	const container = useContainer();
	const store = usePlayer();
	const callbackRef = useLatestRef(callback);
	const storeRef = useLatestRef(store);
	useEffect(() => {
		if (!container) return;
		return subscribeToInputActions(container, (event) => {
			callbackRef.current(event, getMediaSnapshot(storeRef.current));
		});
	}, [container]);
}
//#endregion
export { useInputActionSubscription };

//# sourceMappingURL=use-input-action-subscription.js.map