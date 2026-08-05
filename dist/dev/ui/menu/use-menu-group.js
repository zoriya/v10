"use client";
import { MenuGroupContextProvider } from "./context.js";
import { useCallback, useMemo, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/ui/menu/use-menu-group.tsx
function hasExplicitLabel(elementProps) {
	return elementProps["aria-label"] !== void 0 || elementProps["aria-labelledby"] !== void 0;
}
function getMenuGroupProps(labelId, elementProps) {
	return {
		role: "group",
		"aria-labelledby": hasExplicitLabel(elementProps) ? void 0 : labelId
	};
}
function MenuGroupProvider({ children }) {
	const [labelId, setLabelId] = useState();
	const registerLabel = useCallback((id) => {
		setLabelId(id);
		return () => {
			setLabelId((current) => current === id ? void 0 : current);
		};
	}, []);
	return /* @__PURE__ */ jsx(MenuGroupContextProvider, {
		value: useMemo(() => ({ registerLabel }), [registerLabel]),
		children: children(labelId)
	});
}
//#endregion
export { MenuGroupProvider, getMenuGroupProps };

//# sourceMappingURL=use-menu-group.js.map