import { UIComponentProps } from "../../utils/types.js";
import { TooltipState } from "@videojs/core";
//#region src/ui/tooltip/tooltip-label.d.ts
interface TooltipLabelProps extends UIComponentProps<'span', TooltipState> {}
/** Tooltip body label; defaults to context `content.label` from the linked trigger. */
declare const TooltipLabel: import("react").ForwardRefExoticComponent<Omit<TooltipLabelProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
declare namespace TooltipLabel {
  type Props = TooltipLabelProps;
  type State = TooltipState;
}
//#endregion
export { TooltipLabel, TooltipLabelProps };
//# sourceMappingURL=tooltip-label.d.ts.map