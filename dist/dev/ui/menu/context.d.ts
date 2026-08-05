import { MediaContainer, MenuApi, PositioningBoundary } from "@videojs/core/dom";
import { MenuCore, MenuState, StateAttrMap as StateAttrMap$1 } from "@videojs/core";
//#region src/ui/menu/context.d.ts
interface MenuContextValue {
  core: MenuCore;
  menu: MenuApi;
  state: MenuState;
  preferredSide: MenuState['side'];
  setPositionedSide: (side: MenuState['side']) => void;
  stateAttrMap: StateAttrMap$1<MenuState>;
  contentId: string;
  anchorName: string;
  boundary: PositioningBoundary;
  container: MediaContainer | null;
  /** ID of the currently visible submenu, or null when at root view. */
  activeSubMenuId: string | null;
  /** Triggerer ID of the active submenu entry (for focus restoration on pop). */
  activeSubMenuTriggerId: string | null;
  /** Direction of the most recent navigation. */
  navigationDirection: 'forward' | 'back';
  /** Push a submenu onto the navigation stack. */
  push: (menuId: string, triggerId: string) => void;
  /** Pop the current submenu from the navigation stack. */
  pop: () => void;
}
declare function useMenuContext(): MenuContextValue;
declare function useOptionalMenuContext(): MenuContextValue | null;
//#endregion
export { MenuContextValue, useMenuContext, useOptionalMenuContext };
//# sourceMappingURL=context.d.ts.map