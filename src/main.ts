import { createApp } from "vue";
import App from "@app/App.vue";
import Router from "@app/router";
import disableWindowScroll from "@shared/lib/disableWindowScroll";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const app = createApp(App);

registerServiceWorker();
disableWindowScroll();

app.use(Router);
app.mount("#app");
