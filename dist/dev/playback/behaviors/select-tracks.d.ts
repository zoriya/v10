import "../../core/signals/primitives.js";
import "../../index.js";
import { TrackPicker, VideoSelectionConfig } from "../../media/primitives/select-tracks.js";
//#region src/playback/behaviors/select-tracks.d.ts
/**
 * Config for `selectVideoTrack`. Pass `picker` to fully override selection
 * logic; otherwise the default `pickFirstTrackId` is used.
 */
interface SelectVideoTrackConfig extends VideoSelectionConfig {
  picker?: TrackPicker<SelectVideoTrackConfig>;
}
//#endregion
export { SelectVideoTrackConfig };
//# sourceMappingURL=select-tracks.d.ts.map