import { MediaAudioRenditionCapability, MediaAudioTrackCapability, MediaVideoRenditionCapability, MediaVideoTrackCapability } from "../types.js";
import { AnyConstructor, MixinReturn } from "@videojs/utils/types";

//#region src/core/media-tracks/mixin.d.ts
type WithMediaTracks<Base extends AnyConstructor<any>> = MixinReturn<Base, MediaVideoTrackCapability & MediaAudioTrackCapability & MediaVideoRenditionCapability & MediaAudioRenditionCapability>;
//#endregion
export { WithMediaTracks };
//# sourceMappingURL=mixin.d.ts.map