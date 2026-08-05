//#region src/ui/hotkey/use-hotkey.d.ts
interface UseHotkeyOptions {
  keys: string;
  onActivate: (event: KeyboardEvent, key: string) => void;
  target?: 'player' | 'document';
  repeatable?: boolean;
  disabled?: boolean;
}
declare function useHotkey(options: UseHotkeyOptions): void;
//#endregion
export { UseHotkeyOptions, useHotkey };
//# sourceMappingURL=use-hotkey.d.ts.map