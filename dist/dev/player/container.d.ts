import { HTMLAttributes, ReactNode } from "react";
//#region src/player/container.d.ts
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLDivElement>>;
declare namespace Container {
  type Props = ContainerProps;
}
//#endregion
export { Container, ContainerProps };
//# sourceMappingURL=container.d.ts.map