import { AudioRendition } from "./audio-rendition.js";

//#region src/core/media-tracks/audio-track.d.ts
declare class AudioTrack {
  #private;
  id: string | undefined;
  kind: string | undefined;
  label: string;
  language: string;
  sourceBuffer: unknown;
  addRendition(src: string, codec?: string, bitrate?: number): AudioRendition;
  removeRendition(rendition: AudioRendition): void;
  get enabled(): boolean;
  set enabled(value: boolean);
}
//#endregion
export { AudioTrack };
//# sourceMappingURL=audio-track.d.ts.map