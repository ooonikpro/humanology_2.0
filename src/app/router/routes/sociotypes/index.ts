import type { RouteRecordRaw } from "vue-router";
import { isSociotypeId } from "@entities/sociotypes";
import { SOCIOTYPE_PAGE_TABS } from "@pages/sociotypes";
import { appRoutes } from "../../constants";

export default [
  {
    path: appRoutes.sociotypeCard(),
    component: () => import("@pages/sociotypes"),
    beforeEnter: (to, _, next) => {
      const id = ((to.params.id ?? "") as string).toUpperCase();

      if (isSociotypeId(to.params.id as string)) return next();

      if (isSociotypeId(id)) return next(appRoutes.sociotypeCard(id));

      return next(appRoutes.sociotypes);
    },
  },
  {
    path: appRoutes.sociotypeTab(),
    component: () => import("@pages/sociotypes"),
    beforeEnter: (to, _, next) => {
      const id = ((to.params.id ?? "") as string).toUpperCase();
      const tabName = to.params.tabName as string;

      if (isSociotypeId(to.params.id as string)) {
        if (!SOCIOTYPE_PAGE_TABS.find(({ name }) => name === tabName)) {
          return next(appRoutes.sociotypeCard(id));
        }

        return next();
      }

      if (isSociotypeId(id)) {
        return next(appRoutes.sociotypeTab(id, tabName));
      }

      return next(appRoutes.sociotypes);
    },
  },
] as Array<RouteRecordRaw>;
