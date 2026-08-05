import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/minimal/tailwind/components/controls.js
const controls = cn("peer/controls", "@container/media-controls", "[--media-popover-side-offset:calc(var(--spacing)*(var(--base-side-offset,0)+var(--controls-padding,1)))]", "[--media-tooltip-side-offset:var(--media-popover-side-offset)]", "[--media-popover-boundary-offset:calc(var(--spacing)*(var(--base-boundary-offset,0)+var(--controls-padding,1)))]", "[--media-tooltip-boundary-offset:var(--media-popover-boundary-offset)]", "[padding:calc(var(--spacing)*var(--controls-padding,1))] flex items-center", "bg-(--media-controls-background-color)", "[backdrop-filter:var(--media-controls-backdrop-filter)]", "text-shadow-2xs text-shadow-(color:--media-current-shadow-color)");
//#endregion
export { controls };

//# sourceMappingURL=controls.js.map