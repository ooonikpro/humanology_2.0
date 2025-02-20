import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import { THEORY_ROUTE } from "../staticRoutes";

export const FUNCTIONS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/f",
  name: "functions",
  component: defineAsyncComponent(
    () => import("@pages/functions/FunctionsPage.vue"),
  ),
});

export const FUNCTIONS_CARD_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/f/[functionName]",
  name: "functions.card",
  component: defineAsyncComponent(
    () => import("@pages/functions/FunctionsCardPage.vue"),
  ),
});
