import { UIComponentProps } from "../../utils/types.js";
import { PopoverState } from "@videojs/core";
//#region src/ui/popover/popover-arrow.d.ts
interface PopoverArrowProps extends UIComponentProps<'div', PopoverState> {}
/** Decorative arrow pointing from the popup toward the trigger. Hidden from assistive technology. */
declare const PopoverArrow: import("react").ForwardRefExoticComponent<PopoverArrowProps>;
declare namespace PopoverArrow {
  type Props = PopoverArrowProps;
  type State = PopoverState;
}
//#endregion
export { PopoverArrow, PopoverArrowProps };
//# sourceMappingURL=popover-arrow.d.ts.map