import { VideoRendition } from "./video-rendition.js";

//#region src/core/media-tracks/video-track.d.ts
declare class VideoTrack {
  #private;
  id: string | undefined;
  kind: string | undefined;
  label: string;
  language: string;
  sourceBuffer: unknown;
  addRendition(src: string, width?: number, height?: number, codec?: string, bitrate?: number, frameRate?: number): VideoRendition;
  removeRendition(rendition: VideoRendition): void;
  get selected(): boolean;
  set selected(value: boolean);
}
//#endregion
export { VideoTrack };
//# sourceMappingURL=video-track.d.ts.map