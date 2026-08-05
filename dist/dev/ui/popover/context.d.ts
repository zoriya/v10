import { MediaContainer, PopoverApi, PositioningBoundary } from "@videojs/core/dom";
import { PopoverCore, StateAttrMap as StateAttrMap$1 } from "@videojs/core";
//#region src/ui/popover/context.d.ts
interface PopoverContextValue {
  core: PopoverCore;
  popover: PopoverApi;
  state: PopoverCore.State;
  preferredSide: PopoverCore.State['side'];
  setPositionedSide: (side: PopoverCore.State['side']) => void;
  stateAttrMap: StateAttrMap$1<PopoverCore.State>;
  anchorName: string;
  popupId: string;
  boundary: PositioningBoundary;
  container: MediaContainer | null;
}
declare function usePopoverContext(): PopoverContextValue;
//#endregion
export { PopoverContextValue, usePopoverContext };
//# sourceMappingURL=context.d.ts.map