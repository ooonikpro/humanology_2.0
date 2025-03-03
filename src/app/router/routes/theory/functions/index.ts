import type { RouteRecordRaw } from "vue-router";
import { isFunction } from "@entities/functions-and-blocks";
import { appRoutes } from "../../../constants";

export default [
  {
    path: appRoutes.functions,
    component: () => import("@pages/functions/FunctionsPage.vue"),
  },
  {
    path: appRoutes.functionCard(),
    component: () => import("@pages/functions/FunctionsCardPage.vue"),
    beforeEnter: (to, _, next) => {
      const functionName = (
        (to.params.functionName ?? "") as string
      ).toUpperCase();

      if (isFunction(to.params.functionName as string)) return next();

      if (isFunction(functionName)) {
        return next(appRoutes.functionCard(functionName));
      }

      return next(appRoutes.functions);
    },
  },
] as Array<RouteRecordRaw>;
