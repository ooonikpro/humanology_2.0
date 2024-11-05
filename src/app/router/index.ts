import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@pages/HomePage.vue";
import SociotypePage from "@pages/SociotypePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/sociotypes/:id",
      name: "sociotypes",
      component: SociotypePage,
    },
  ],
});

export default router;
