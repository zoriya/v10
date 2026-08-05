import { MenuChangeDetails, PositioningBoundary } from "@videojs/core/dom";
import { ReactNode } from "react";
import { MenuCore } from "@videojs/core";
//#region src/ui/menu/menu-root.d.ts
interface MenuRootProps extends MenuCore.Props {
  /** Boundary used to constrain the root menu popup size. */
  boundary?: PositioningBoundary;
  /** Called when the menu open state changes (fires immediately, before animations). */
  onOpenChange?: (open: boolean, details: MenuChangeDetails) => void;
  /** Called after open/close animations complete. */
  onOpenChangeComplete?: (open: boolean) => void;
  children?: ReactNode;
}
declare function MenuRoot({ open: controlledOpen, defaultOpen, onOpenChange: onOpenChangeProp, onOpenChangeComplete: onOpenChangeCompleteProp, boundary, children, ...coreProps }: MenuRootProps): ReactNode;
declare namespace MenuRoot {
  type Props = MenuRootProps;
}
//#endregion
export { MenuRoot, MenuRootProps };
//# sourceMappingURL=menu-root.d.ts.map