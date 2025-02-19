import { defineAsyncComponent } from "vue";
import { createRoute, withParams } from "@kitbag/router";

import { sociotypeIdParam, sociotypeTabNameParam } from "./params";

export const SOCIOTYPE_CARD_ROUTE = createRoute({
  path: withParams("/s/[id]", {
    id: sociotypeIdParam,
  }),
  name: "card",
  component: defineAsyncComponent(() => import("@pages/sociotypes")),
});

export const SOCIOTYPE_TAB_ROUTE = createRoute({
  parent: SOCIOTYPE_CARD_ROUTE,
  path: withParams("/[tabName]", {
    tabName: sociotypeTabNameParam,
  }),
  name: "sociotypes",
  component: defineAsyncComponent(() => import("@pages/sociotypes")),
});

export const KIDS_ROUTE = createRoute({
  path: "/k",
  name: "kids",
  component: defineAsyncComponent(() => import("@pages/kids/KidsPage.vue")),
});

export const SOCIOTYPE_KIDS_CARD_ROUTE = createRoute({
  path: withParams("/k/[id]", {
    id: sociotypeIdParam,
  }),
  name: "kids.card",
  component: defineAsyncComponent(
    () => import("@pages/kids/id/KidsIdPage.vue"),
  ),
});
