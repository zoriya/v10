"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
//#region src/ui/hooks/use-positioned-state.ts
function usePositionedState(preferredState) {
	const preferredSide = preferredState.side;
	const [position, setPosition] = useState({
		preferred: preferredSide,
		side: preferredSide
	});
	const side = preferredState.open && position.preferred === preferredSide ? position.side : preferredSide;
	const state = useMemo(() => side === preferredSide ? preferredState : {
		...preferredState,
		side
	}, [
		side,
		preferredState,
		preferredSide
	]);
	const setPositionedSide = useCallback((nextSide) => setPosition((prev) => prev.preferred === preferredSide && prev.side === nextSide ? prev : {
		preferred: preferredSide,
		side: nextSide
	}), [preferredSide]);
	useEffect(() => {
		if (!preferredState.open) setPositionedSide(preferredSide);
	}, [
		preferredState.open,
		preferredSide,
		setPositionedSide
	]);
	return {
		state,
		preferredSide,
		setPositionedSide
	};
}
//#endregion
export { usePositionedState };

//# sourceMappingURL=use-positioned-state.js.map