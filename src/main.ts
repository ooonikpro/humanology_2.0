import { createApp } from "vue";
import App from "@app/App.vue";
import { router } from "@app/router";
import { disableWindowScroll } from "@shared/lib";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const app = createApp(App);

registerServiceWorker();
disableWindowScroll();

app.use(router);
app.mount("#app");
