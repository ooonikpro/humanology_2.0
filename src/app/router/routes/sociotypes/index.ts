import { defineAsyncComponent } from "vue";
import { createRoute, path } from "@kitbag/router";

import { sociotypeIdParam, sociotypeTabNameParam } from "./params";

const SOCIOTYPE_ROUTE = createRoute({
  path: path("/s/[id]/[tabName]", {
    id: sociotypeIdParam,
    tabName: sociotypeTabNameParam,
  }),
  name: "sociotypes",
  component: defineAsyncComponent(() => import("@pages/sociotypes")),
});

export default SOCIOTYPE_ROUTE;
