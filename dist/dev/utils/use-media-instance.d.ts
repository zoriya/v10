import { Media } from "@videojs/media";
//#region src/utils/use-media-instance.d.ts
/**
 * Create and manage a media instance lifecycle within a player context.
 *
 * Instantiates the media class once, attaches it to the player on mount,
 * and safely detaches on unmount using a functional updater to avoid race
 * conditions when swapping media components (e.g. DashVideo → HlsJsVideo).
 *
 * An optional `setup` callback runs once on mount — e.g. to add media
 * components via `addMediaComponent`. Components registered there are destroyed
 * together with the media instance on unmount (`media.destroy()` destroys
 * all of its registered components).
 */
declare function useMediaInstance<Instance extends Media & {
  destroy(): void;
}>(MediaClass: new () => Instance, setup?: (media: Instance) => void): Instance;
//#endregion
export { useMediaInstance };
//# sourceMappingURL=use-media-instance.d.ts.map