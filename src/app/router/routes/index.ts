import type { RouteRecordRaw } from "vue-router";
import HomePage from "@pages/HomePage.vue";
import { appRoutes } from "../constants";

import SociotypeRoutes from "./sociotypes";
import KidsRoutes from "./kids";
import TheoryRoutes from "./theory";

export default [
  {
    path: appRoutes.home,
    component: HomePage,
  },
  ...SociotypeRoutes,
  ...KidsRoutes,
  ...TheoryRoutes,
  {
    path: appRoutes.whatIsIt,
    component: () => import("@pages/WhatIsPage.vue"),
  },
  {
    path: appRoutes.disclaimer,
    component: () => import("@pages/DisclaimerPage.vue"),
  },
  {
    path: appRoutes.howToDefine,
    component: () => import("@pages/HowToDefineTypePage.vue"),
  },
  {
    path: appRoutes.tests,
    component: () => import("@pages/TestsPage.vue"),
  },
  {
    path: appRoutes.profile,
    component: () => import("@pages/ProfilePage.vue"),
  },
  {
    path: appRoutes.people,
    component: () => import("@pages/PeoplesPage.vue"),
  },
  {
    path: appRoutes.specialists,
    component: () => import("@pages/SpecialistsPage.vue"),
  },
  {
    path: appRoutes.teams,
    component: () => import("@pages/TeamsPage.vue"),
  },
  {
    path: appRoutes.history,
    component: () => import("@pages/HistoryPage.vue"),
  },
] satisfies RouteRecordRaw[];
