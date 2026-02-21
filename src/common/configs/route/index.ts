import {PrivateRoutes} from "./private.route";
import {ExtractIds, IRoute} from "@common/types";

const AllRoutes = [...PrivateRoutes] as const satisfies Array<IRoute>;

export type RouteId = ExtractIds<typeof AllRoutes>;

export {PrivateRoutes, AllRoutes};
