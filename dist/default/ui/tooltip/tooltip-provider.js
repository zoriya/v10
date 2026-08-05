"use client";
import { TooltipGroupContextProvider } from "./group-context.js";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
import { TooltipGroupCore } from "@videojs/core";
//#region src/ui/tooltip/tooltip-provider.tsx
function TooltipProvider({ delay, closeDelay, timeout, children }) {
	const [group] = useState(() => new TooltipGroupCore({
		delay,
		closeDelay,
		timeout
	}));
	group.setProps({
		delay,
		closeDelay,
		timeout
	});
	return /* @__PURE__ */ jsx(TooltipGroupContextProvider, {
		value: { group },
		children
	});
}
//#endregion
export { TooltipProvider };

//# sourceMappingURL=tooltip-provider.js.map