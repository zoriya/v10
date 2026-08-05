import { ReactNode } from "react";
import { MuxDataProps } from "@videojs/media/dom/mux";
//#region src/media/mux-data/mux-data.d.ts
type MuxDataProps$1 = Partial<MuxDataProps>;
/**
 * Adds [Mux Data](https://www.mux.com/data) monitoring to the surrounding
 * player's media.
 *
 * Renders nothing — place it inside the player provider as a sibling of the
 * media component (e.g. `<MuxVideo />`) and it registers a `MuxData` media
 * component with the active media.
 *
 * Mux-hosted playback needs no `envKey`: the view reports the Mux playback ID
 * as its `video_id`, which Mux attributes to the owning environment. Set
 * `envKey` to monitor sources Mux doesn't host.
 *
 * @example
 * ```tsx
 * <Player.Provider>
 *   <MuxVideo source={{ playbackId: 'abc123' }} />
 *   <MuxData playerSoftwareName="mux-video" />
 * </Player.Provider>
 * ```
 */
declare function MuxData$1(props: MuxDataProps$1): ReactNode;
declare namespace MuxData$1 {
  type Props = MuxDataProps$1;
}
//#endregion
export { MuxData$1 as MuxData, MuxDataProps$1 as MuxDataProps };
//# sourceMappingURL=mux-data.d.ts.map