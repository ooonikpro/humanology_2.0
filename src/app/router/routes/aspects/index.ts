import type { RouteRecordRaw } from "vue-router";

// ? Children of THEORY_ROUTE

export const ASPECTS_ROUTE: RouteRecordRaw = {
  path: "/t/a",
  name: "aspects",
  component: () => import("@pages/aspects/AspectsPage.vue"),
};

export const ASPECTS_CARD_ROUTE: RouteRecordRaw = {
  path: "/t/a/:aspect",
  name: "aspects.card",
  component: () => import("@pages/aspects/AspectsCardPage.vue"),
};
