import type { RouteRecordRaw } from "vue-router";
import { isSociotypeId } from "@entities/sociotypes";
import { appRoutes } from "../../constants";

export default [
  {
    path: appRoutes.kids,
    component: () => import("@pages/kids/KidsPage.vue"),
  },
  {
    path: appRoutes.kidsCard(),
    component: () => import("@pages/kids/id/KidsIdPage.vue"),
    beforeEnter: (to, _, next) => {
      const id = ((to.params.id ?? "") as string).toUpperCase();

      if (isSociotypeId(to.params.id as string)) return next();

      if (isSociotypeId(id)) return next(appRoutes.kidsCard(id));

      return next(appRoutes.kids);
    },
  },
] satisfies RouteRecordRaw[];
