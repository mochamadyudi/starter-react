import {ReactNode} from "react";

export type MenuType = "item" | "group" | "submenu";

export type MenuItem = {
  type: MenuType;
  label: string | ReactNode;
  icon: string | ReactNode;
};
