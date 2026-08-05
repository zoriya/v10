"use client";
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/seek-indicator/context.tsx
const SeekIndicatorContext = createContext(null);
function SeekIndicatorProvider({ value, children }) {
	return /* @__PURE__ */ jsx(SeekIndicatorContext.Provider, {
		value,
		children
	});
}
function useSeekIndicatorContext() {
	const ctx = useContext(SeekIndicatorContext);
	if (!ctx) throw new Error("SeekIndicator child compounds must be used within a SeekIndicator.Root");
	return ctx;
}
//#endregion
export { SeekIndicatorProvider, useSeekIndicatorContext };

//# sourceMappingURL=context.js.map