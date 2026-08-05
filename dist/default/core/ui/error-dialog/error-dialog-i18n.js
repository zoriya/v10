import { emptyText, okText } from "../../../i18n/text/common.js";
import { abortedText, decodeText, encryptedText, networkText, sourceText, titleText, unexpectedText } from "../../../i18n/text/errors.js";
import { MediaError } from "@videojs/media";
//#region src/core/ui/error-dialog/error-dialog-i18n.ts
const MEDIA_ERROR_TRANSLATIONS = {
	[MediaError.MEDIA_ERR_ABORTED]: abortedText,
	[MediaError.MEDIA_ERR_NETWORK]: networkText,
	[MediaError.MEDIA_ERR_DECODE]: decodeText,
	[MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: sourceText,
	[MediaError.MEDIA_ERR_ENCRYPTED]: encryptedText,
	[MediaError.MEDIA_ERR_CUSTOM]: emptyText
};
const STANDARD_CODE_UA_MESSAGES = { [MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: ["Failed to open media"] };
function isStandardMediaErrorCode(code) {
	return code >= MediaError.MEDIA_ERR_ABORTED && code <= MediaError.MEDIA_ERR_ENCRYPTED;
}
function getMediaErrorTranslationKey(code) {
	return MEDIA_ERROR_TRANSLATIONS[code]?.key;
}
function getErrorDialogTitleText() {
	return titleText;
}
function getErrorDialogDismissText() {
	return okText;
}
function getErrorDialogUnexpectedText() {
	return unexpectedText;
}
/**
* Resolves dialog body copy: default phrases for known {@link MediaError} defaults, literal text for
* custom messages, otherwise the generic fallback key.
*/
function resolveErrorDialogDescription(error, cachedMessage) {
	if (error) {
		const text = MEDIA_ERROR_TRANSLATIONS[error.code];
		const message = error.message?.trim();
		if (message) {
			const defaultForCode = MediaError.defaultMessages[error.code];
			if (text && defaultForCode && message === defaultForCode) return text;
			const uaVariants = STANDARD_CODE_UA_MESSAGES[error.code];
			if (text && isStandardMediaErrorCode(error.code) && !error.context && uaVariants?.includes(message)) return text;
			return message;
		}
		if (text) return text;
	}
	const cached = cachedMessage?.trim();
	if (cached) return cached;
	return unexpectedText;
}
//#endregion
export { getErrorDialogDismissText, getErrorDialogTitleText, getErrorDialogUnexpectedText, getMediaErrorTranslationKey, resolveErrorDialogDescription };

//# sourceMappingURL=error-dialog-i18n.js.map