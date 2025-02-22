import type { RouteRecordRaw } from "vue-router";
export type { AspectsRoutesTypes } from "./aspectsTypedMap";

// Children of THEORY_ROUTE

export const ASPECTS_ROUTE: RouteRecordRaw = {
  path: "a",
  name: "aspects",
  component: () => import("@pages/aspects/AspectsPage.vue"),
};

export const ASPECTS_CARD_ROUTE: RouteRecordRaw = {
  path: "a/:aspect",
  name: "aspects.card",
  component: () => import("@pages/aspects/AspectsCardPage.vue"),
};
