import {PropsWithChildren, useMemo} from "react";
import {useLocation} from "react-router-dom";
import {getRouteByPath} from "@common/utils/route.ts";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import {useIntl} from "react-intl";

interface TheContentProps extends PropsWithChildren {}

export default function TheContent({children}: TheContentProps) {
  const t = useIntl();
  const {pathname} = useLocation();
  const route = getRouteByPath(pathname);

  const breadcrumbs = useMemo(() => {
    if (route && route.type !== "divider") {
      const path = route?.route?.path ?? "";
      const segments = path.split("/").filter(Boolean);

      return segments.map((segment, index) => {
        const url = "/" + segments.slice(0, index + 1).join("/");
        const routeMatch = getRouteByPath(url);

        const label =
          routeMatch && routeMatch.type !== "divider"
            ? routeMatch.menu.label
            : segment.replace(/^:/, "");

        return {label, url};
      });
    }
    return [];
  }, [route, pathname]);

  return (
    <div className="app-dashboard-content-body">
      {route &&
        route?.type !== "divider" &&
        route?.type !== "group" &&
        route?.menu.options?.breadcrumbs &&
        Array.isArray(breadcrumbs) &&
        breadcrumbs.length > 0 && (
          <Breadcrumbs>
            {breadcrumbs.map((item) => (
              <BreadcrumbItem key={item?.url}>
                {t.formatMessage({id: item?.label})}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        )}
      {children}
    </div>
  );
}
