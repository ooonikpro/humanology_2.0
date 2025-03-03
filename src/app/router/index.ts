import { createRouter, createWebHistory } from "vue-router";
import ROUTES from "./routes";

const appRouter = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
  scrollBehavior: (to, __, savedPosition) => {
    if (to.query) return { top: document.documentElement.scrollTop };

    return savedPosition ?? { top: 0 };
  },
});

export default appRouter;
