import { MediaContainer, PositioningBoundary, TooltipApi } from "@videojs/core/dom";
import { StateAttrMap as StateAttrMap$1, TooltipCore } from "@videojs/core";
//#region src/ui/tooltip/context.d.ts
interface TooltipContent {
  label?: string | undefined;
  shortcut?: string | undefined;
}
interface TooltipContextValue {
  core: TooltipCore;
  tooltip: TooltipApi;
  state: TooltipCore.State;
  preferredSide: TooltipCore.State['side'];
  setPositionedSide: (side: TooltipCore.State['side']) => void;
  stateAttrMap: StateAttrMap$1<TooltipCore.State>;
  anchorName: string;
  popupId: string;
  content: TooltipContent | undefined;
  setContent: (content: TooltipContent | undefined) => void;
  boundary: PositioningBoundary;
  container: MediaContainer | null;
}
declare function useTooltipContext(): TooltipContextValue;
declare function useOptionalTooltipContext(): TooltipContextValue | null;
//#endregion
export { TooltipContent, TooltipContextValue, useOptionalTooltipContext, useTooltipContext };
//# sourceMappingURL=context.d.ts.map