import type { RouteRecordRaw } from "vue-router";
export type { FunctionsRoutesTypes } from "./functionsTypedMap";

// Children of THEORY_ROUTE

export const FUNCTIONS_ROUTE: RouteRecordRaw = {
  path: "f",
  name: "functions",
  component: () => import("@pages/functions/FunctionsPage.vue"),
};

export const FUNCTIONS_CARD_ROUTE: RouteRecordRaw = {
  path: "f/:functionName",
  name: "functions.card",
  component: () => import("@pages/functions/FunctionsCardPage.vue"),
};
