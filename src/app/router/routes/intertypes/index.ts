import type { RouteRecordRaw } from "vue-router";

// ? Children of THEORY_ROUTE

export const INTERTYPES_ROUTE: RouteRecordRaw = {
  path: "/t/i",
  name: "intertypes",
  component: () => import("@pages/intertypes/IntertypesPage.vue"),
};

export const INTERTYPES_DESCRIPTION_ROUTE: RouteRecordRaw = {
  path: "/t/i/:intertype",
  name: "intertypes.description",
  component: () =>
    import("@pages/intertypes/description/IntertypesDescriptionPage.vue"),
};
