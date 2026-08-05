"use client";
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/status-indicator/context.tsx
const StatusIndicatorContext = createContext(null);
function StatusIndicatorProvider({ value, children }) {
	return /* @__PURE__ */ jsx(StatusIndicatorContext.Provider, {
		value,
		children
	});
}
function useStatusIndicatorContext() {
	const ctx = useContext(StatusIndicatorContext);
	if (!ctx) throw new Error("StatusIndicator child compounds must be used within a StatusIndicator.Root");
	return ctx;
}
//#endregion
export { StatusIndicatorProvider, useStatusIndicatorContext };

//# sourceMappingURL=context.js.map