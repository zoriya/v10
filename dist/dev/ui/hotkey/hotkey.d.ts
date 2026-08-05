import { HotkeyActionName } from "@videojs/core/dom";
import { ReactNode } from "react";
//#region src/ui/hotkey/hotkey.d.ts
interface HotkeyProps {
  keys: string;
  action: HotkeyActionName | (string & {});
  value?: number;
  disabled?: boolean;
  target?: 'player' | 'document';
}
declare function Hotkey({ keys, action, value, disabled, target }: HotkeyProps): ReactNode;
declare namespace Hotkey {
  type Props = HotkeyProps;
}
/** @deprecated Use `HotkeyProps` instead. */
type MediaHotkeyProps = HotkeyProps;
/** @deprecated Use `Hotkey` instead. */
declare const MediaHotkey: typeof Hotkey;
//#endregion
export { Hotkey, HotkeyProps, MediaHotkey, MediaHotkeyProps };
//# sourceMappingURL=hotkey.d.ts.map