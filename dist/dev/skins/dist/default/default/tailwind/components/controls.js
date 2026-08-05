import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/default/tailwind/components/controls.js
const controls = cn("peer/controls", "@container/media-controls", "[--media-popover-side-offset:calc(var(--spacing)*(var(--base-side-offset,2)+var(--controls-padding,1)))]", "[--media-tooltip-side-offset:var(--media-popover-side-offset)]", "[--media-popover-boundary-offset:calc(var(--spacing)*var(--base-boundary-offset,2))]", "[--media-tooltip-boundary-offset:var(--media-popover-boundary-offset)]", "[padding:calc(var(--spacing)*var(--controls-padding,1))] flex items-center", "rounded-full", "text-shadow-2xs text-shadow-(color:--media-current-shadow-color)");
//#endregion
export { controls };

//# sourceMappingURL=controls.js.map