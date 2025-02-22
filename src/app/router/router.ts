import { createRouter, createWebHistory } from "vue-router";
import type { AspectsRoutesTypes } from "./routes/aspects/aspectsTypedMap";
import type { FunctionsRoutesTypes } from "./routes/functions/functionsTypedMap";
import type { IntertypesRoutesTypes } from "./routes/intertypes/intertypesTypedMap";
import type { SociotypesRoutesTypes } from "./routes/sociotypes/sociotypesTypedMap";
import type { StaticRoutesTypes } from "./routes/staticRoutesTypedMap";
import ROUTES from "./routes";

const appRouter = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
});

export interface RouteNamedMap
  extends AspectsRoutesTypes,
    FunctionsRoutesTypes,
    IntertypesRoutesTypes,
    SociotypesRoutesTypes,
    StaticRoutesTypes {}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}

export default appRouter;
