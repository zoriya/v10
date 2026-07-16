import type { Contains, EnsureRecord } from '@videojs/utils/types';
import type { LOCALES } from './locales';

/** BCP 47 language tag; built-ins are narrowed for autocomplete. */
export type Locale = (typeof LOCALES)[number] | (string & {});

/** Nested shape used by authored locale files. */
export interface Translations {
  readonly [key: string]: string | Translations | undefined;
}

/** Per-key argument contract: `never` means the translator only accepts the key. */
type SemanticTranslationParams = {
  'buttons.play': never;
  'buttons.pause': never;
  'buttons.replay': never;
  'buttons.mute': never;
  'buttons.unmute': never;
  'seek.forward': { seconds: number | string };
  'seek.backward': { seconds: number | string };
  'fullscreen.enter': never;
  'fullscreen.exit': never;
  'captions.enable': never;
  'captions.disable': never;
  'pip.enter': never;
  'pip.exit': never;
  'live.playing': never;
  'live.seekToEdge': never;
  'live.badge': never;
  'cast.start': never;
  'cast.stop': never;
  'cast.connecting': never;
  'airplay.start': never;
  'airplay.stop': never;
  'slider.seek': never;
  'time.current': never;
  'time.duration': never;
  'time.remaining': never;
  'time.remainingSuffix': { duration: string };
  'time.showElapsed': { duration: string };
  'time.showDuration': { duration: string };
  'time.showRemaining': { duration: string };
  'playback.rate': { rate: number | string };
  'time.position': { current: string; duration: string };
  'volume.mutedValue': { percent: number | string };
  'volume.muted': never;
  'volume.label': never;
  'volume.value': { value: string };
  'status.captionsOn': never;
  'status.captionsOff': never;
  'status.paused': never;
  'status.playing': never;
  'status.fullscreen': never;
  'status.pip': never;
  'status.exitPip': never;
  'errors.aborted': never;
  'errors.network': never;
  'errors.decode': never;
  'errors.source': never;
  'errors.encrypted': never;
  'common.empty': never;
  'errors.title': never;
  'common.ok': never;
  'errors.unexpected': never;
  'menu.settings': never;
  'menu.quality': never;
  'menu.audio': never;
  'menu.default': never;
  'menu.speed': never;
  'menu.captions': never;
  'menu.playbackRate': never;
  'menu.back': never;
  'menu.off': never;
  'menu.auto': never;
  'menu.autoWithLabel': { label: string };
  'menu.subtitles': never;
};

export type TranslationParams = SemanticTranslationParams;

export type TranslationKey = keyof TranslationParams;

export interface TranslationOptions {
  default?: string;
}

type ParametricKey = {
  [Key in keyof SemanticTranslationParams]: SemanticTranslationParams[Key] extends never ? never : Key;
}[keyof SemanticTranslationParams];

/** Placeholder shape for each key that accepts `t(key, params)`. */
type ParametricTranslations = EnsureRecord<
  ParametricKey,
  string,
  {
    'seek.forward': Contains<'{seconds}'>;
    'seek.backward': Contains<'{seconds}'>;
    'time.remainingSuffix': Contains<'{duration}'>;
    'time.showElapsed': Contains<'{duration}'>;
    'time.showDuration': Contains<'{duration}'>;
    'time.showRemaining': Contains<'{duration}'>;
    'playback.rate': Contains<'{rate}'>;
    'time.position': Contains<'{current}'> & Contains<'{duration}'>;
    'volume.mutedValue': Contains<'{percent}'>;
    'volume.value': Contains<'{value}'>;
    'menu.autoWithLabel': Contains<'{label}'>;
  }
>;

/** Player copy keyed by semantic key; all entries are optional overlays. */
export type FlatTranslations = {
  [Key in keyof TranslationParams]?: TranslationParams[Key] extends never
    ? string
    : Key extends keyof ParametricTranslations
      ? ParametricTranslations[Key]
      : string;
} & Record<string, string | undefined>;

export type Translator = <Key extends string>(
  key: Key,
  ...args: Key extends keyof TranslationParams
    ? TranslationParams[Key] extends never
      ? [params?: TranslationOptions]
      : [params: TranslationParams[Key] & TranslationOptions]
    : [params?: Record<string, string | number> & TranslationOptions]
) => string;
