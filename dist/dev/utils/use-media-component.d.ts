import { MediaComponent } from "@videojs/media/dom/media-host";
//#region src/utils/use-media-component.d.ts
/**
 * Create a media component (e.g. `GoogleCast`, `MuxData`) and register it
 * with the media provided by the surrounding player context.
 *
 * Instantiates the component class once, registers it when a media host is
 * available, follows the media when it changes, and destroys the component
 * on unmount. Media that is not a media host (e.g. a plain `<video>`
 * element) cannot carry media components and is ignored.
 */
declare function useMediaComponent<Component extends MediaComponent & {
  destroy(): void;
}>(ComponentClass: new () => Component): Component;
//#endregion
export { useMediaComponent };
//# sourceMappingURL=use-media-component.d.ts.map