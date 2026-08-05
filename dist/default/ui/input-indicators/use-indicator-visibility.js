"use client";
import { useContainer } from "../../player/context.js";
import { useLatestRef } from "../../utils/use-latest-ref.js";
import { getIndicatorVisibilityCoordinator } from "@videojs/core/dom";
import { useCallback, useEffect, useRef, useState } from "react";
//#region src/ui/input-indicators/use-indicator-visibility.ts
function useIndicatorVisibility(close) {
	const container = useContainer();
	const closeRef = useLatestRef(close);
	const coordinatorRef = useRef(null);
	const [handle] = useState(() => ({ close: () => closeRef.current() }));
	useEffect(() => {
		if (!container) return;
		const coordinator = getIndicatorVisibilityCoordinator(container);
		coordinatorRef.current = coordinator;
		return coordinator.register(handle);
	}, [container, handle]);
	return useCallback(() => {
		coordinatorRef.current?.show(handle);
	}, [handle]);
}
//#endregion
export { useIndicatorVisibility };

//# sourceMappingURL=use-indicator-visibility.js.map