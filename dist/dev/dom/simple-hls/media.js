import { HTMLVideoElementHost } from "../video-host/video-host.js";
import { MediaTracksMixin } from "../../core/media-tracks/mixin.js";
import { SimpleHlsMediaMediaTracksMixin } from "./media-tracks.js";
import { SimpleHlsMediaMixin } from "@videojs/spf/hls";
//#region src/dom/simple-hls/media.ts
const SimpleHlsMediaBase = SimpleHlsMediaMediaTracksMixin(MediaTracksMixin(SimpleHlsMediaMixin(HTMLVideoElementHost)));
var SimpleHlsMedia = class extends SimpleHlsMediaBase {};
//#endregion
export { SimpleHlsMedia };

//# sourceMappingURL=media.js.map