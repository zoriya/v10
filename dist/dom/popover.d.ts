//#region src/dom/popover.d.ts
type PositionSide = 'top' | 'bottom' | 'left' | 'right';
interface PositionSideOptions {
  side: PositionSide;
}
interface PositionSideOffsets {
  sideOffset: number;
  boundaryOffset?: number;
}
/** Resolve the preferred side against a positioning boundary. */
declare function getPositionedSide(triggerRect: DOMRect, positionedRect: DOMRect, boundaryRect: DOMRect, opts: PositionSideOptions, offsets?: PositionSideOffsets): PositionSide;
declare function tryShowPopover(el: HTMLElement | null): void;
declare function tryHidePopover(el: HTMLElement | null): void;
//#endregion
export { PositionSide, PositionSideOffsets, PositionSideOptions, getPositionedSide, tryHidePopover, tryShowPopover };
//# sourceMappingURL=popover.d.ts.map