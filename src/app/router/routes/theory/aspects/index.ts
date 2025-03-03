import type { RouteRecordRaw } from "vue-router";
import { isAspect } from "@entities/aspects";
import { appRoutes } from "../../../constants";

export default [
  {
    path: appRoutes.aspects,
    component: () => import("@pages/aspects/AspectsPage.vue"),
  },
  {
    path: appRoutes.aspectCard(),
    component: () => import("@pages/aspects/AspectsCardPage.vue"),
    beforeEnter: (to, _, next) => {
      const aspect = ((to.params.aspect ?? "") as string).toUpperCase();

      if (isAspect(to.params.aspect as string)) return next();

      if (isAspect(aspect)) {
        return next(appRoutes.aspectCard(aspect));
      }

      return next(appRoutes.aspects);
    },
  },
] as Array<RouteRecordRaw>;
