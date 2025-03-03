import { createRouter, createWebHistory } from "vue-router";
import ROUTES from "./routes";

const appRouter = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.path === from.path) {
      return { top: document.documentElement.scrollTop };
    }

    return savedPosition ?? { top: 0 };
  },
});

export default appRouter;
