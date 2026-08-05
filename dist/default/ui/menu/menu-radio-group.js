"use client";
import { renderElement } from "../../utils/use-render.js";
import { MenuRadioGroupContextProvider, useMenuContext } from "./context.js";
import { MenuGroupProvider, getMenuGroupProps } from "./use-menu-group.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/menu/menu-radio-group.tsx
/** A group of mutually exclusive radio items. Renders a `<div>` with `role="group"`. */
const MenuRadioGroup = forwardRef(function MenuRadioGroup({ render, className, style, value, onValueChange, ...elementProps }, forwardedRef) {
	const { state } = useMenuContext();
	return /* @__PURE__ */ jsx(MenuGroupProvider, { children: (labelId) => /* @__PURE__ */ jsx(MenuRadioGroupContextProvider, {
		value: {
			value,
			onValueChange
		},
		children: renderElement("div", {
			render,
			className,
			style
		}, {
			state,
			ref: [forwardedRef],
			props: [getMenuGroupProps(labelId, elementProps), elementProps]
		})
	}) });
});
//#endregion
export { MenuRadioGroup };

//# sourceMappingURL=menu-radio-group.js.map