import {AllRoutes, RouteId} from "@common/configs/route";
import {ExtractPathParams, GetRoutePath, IRoute} from "@common/types";

/**
 * Recursively searches for a route with the specified ID in the given routes array.
 *
 * @param id - The unique identifier of the route to find
 * @param routes - An array of routes to search through, defaults to AllRoutes
 * @returns The matching route object if found, undefined otherwise
 *
 * @example
 * const homeRoute = getRoute('home');
 * if (homeRoute) {
 *   // Use the route object
 * }
 */
export function getRoute<Id extends RouteId>(
  id: Id,
  routes: IRoute[] = AllRoutes,
): IRoute | undefined {
  for (const route of routes) {
    if (route.type === "divider") continue;
    if (route.id === id) return route;
    if ("children" in route) {
      const found = getRoute(id, route.children as Array<IRoute>);
      if (found) return found;
    }
  }
  return undefined;
}

/**
 * Generates a complete URL path for a given route ID with optional path parameters.
 *
 * @param id - The unique identifier of the route
 * @param attributes - Optional object containing path parameters to be substituted
 * @returns The complete URL path with parameters replaced, or "/" if route not found
 *
 * @example
 * const path = getRoutePath('userProfile', { userId: '123' });
 * // Returns '/users/123' if route pattern is '/users/:userId'
 */
export function getRoutePath(
  id: RouteId,
  attributes?: ExtractPathParams<
    GetRoutePath<RouteId, typeof AllRoutes> & string
  > extends never
    ? never
    : ExtractPathParams<GetRoutePath<RouteId, typeof AllRoutes> & string>,
): string {
  const route = getRoute(id);
  if (!route || route.type === "divider") return "/";

  let path: string = (route as any).route.path;

  if (attributes && typeof attributes === "object") {
    Object.entries(attributes).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value as string);
    });
  }

  return path;
}

/**
 * Checks if a pathname matches a route pattern with parameters.
 *
 * @param pattern - The route pattern that may contain parameters (e.g., '/users/:id')
 * @param pathname - The actual URL pathname to match against
 * @returns True if the pathname matches the pattern, false otherwise
 *
 * @example
 * matchPath('/users/:id', '/users/123') // Returns true
 * matchPath('/users/:id', '/posts/123') // Returns false
 */
export function matchPath(pattern: string, pathname: string): boolean {
  const regexStr = pattern.replace(/:[^/]+/g, "([^/]+)");
  const regex = new RegExp(`^${regexStr}$`);
  return regex.test(pathname);
}

/**
 * Recursively searches for a route that matches the given pathname.
 *
 * @param pathname - The URL pathname to match against route patterns
 * @param routes - An array of routes to search through, defaults to AllRoutes
 * @returns The matching route object if found, undefined otherwise
 *
 * @example
 * const route = getRouteByPath('/users/123');
 * if (route) {
 *   // Use the matching route object
 * }
 */
export function getRouteByPath(
  pathname: string,
  routes: Array<IRoute> = AllRoutes,
): IRoute | undefined {
  try {
    for (const route of routes) {
      if (route?.type === "divider") continue;
      if (matchPath(route?.route?.path, pathname)) return route;
      if ("children" in route) {
        const found = getRouteByPath(pathname, route.children as Array<IRoute>);
        if (found) return found;
      }
    }
    return undefined;
  } catch (error) {
    console.log({error});
    return undefined;
  }
}
