import type { RouteRecordRaw } from "vue-router";
import { appRoutes } from "../../constants";

import AspectRoutes from "./aspects";
import FunctionsRoutes from "./functions";
import IntertypesRoutes from "./intertypes";

export default [
  {
    path: appRoutes.theory,
    component: () => import("@pages/TheoryPage.vue"),
  },
  ...AspectRoutes,
  ...FunctionsRoutes,
  ...IntertypesRoutes,
  {
    path: appRoutes.metabolism,
    component: () => import("@pages/MetabolismPage.vue"),
  },
  {
    path: appRoutes.quadras,
    component: () => import("@pages/QuadrasPage.vue"),
  },
  {
    path: appRoutes.roles,
    component: () => import("@pages/RolesAndSuitsPage.vue"),
  },
  {
    path: appRoutes.clubs,
    component: () => import("@pages/ClubsAndGroupsPage.vue"),
  },
  {
    path: appRoutes.mindset,
    component: () => import("@pages/MindsetKindsPage.vue"),
  },
  {
    path: appRoutes.raining,
    component: () => import("@pages/RainingSignsPage.vue"),
  },
  {
    path: appRoutes.jung,
    component: () => import("@pages/JungDichotomyPage.vue"),
  },
] satisfies RouteRecordRaw[];
