import { UIComponentProps } from "../../utils/types.js";
import { TimeCore } from "@videojs/core";
//#region src/ui/time/time-value.d.ts
interface ValueProps extends Omit<UIComponentProps<'time', TimeCore.State>, 'children'>, TimeCore.Props {}
/**
 * Displays a formatted time value (current, duration, or remaining).
 *
 * @example
 * ```tsx
 * <Time.Value />
 * <Time.Value type="duration" />
 * <Time.Value type="remaining" negativeSign="−" />
 * ```
 */
declare const Value: import("react").ForwardRefExoticComponent<Omit<ValueProps, "ref"> & import("react").RefAttributes<HTMLTimeElement>>;
declare namespace Value {
  type Props = ValueProps;
  type State = TimeCore.State;
}
//#endregion
export { Value, ValueProps };
//# sourceMappingURL=time-value.d.ts.map