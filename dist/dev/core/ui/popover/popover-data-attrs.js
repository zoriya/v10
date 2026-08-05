import { TransitionDataAttrs } from "../transition.js";
//#region src/core/ui/popover/popover-data-attrs.ts
const PopoverDataAttrs = {
	/** Present when the popover is open. */
	open: "data-open",
	/** Indicates the rendered side of the popover after collision handling. */
	side: "data-side",
	/** Indicates how the popover is aligned relative to the specified side. */
	align: "data-align",
	...TransitionDataAttrs
};
//#endregion
export { PopoverDataAttrs };

//# sourceMappingURL=popover-data-attrs.js.map