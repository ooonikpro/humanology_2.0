import { createApp } from "vue";
import { App, AppRouter } from "@app";
import { disableWindowScroll } from "@shared/lib";

import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const app = createApp(App);

registerServiceWorker();
disableWindowScroll();

app.use(AppRouter);
app.mount("#app");
