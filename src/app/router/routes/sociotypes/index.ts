import type { RouteRecordRaw } from "vue-router";
export type { SociotypesRoutesTypes } from "./sociotypesTypedMap";

export const SOCIOTYPE_CARD_ROUTE: RouteRecordRaw = {
  path: "/s/:id",
  name: "card",
  component: () => import("@pages/sociotypes"),
};

export const SOCIOTYPE_TAB_ROUTE: RouteRecordRaw = {
  path: "/s/:id/:tabName",
  name: "sociotypes",
  component: () => import("@pages/sociotypes"),
};

export const KIDS_ROUTE: RouteRecordRaw = {
  path: "/k",
  name: "kids",
  component: () => import("@pages/kids/KidsPage.vue"),
};

export const SOCIOTYPE_KIDS_CARD_ROUTE: RouteRecordRaw = {
  path: "/k/:id",
  name: "kids.card",
  component: () => import("@pages/kids/id/KidsIdPage.vue"),
};
