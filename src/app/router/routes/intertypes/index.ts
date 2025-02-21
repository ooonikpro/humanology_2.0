import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import { THEORY_ROUTE } from "../staticRoutes";

export const INTERTYPES_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/i",
  name: "intertypes",
  component: defineAsyncComponent(
    () => import("@pages/intertypes/IntertypesPage.vue"),
  ),
});

export const INTERTYPES_DESCRIPTION_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/i/[intertype]",
  name: "intertypes.description",
  component: defineAsyncComponent(
    () => import("@pages/intertypes/description/IntertypesDescriptionPage.vue"),
  ),
});
