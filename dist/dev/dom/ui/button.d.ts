import { UIEvent, UIKeyboardEvent } from "./event.js";
//#region src/dom/ui/button.d.ts
interface ButtonOptions {
  onActivate: (event: UIEvent) => void;
  isDisabled: () => boolean;
}
interface ButtonProps {
  role: 'button';
  tabIndex: 0;
  onClick: (event: UIEvent) => void;
  onPointerDown: (event: UIEvent) => void;
  onMouseDown: (event: UIEvent) => void;
  onKeyDown: (event: UIKeyboardEvent) => void;
  onKeyUp: (event: UIKeyboardEvent) => void;
}
declare function createButton(options: ButtonOptions): ButtonProps;
//#endregion
export { ButtonOptions, ButtonProps, createButton };
//# sourceMappingURL=button.d.ts.map