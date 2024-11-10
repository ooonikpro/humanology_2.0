import type { GetRoutesNames, RouteType } from "./types";
import HomePage from "@pages/HomePage.vue";
import SociotypePage from "@pages/SociotypePage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/sociotypes/:id",
    name: "sociotypes",
    component: SociotypePage,
  },
] as const satisfies readonly RouteType[];

export type RouteNameType = GetRoutesNames<typeof routes>;
