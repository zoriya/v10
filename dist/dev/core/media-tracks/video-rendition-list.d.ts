import { VideoRendition } from "./video-rendition.js";

//#region src/core/media-tracks/video-rendition-list.d.ts
declare class VideoRenditionList extends EventTarget {
  #private;
  [index: number]: VideoRendition;
  [Symbol.iterator](): ArrayIterator<VideoRendition>;
  get length(): number;
  getRenditionById(id: string): VideoRendition | null;
  get selectedIndex(): number;
  set selectedIndex(index: number);
  get onaddrendition(): ((event?: {
    rendition: VideoRendition;
  }) => void) | undefined;
  set onaddrendition(callback: ((event?: {
    rendition: VideoRendition;
  }) => void) | undefined);
  get onremoverendition(): ((event?: {
    rendition: VideoRendition;
  }) => void) | undefined;
  set onremoverendition(callback: ((event?: {
    rendition: VideoRendition;
  }) => void) | undefined);
  get onchange(): (() => void) | undefined;
  set onchange(callback: (() => void) | undefined);
}
//#endregion
export { VideoRenditionList };
//# sourceMappingURL=video-rendition-list.d.ts.map