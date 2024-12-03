import { createRoute } from "@kitbag/router";
import HomePage from "@pages/HomePage.vue";
import { sociotypeRoute } from "./sociotypeRoute";
import { tabsRoute } from "./tabsRoute";

const homeRoute = createRoute({
  path: "/",
  name: "home",
  component: HomePage,
});

export const routes = [homeRoute, sociotypeRoute, tabsRoute] as const;
