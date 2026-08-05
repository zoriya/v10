import { GesturePointerType, GestureRegion } from "@videojs/core/dom";
import { RefObject } from "react";
//#region src/ui/gesture/use-tap-gesture.d.ts
interface UseTapGestureOptions {
  pointer?: GesturePointerType;
  region?: GestureRegion;
  disabled?: boolean;
  target?: RefObject<HTMLElement | null>;
}
declare function useTapGesture(onActivate: (event: PointerEvent) => void, options?: UseTapGestureOptions): void;
//#endregion
export { UseTapGestureOptions, useTapGesture };
//# sourceMappingURL=use-tap-gesture.d.ts.map