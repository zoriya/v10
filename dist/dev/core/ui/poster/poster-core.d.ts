import { MediaPlaybackState } from "@videojs/media";
//#region src/core/ui/poster/poster-core.d.ts
interface PosterState {
  visible: boolean;
}
declare class PosterCore {
  #private;
  setMedia(media: MediaPlaybackState): void;
  getState(): PosterState;
}
declare namespace PosterCore {
  type State = PosterState;
}
//#endregion
export { PosterCore, PosterState };
//# sourceMappingURL=poster-core.d.ts.map