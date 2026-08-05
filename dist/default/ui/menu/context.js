"use client";
import { createContext, useContext } from "react";
//#region src/ui/menu/context.tsx
const MenuContext = createContext(null);
const MenuContextProvider = MenuContext.Provider;
function useMenuContext() {
	const ctx = useContext(MenuContext);
	if (!ctx) throw new Error("Menu compound components must be used within a Menu.Root");
	return ctx;
}
function useOptionalMenuContext() {
	return useContext(MenuContext);
}
const SubMenuContext = createContext(null);
const SubMenuContextProvider = SubMenuContext.Provider;
function useSubMenuContext() {
	return useContext(SubMenuContext);
}
const MenuGroupContext = createContext(null);
const MenuGroupContextProvider = MenuGroupContext.Provider;
function useMenuGroupContext() {
	return useContext(MenuGroupContext);
}
const MenuRadioGroupContext = createContext(null);
const MenuRadioGroupContextProvider = MenuRadioGroupContext.Provider;
function useMenuRadioGroupContext() {
	const ctx = useContext(MenuRadioGroupContext);
	if (!ctx) throw new Error("Menu.RadioItem must be used within a Menu.RadioGroup");
	return ctx;
}
const MenuTriggerChildContext = createContext(false);
const MenuTriggerChildContextProvider = MenuTriggerChildContext.Provider;
function useOptionalMenuTriggerChildContext() {
	return useContext(MenuTriggerChildContext);
}
const MenuItemSettingContext = createContext(null);
const MenuItemSettingContextProvider = MenuItemSettingContext.Provider;
function useOptionalMenuItemSettingContext() {
	return useContext(MenuItemSettingContext);
}
//#endregion
export { MenuContextProvider, MenuGroupContextProvider, MenuItemSettingContextProvider, MenuRadioGroupContextProvider, MenuTriggerChildContextProvider, SubMenuContextProvider, useMenuContext, useMenuGroupContext, useMenuRadioGroupContext, useOptionalMenuContext, useOptionalMenuItemSettingContext, useOptionalMenuTriggerChildContext, useSubMenuContext };

//# sourceMappingURL=context.js.map