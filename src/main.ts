import { createApp } from "vue";
import { App, AppRouter, appRoutes } from "@app";
import { disableWindowScroll } from "@shared/lib";

import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const app = createApp(App);

// Глобальная переменная для быстрых ссылок
app.config.globalProperties.$appRoutes = appRoutes;

app.provide("$appRoutes", appRoutes);

registerServiceWorker();
disableWindowScroll();

app.use(AppRouter);
app.mount("#app");

declare module "vue" {
  interface ComponentCustomProperties {
    $appRoutes: typeof appRoutes;
  }
}
