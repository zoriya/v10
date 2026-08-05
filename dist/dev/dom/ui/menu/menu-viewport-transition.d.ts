import { MenuViewTransitionState } from "./create-menu-view-transition.js";
//#region src/dom/ui/menu/menu-viewport-transition.d.ts
interface MenuViewportTransitionOptions {
  minWidth?: number;
  availableWidth?: number | string;
}
interface MenuViewportAttrs {
  'data-menu-viewport': '';
}
interface MenuRootViewAttrs {
  'data-menu-root-view': '';
  'data-menu-view': '';
}
declare function getMenuViewportAttrs(): MenuViewportAttrs;
declare function getMenuRootViewAttrs(): MenuRootViewAttrs;
declare function getMenuViewportElement(content: HTMLElement | null): HTMLElement | null;
declare function syncMenuViewRoot(content: HTMLElement | null, hasActiveChildView: boolean, options?: MenuViewportTransitionOptions): void;
declare function observeMenuViewContent(content: HTMLElement, onChange: () => void): () => void;
declare function syncMenuViewTransition(content: HTMLElement | null, view: HTMLElement | null, viewState: MenuViewTransitionState, options?: MenuViewportTransitionOptions): void;
//#endregion
export { MenuRootViewAttrs, MenuViewportAttrs, MenuViewportTransitionOptions, getMenuRootViewAttrs, getMenuViewportAttrs, getMenuViewportElement, observeMenuViewContent, syncMenuViewRoot, syncMenuViewTransition };
//# sourceMappingURL=menu-viewport-transition.d.ts.map