import { TransitionDataAttrs } from "../transition.js";
//#region src/core/ui/tooltip/tooltip-data-attrs.ts
const TooltipDataAttrs = {
	/** Present when the tooltip is open. */
	open: "data-open",
	/** Indicates the rendered side of the tooltip after collision handling. */
	side: "data-side",
	/** Indicates how the tooltip is aligned relative to the specified side. */
	align: "data-align",
	...TransitionDataAttrs
};
//#endregion
export { TooltipDataAttrs };

//# sourceMappingURL=tooltip-data-attrs.js.map