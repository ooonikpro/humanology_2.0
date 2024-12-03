import { createParam, createRoute, path } from "@kitbag/router";
import type { SociotypeIdType } from "@types";
import { SOCIOTYPES } from "@entities/sociotypes/config";
import SociotypePage from "@pages/SociotypePage.vue";
import type { GetParamTypeByRoute } from "./utils";

const sociotypeIdParam = createParam((value, { invalid }) => {
  if (!(value in SOCIOTYPES)) {
    throw invalid("Некорректный параметр sociotypeId");
  }

  return value as SociotypeIdType;
});

export const sociotypeRoute = createRoute({
  path: path("/sociotypes/[id]", {
    id: sociotypeIdParam,
  }),
  name: "sociotypes",
  component: SociotypePage,
});

export type SociotypeRouteParamsType = GetParamTypeByRoute<
  typeof sociotypeRoute
>;
