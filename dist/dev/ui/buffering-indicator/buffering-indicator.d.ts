import { UIComponentProps } from "../../utils/types.js";
import { BufferingIndicatorCore } from "@videojs/core";
//#region src/ui/buffering-indicator/buffering-indicator.d.ts
interface BufferingIndicatorProps extends UIComponentProps<'div', BufferingIndicatorCore.State>, BufferingIndicatorCore.Props {}
/**
 * Displays a buffering indicator when media is waiting for data.
 *
 * Visibility is delayed (default 500ms) to avoid flashing on quick buffers.
 *
 * @example
 * ```tsx
 * <BufferingIndicator />
 *
 * <BufferingIndicator delay={1000} />
 *
 * <BufferingIndicator
 *   render={(props, state) => (
 *     <div {...props}>{state.visible && <Spinner />}</div>
 *   )}
 * />
 * ```
 */
declare const BufferingIndicator: import("react").ForwardRefExoticComponent<Omit<BufferingIndicatorProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare namespace BufferingIndicator {
  type Props = BufferingIndicatorProps;
  type State = BufferingIndicatorCore.State;
}
//#endregion
export { BufferingIndicator, BufferingIndicatorProps };
//# sourceMappingURL=buffering-indicator.d.ts.map