import type { Translator } from '../../i18n/types';
import type { InputIndicatorLabels } from './status';

/** Maps i18n indicator keys to {@link InputIndicatorLabels} for status / volume feedback. */
export function createInputIndicatorLabels(translator: Translator): InputIndicatorLabels {
  return {
    muted: translator('volume.muted', { default: 'Muted' }),
    volume: translator('volume.label', { default: 'Volume' }),
    volumeWithValue: (value) => translator('volume.value', { value, default: 'Volume {value}' }),
    captionsOn: translator('status.captionsOn', { default: 'Captions on' }),
    captionsOff: translator('status.captionsOff', { default: 'Captions off' }),
    paused: translator('status.paused', { default: 'Paused' }),
    playing: translator('status.playing', { default: 'Playing' }),
    fullscreen: translator('status.fullscreen', { default: 'Fullscreen' }),
    exitFullscreen: translator('fullscreen.exit', { default: 'Exit fullscreen' }),
    pictureInPicture: translator('status.pip', { default: 'Picture in picture' }),
    exitPictureInPicture: translator('status.exitPip', { default: 'Exit picture in picture' }),
  };
}
