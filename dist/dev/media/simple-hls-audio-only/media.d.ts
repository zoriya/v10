import { AudioHTMLAttributes, ReactNode } from "react";
import { SimpleHlsAudioOnlyMediaProps } from "@videojs/spf/hls";
//#region src/media/simple-hls-audio-only/media.d.ts
interface SimpleHlsAudioOnlyProps extends Omit<AudioHTMLAttributes<HTMLAudioElement>, keyof SimpleHlsAudioOnlyMediaProps>, Partial<SimpleHlsAudioOnlyMediaProps> {
  children?: ReactNode;
}
declare const SimpleHlsAudioOnly: import("react").ForwardRefExoticComponent<SimpleHlsAudioOnlyProps & import("react").RefAttributes<HTMLAudioElement>>;
declare namespace SimpleHlsAudioOnly {
  type Props = SimpleHlsAudioOnlyProps;
}
//#endregion
export { SimpleHlsAudioOnly, SimpleHlsAudioOnlyProps };
//# sourceMappingURL=media.d.ts.map