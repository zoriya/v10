import { HTMLAudioElementHost } from "../audio-host/audio-host.js";
import { SimpleHlsAudioOnlyMediaMixin } from "@videojs/spf/hls";
//#region src/dom/simple-hls-audio-only/media.ts
const SimpleHlsAudioOnlyMediaBase = SimpleHlsAudioOnlyMediaMixin(HTMLAudioElementHost);
var SimpleHlsAudioOnlyMedia = class extends SimpleHlsAudioOnlyMediaBase {};
//#endregion
export { SimpleHlsAudioOnlyMedia };

//# sourceMappingURL=media.js.map