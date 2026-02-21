import {lazy} from "react";
import {IRoute} from "@common/types";

export const PrivateRoutes = [
  {
    type: "item",
    id: "dashboard.index",
    order: 0,
    roles: [],
    permissions: [],
    route: {
      guard: false,
      exact: false,
      path: "/",
      Component: lazy(() => import("../../../views/dashboard")),
    },
    menu: {
      label: "sider.menu.dashboard",
      icon: null,
      path: "/",
      options: {
        breadcrumbs: false,
        disabled: false,
        hidden: false,
        badge: null,
      },
    },
  },
  {
    type: "item",
    id: "dashboard.calculate-tax",
    order: 0,
    roles: [],
    permissions: [],
    route: {
      guard: false,
      exact: false,
      path: "/tax/calculate/testing",
      Component: lazy(() => import("../../../views/dashboard")),
    },
    menu: {
      label: "sider.menu.dashboard",
      icon: null,
      path: "/tax/calculate/testing",
      options: {
        breadcrumbs: true,
        disabled: false,
        hidden: false,
        badge: null,
      },
    },
  },
  {
    type: "item",
    id: "dashboard.product.edit",
    order: 0,
    roles: [],
    permissions: [],
    route: {
      guard: false,
      exact: false,
      path: "/product/:productId/amend",
      Component: lazy(() => import("../../../views/dashboard")),
    },
    menu: {
      label: "sider.menu.dashboard",
      icon: null,
      path: "/product/:productId/amend",
      options: {
        breadcrumbs: false,
        disabled: false,
        hidden: false,
        badge: null,
      },
    },
  },
] as const satisfies Array<IRoute>;
