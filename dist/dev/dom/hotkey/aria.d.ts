import { ParsedHotkeyBinding } from "./hotkey.js";
//#region src/dom/hotkey/aria.d.ts
/**
 * Convert parsed key bindings to a WAI-ARIA `aria-keyshortcuts` formatted string.
 *
 * @example
 * ```ts
 * toAriaKeyShortcut(parseHotkeyPattern('Ctrl+Shift+f'));
 * // "Control+Shift+f"
 *
 * toAriaKeyShortcut([...parseHotkeyPattern('k'), ...parseHotkeyPattern('Space')]);
 * // "k Space"
 * ```
 */
declare function toAriaKeyShortcut(bindings: ParsedHotkeyBinding[]): string;
/** Convert a parsed key binding to a compact display shortcut. */
declare function toDisplayKeyShortcut(binding: ParsedHotkeyBinding): string;
//#endregion
export { toAriaKeyShortcut, toDisplayKeyShortcut };
//# sourceMappingURL=aria.d.ts.map