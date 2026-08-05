import { AudioHTMLAttributes } from "react";
//#region src/media/audio.d.ts
interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement> {}
declare const Audio: import("react").ForwardRefExoticComponent<AudioProps & import("react").RefAttributes<HTMLAudioElement>>;
declare namespace Audio {
  type Props = AudioProps;
}
//#endregion
export { Audio, AudioProps };
//# sourceMappingURL=audio.d.ts.map