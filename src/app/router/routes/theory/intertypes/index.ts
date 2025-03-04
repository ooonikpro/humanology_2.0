import type { RouteRecordRaw } from "vue-router";
import { isIntertype } from "@entities/intertypes";
import { appRoutes } from "../../../constants";

export default [
  {
    path: appRoutes.intertypes,
    component: () => import("@pages/intertypes/IntertypesPage.vue"),
  },
  {
    path: appRoutes.intertypeDescription(),
    component: () =>
      import("@pages/intertypes/description/IntertypesDescriptionPage.vue"),
    beforeEnter: (to, _, next) => {
      const intertype = ((to.params.intertype ?? "") as string).toUpperCase();

      if (isIntertype(to.params.intertype as string)) return next();

      if (isIntertype(intertype)) {
        return next(appRoutes.intertypeDescription(intertype));
      }

      return next(appRoutes.intertypes);
    },
  },
] satisfies RouteRecordRaw[];
