import type { RouteRecordRaw } from "vue-router";

// ? Children of THEORY_ROUTE

export const FUNCTIONS_ROUTE: RouteRecordRaw = {
  path: "/t/f",
  name: "functions",
  component: () => import("@pages/functions/FunctionsPage.vue"),
};

export const FUNCTIONS_CARD_ROUTE: RouteRecordRaw = {
  path: "/t/f/:functionName",
  name: "functions.card",
  component: () => import("@pages/functions/FunctionsCardPage.vue"),
};
