import type { RouteRecordRaw } from "vue-router";
export type { IntertypesRoutesTypes } from "./intertypesTypedMap";

// Children of THEORY_ROUTE

export const INTERTYPES_ROUTE: RouteRecordRaw = {
  path: "i",
  name: "intertypes",
  component: () => import("@pages/intertypes/IntertypesPage.vue"),
};

export const INTERTYPES_DESCRIPTION_ROUTE: RouteRecordRaw = {
  path: "i/:intertype",
  name: "intertypes.description",
  component: () =>
    import("@pages/intertypes/description/IntertypesDescriptionPage.vue"),
};
