"use client";
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/volume-indicator/context.tsx
const VolumeIndicatorContext = createContext(null);
function VolumeIndicatorProvider({ value, children }) {
	return /* @__PURE__ */ jsx(VolumeIndicatorContext.Provider, {
		value,
		children
	});
}
function useVolumeIndicatorContext() {
	const ctx = useContext(VolumeIndicatorContext);
	if (!ctx) throw new Error("VolumeIndicator child compounds must be used within a VolumeIndicator.Root");
	return ctx;
}
//#endregion
export { VolumeIndicatorProvider, useVolumeIndicatorContext };

//# sourceMappingURL=context.js.map