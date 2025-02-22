import type { IntertypeIdType } from "@types";
import type { RouteRecordInfo } from "vue-router";

type IntertypesRoute = RouteRecordInfo<
  "intertypes",
  "/t/i",
  Record<never, never>,
  Record<never, never>
>;

type IntertypesDescriptionRouteType = RouteRecordInfo<
  "intertypes.description",
  "/t/i/:intertype",
  { intertype: IntertypeIdType },
  { intertype: IntertypeIdType }
>;

export type IntertypesRoutesTypes = {
  intertypes: IntertypesRoute;
  "intertypes.description": IntertypesDescriptionRouteType;
};
