import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import { THEORY_ROUTE } from "../staticRoutes";

export const ASPECTS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/a",
  name: "aspects",
  component: defineAsyncComponent(
    () => import("@pages/aspects/AspectsPage.vue"),
  ),
});

export const ASPECTS_CARD_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/a/[aspect]",
  name: "aspects.card",
  component: defineAsyncComponent(
    () => import("@pages/aspects/AspectsCardPage.vue"),
  ),
});
