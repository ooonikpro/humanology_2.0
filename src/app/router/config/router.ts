import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as readonly RouteRecordRaw[],
});

export default router;
