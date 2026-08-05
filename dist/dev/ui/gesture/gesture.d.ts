import { GestureActionName, GesturePointerType, GestureRegion } from "@videojs/core/dom";
import { ReactNode } from "react";
//#region src/ui/gesture/gesture.d.ts
interface GestureProps {
  type: 'tap' | 'doubletap' | (string & {});
  action: GestureActionName | (string & {});
  value?: number;
  pointer?: GesturePointerType;
  region?: GestureRegion;
  disabled?: boolean;
}
declare function Gesture({ type, action, value, pointer, region, disabled }: GestureProps): ReactNode;
declare namespace Gesture {
  type Props = GestureProps;
}
/** @deprecated Use `GestureProps` instead. */
type MediaGestureProps = GestureProps;
/** @deprecated Use `Gesture` instead. */
declare const MediaGesture: typeof Gesture;
//#endregion
export { Gesture, GestureProps, MediaGesture, MediaGestureProps };
//# sourceMappingURL=gesture.d.ts.map