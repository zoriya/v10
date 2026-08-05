import { AudioHTMLAttributes, ReactNode } from "react";
import { HlsMediaProps } from "@videojs/media/dom/hls-js";
import { MuxMediaProps } from "@videojs/media/dom/mux";
//#region src/media/mux-audio/media.d.ts
interface MuxAudioProps extends Omit<AudioHTMLAttributes<HTMLAudioElement>, keyof HlsMediaProps | keyof MuxMediaProps>, Partial<HlsMediaProps>, Partial<MuxMediaProps> {
  children?: ReactNode;
}
declare const MuxAudio: import("react").ForwardRefExoticComponent<MuxAudioProps & import("react").RefAttributes<HTMLAudioElement>>;
declare namespace MuxAudio {
  type Props = MuxAudioProps;
}
//#endregion
export { MuxAudio, MuxAudioProps };
//# sourceMappingURL=media.d.ts.map