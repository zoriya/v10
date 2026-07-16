import type { Text } from '../../i18n/text';
import { empty, ok } from '../../i18n/text/common';
import { aborted, decode, encrypted, network, source, title, unexpected } from '../../i18n/text/errors';
import type { TranslationParams } from '../../i18n/types';
import { MediaError } from '../../media/media-error';

export type MediaErrorTranslationKey = Extract<
  keyof TranslationParams,
  'errors.aborted' | 'errors.network' | 'errors.decode' | 'errors.source' | 'errors.encrypted' | 'common.empty'
>;

const MEDIA_ERROR_CODE_TO_KEY: Record<number, MediaErrorTranslationKey | undefined> = {
  [MediaError.MEDIA_ERR_ABORTED]: 'errors.aborted',
  [MediaError.MEDIA_ERR_NETWORK]: 'errors.network',
  [MediaError.MEDIA_ERR_DECODE]: 'errors.decode',
  [MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: 'errors.source',
  [MediaError.MEDIA_ERR_ENCRYPTED]: 'errors.encrypted',
  [MediaError.MEDIA_ERR_CUSTOM]: 'common.empty',
};

const MEDIA_ERROR_TEXT: Record<MediaErrorTranslationKey, Text> = {
  'errors.aborted': aborted,
  'errors.network': network,
  'errors.decode': decode,
  'errors.source': source,
  'errors.encrypted': encrypted,
  'common.empty': empty,
};

const STANDARD_CODE_UA_MESSAGES: Partial<Record<number, readonly string[]>> = {
  [MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: ['Failed to open media'],
};

function isStandardMediaErrorCode(code: number): boolean {
  return code >= MediaError.MEDIA_ERR_ABORTED && code <= MediaError.MEDIA_ERR_ENCRYPTED;
}

export function getMediaErrorTranslationKey(code: number): MediaErrorTranslationKey | undefined {
  return MEDIA_ERROR_CODE_TO_KEY[code];
}

export function getErrorDialogTitleLabel(): Text {
  return title;
}

export function getErrorDialogDismissLabel(): Text {
  return ok;
}

export function getErrorDialogUnexpectedLabel(): Text {
  return unexpected;
}

/**
 * Resolves dialog body copy: default phrases for known {@link MediaError} defaults, literal text for
 * custom messages, otherwise the generic fallback key.
 */
export function resolveErrorDialogDescription(
  error: (Pick<MediaError, 'code' | 'message'> & { context?: MediaError['context'] }) | null | undefined,
  cachedMessage?: string | null
): Text | string {
  if (error) {
    const key = getMediaErrorTranslationKey(error.code);
    const message = error.message?.trim();
    if (message) {
      const defaultForCode = MediaError.defaultMessages[error.code];
      if (key && defaultForCode && message === defaultForCode) {
        return MEDIA_ERROR_TEXT[key];
      }
      const uaVariants = STANDARD_CODE_UA_MESSAGES[error.code];
      if (key && isStandardMediaErrorCode(error.code) && !error.context && uaVariants?.includes(message)) {
        return MEDIA_ERROR_TEXT[key];
      }
      return message;
    }
    if (key) return MEDIA_ERROR_TEXT[key];
  }

  const cached = cachedMessage?.trim();
  if (cached) return cached;

  return unexpected;
}
