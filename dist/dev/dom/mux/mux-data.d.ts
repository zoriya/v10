import { HlsJsMedia } from "../hls-js/media.js";
import { MuxDataOptions, MuxDataSdk } from "./types.js";
import * as _$mux_embed0 from "mux-embed";

//#region src/dom/mux/mux-data.d.ts
interface MuxDataProps {
  MuxDataSdk: MuxDataSdk | undefined;
  beaconCollectionDomain: string | undefined;
  debug: boolean;
  disableCookies: boolean;
  envKey: string | undefined;
  playerSoftwareName: string | undefined;
  playerSoftwareVersion: string | undefined;
  playerInitTime: number | undefined;
  metadata: MuxDataOptions['data'] | undefined;
}
declare const muxDataDefaultProps: MuxDataProps;
interface MuxDataMedia extends EventTarget {
  readonly engine?: HlsJsMedia['engine'];
  readonly src: string;
}
declare class MuxData implements MuxDataProps {
  #private;
  constructor(props?: Partial<MuxDataProps>);
  setMedia(media: MuxDataMedia): void;
  attach(target: HTMLVideoElement): void;
  detach(): void;
  destroy(): void;
  get MuxDataSdk(): MuxDataSdk | undefined;
  set MuxDataSdk(value: MuxDataSdk | undefined);
  get beaconCollectionDomain(): string | undefined;
  set beaconCollectionDomain(value: string | undefined);
  get debug(): boolean;
  set debug(value: boolean);
  get disableCookies(): boolean;
  set disableCookies(value: boolean);
  /**
   * Mux Data environment key. Omitted from the beacon when unset, which is the
   * norm for Mux-hosted playback: the view reports the Mux playback ID as its
   * `video_id` (see {@link toVideoId}) and Mux attributes it to the owning
   * environment. Set this to monitor sources Mux doesn't host.
   */
  get envKey(): string | undefined;
  set envKey(value: string | undefined);
  get playerSoftwareName(): string | undefined;
  set playerSoftwareName(value: string | undefined);
  get playerSoftwareVersion(): string | undefined;
  set playerSoftwareVersion(value: string | undefined);
  get playerInitTime(): number | undefined;
  set playerInitTime(value: number | undefined);
  get metadata(): _$mux_embed0.Metadata | undefined;
  set metadata(value: _$mux_embed0.Metadata | undefined);
}
//#endregion
export { MuxData, MuxDataProps, muxDataDefaultProps };
//# sourceMappingURL=mux-data.d.ts.map