import { GesturePointerType, GestureRegion } from "@videojs/core/dom";
import { RefObject } from "react";
//#region src/ui/gesture/use-doubletap-gesture.d.ts
interface UseDoubleTapGestureOptions {
  pointer?: GesturePointerType;
  region?: GestureRegion;
  disabled?: boolean;
  target?: RefObject<HTMLElement | null>;
}
declare function useDoubleTapGesture(onActivate: (event: PointerEvent) => void, options?: UseDoubleTapGestureOptions): void;
//#endregion
export { UseDoubleTapGestureOptions, useDoubleTapGesture };
//# sourceMappingURL=use-doubletap-gesture.d.ts.map