import { createApp } from "vue";
import { createRouter } from "@kitbag/router";
import App from "@app/App.vue";
import { routes } from "@app/router/routes";
import { disableWindowScroll } from "@shared/lib";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const app = createApp(App);

registerServiceWorker();
disableWindowScroll();

const appRouter = createRouter(routes)

declare module '@kitbag/router' {
  interface Register {
    router: typeof appRouter
  }
}

app.use(appRouter);
app.mount("#app");
