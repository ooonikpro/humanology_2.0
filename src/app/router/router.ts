import { createRouter, createWebHistory } from "vue-router";
import ROUTES from "./routes";
import {
  aspectsMiddleware,
  functionsMiddleWare,
  intertypesMiddleware,
  sociotypeIdMiddleware,
  sociotypeKidsCardIdMiddleware,
  sociotypeTabNameMiddleware,
} from "./middlewares";
import type { RouteNamedMap } from "./routesTypedMap";

const appRouter = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
});

appRouter.beforeEach((to, from, next) => {
  return (
    aspectsMiddleware(to, from, next) ??
    functionsMiddleWare(to, from, next) ??
    intertypesMiddleware(to, from, next) ??
    sociotypeIdMiddleware(to, from, next) ??
    sociotypeKidsCardIdMiddleware(to, from, next) ??
    sociotypeTabNameMiddleware(to, from, next) ??
    next()
  );
});

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}

export default appRouter;
