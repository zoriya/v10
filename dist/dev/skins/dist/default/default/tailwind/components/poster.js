import { cn } from "@videojs/utils/style";
//#region ../skins/dist/default/default/tailwind/components/poster.js
const poster = (isShadowDOM) => cn("absolute inset-0 w-full h-full pointer-events-none", "transition-opacity duration-250", "not-data-visible:opacity-0", isShadowDOM ? [
	"before:absolute before:inset-0 before:pointer-events-none",
	"before:[background-image:var(--media-poster-placeholder,none)]",
	"before:bg-no-repeat",
	"before:[background-position:var(--media-object-position,center)]",
	"before:[background-size:var(--media-object-fit,contain)]",
	"before:[filter:blur(var(--media-poster-placeholder-blur,20px))]",
	"[&_::slotted(img)]:absolute",
	"[&_::slotted(img)]:inset-0",
	"[&_::slotted(img)]:w-full",
	"[&_::slotted(img)]:h-full",
	"[&_::slotted(img)]:[object-fit:var(--media-object-fit,contain)]",
	"[&_::slotted(img)]:[object-position:var(--media-object-position,center)]",
	"[&_::slotted(img)]:rounded-(--media-video-border-radius)"
] : ["rounded-[inherit] [object-fit:var(--media-object-fit,contain)] [object-position:var(--media-object-position,center)]", "[&[data-visible]:not([data-loaded])]:opacity-0"]);
//#endregion
export { poster };

//# sourceMappingURL=poster.js.map