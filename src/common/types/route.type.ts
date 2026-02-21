import {DictionaryMessageKey} from "@common/types/dictionary.type.ts";
import {FC, LazyExoticComponent, PropsWithChildren, ReactNode} from "react";
import {LazyRouteFunction} from "react-router-dom";
import {AllRoutes, RouteId} from "@common/configs/route";

/**
 * Represents the structure of a common menu item
 */
export type CommonMenu = {
  label: DictionaryMessageKey<"id"> | string;
  icon: string | ReactNode | null;
  path: string | null;
  options: {
    breadcrumbs?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    badge:
      | {
          color: string;
          value: number | string;
          shape: "circle" | "square";
        }
      | ReactNode
      | null;
  };
};

/**
 * Represents a menu group with only label and icon properties
 */
export type CommonMenuGroup = CommonMenu;

/**
 * Defines the structure of a common route configuration
 */
export type CommonRoute = {
  guard: boolean;
  exact?: boolean;
  path: string;
  Component?: ReactNode | LazyExoticComponent<any> | LazyRouteFunction<any>;
  Middleware?: FC<PropsWithChildren>;
};

/**
 * Common properties shared among route interfaces
 */
export interface IRouteCommon {
  id: string;
  order: number;
  roles: string[];
  permissions: string[];
}

/**
 * Represents a single route item with menu configuration
 */
export interface IRouteItem extends IRouteCommon {
  type: "item";
  route: CommonRoute;
  menu: CommonMenu;
}

/**
 * Represents a group of routes with nested children
 */
export interface IRouteGroup extends IRouteCommon {
  type: "group";
  route: CommonRoute;
  menu: CommonMenuGroup;
  children: Array<IRouteItem | IRouteGroup>;
}

/**
 * Represents a visual divider in the route structure
 */
export interface IRouteDivider {
  type: "divider";
}

/**
 * Represents a submenu containing nested route items
 */
export interface IRouteSubMenu extends IRouteCommon {
  type: "submenu";
  route: CommonRoute;
  menu: CommonMenu;
  children: Array<IRouteItem | IRouteGroup>;
}

/**
 * Union type representing all possible route types
 */
export type IRoute = IRouteItem | IRouteGroup | IRouteDivider | IRouteSubMenu;

// ============================================================
// Type Map for route
// ============================================================

export type ExtractIds<T extends Array<IRoute>> = {
  [K in keyof T]: T[K] extends {id: infer Id; children: infer Children}
    ? Id | (Children extends Array<IRoute> ? ExtractIds<Children> : never)
    : T[K] extends {id: infer Id}
      ? Id
      : never;
}[number];

/**
 * for extract params dari path string
 */
export type ExtractPathParams<Path extends string> =
  Path extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? {[K in Param | keyof ExtractPathParams<`/${Rest}`>]: string}
    : Path extends `${infer _Start}:${infer Param}`
      ? {[K in Param]: string}
      : never;

export type GetRoutePath<
  Id extends RouteId,
  T extends Array<IRoute> = typeof AllRoutes,
> = {
  [K in keyof T]: T[K] extends {id: Id; route: {path: infer Path}}
    ? Path
    : T[K] extends {children: infer Children}
      ? Children extends Array<IRoute>
        ? GetRoutePath<Id, Children>
        : never
      : never;
}[number];
