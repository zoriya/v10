//#region src/core/i18n/text/errors.d.ts
declare const abortedText: {
  readonly key: "errors.aborted";
  readonly text: 'You stopped media playback before it finished.';
};
declare const networkText: {
  readonly key: "errors.network";
  readonly text: 'This media could not be loaded due to a network or server issue.';
};
declare const decodeText: {
  readonly key: "errors.decode";
  readonly text: 'This media could not be played. It may be corrupted, or your browser may not support its format.';
};
declare const sourceText: {
  readonly key: "errors.source";
  readonly text: 'This media could not be loaded. It may be unavailable, or your browser may not support its format.';
};
declare const encryptedText: {
  readonly key: "errors.encrypted";
  readonly text: 'This media could not be played because it could not be decrypted.';
};
declare const titleText: {
  readonly key: "errors.title";
  readonly text: 'Something went wrong.';
};
declare const unexpectedText: {
  readonly key: "errors.unexpected";
  readonly text: 'An unexpected error occurred.';
};
//#endregion
export { abortedText, decodeText, encryptedText, networkText, sourceText, titleText, unexpectedText };
//# sourceMappingURL=errors.d.ts.map