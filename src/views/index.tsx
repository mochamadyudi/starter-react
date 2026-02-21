import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {TheDashboard} from "@components/templates/dashboard";
import {PrivateRoutes} from "@common/configs/route";
import {isValidElement, ReactNode, Suspense} from "react";
import {IRoute} from "@common/types";
import AuthMiddleware from "@components/organism/middleware/auth.middleware.tsx";
import NotFound from "@components/templates/not-found.tsx";

const renderRoutes = (routes: Array<IRoute>, Fallback: ReactNode) => {
  return routes
    .filter((item) => item?.type !== "divider")
    .map((route) => {
      const {type, route: routeConfig} = route;
      let {Middleware: MiddlewareComponent} = routeConfig;

      let isValidMiddleware = false;

      if (routeConfig.hasOwnProperty("Middleware")) {
        isValidMiddleware =
          typeof MiddlewareComponent !== "undefined" &&
          isValidElement(MiddlewareComponent);
      }

      const RouteElement = (
        <Suspense fallback={Fallback}>
          {isValidMiddleware && typeof MiddlewareComponent !== "undefined" ? (
            <MiddlewareComponent>
              <AuthMiddleware
                Component={routeConfig.Component}
                guard={routeConfig?.guard ?? false}
              />
            </MiddlewareComponent>
          ) : (
            <AuthMiddleware
              Component={routeConfig.Component}
              guard={routeConfig?.guard ?? false}
            />
          )}
        </Suspense>
      );

      if (type === "group" || type === "submenu") {
        return (
          <Route key={route.id} path={routeConfig.path}>
            {renderRoutes(
              route.children?.filter(
                (item: any) =>
                  typeof item?.type !== "undefined" && item?.type !== "divider",
              ),
              Fallback,
            )}
          </Route>
        );
      }

      return (
        <Route
          index
          key={route.id}
          path={routeConfig.path}
          element={RouteElement}
        />
      );
    });
};

export default function Views() {
  const routes = [
    {
      path: "/",
      element: <TheDashboard />,
      routes: PrivateRoutes,
      suspense: <p>loading...</p>,
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element}>
            {renderRoutes(route.routes, route.suspense)}
          </Route>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
