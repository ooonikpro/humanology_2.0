<script setup lang="ts">
import { appRoutes } from "../constants";
import AppLoader from "./AppLoader.vue";
import { APP_ROUTES_KEY } from "@shared/hooks/useAppRoutes";

const app = useNuxtApp().vueApp;

// Глобальная переменная для быстрых ссылок
app.config.globalProperties.$appRoutes = appRoutes;

provide(APP_ROUTES_KEY, appRoutes);

declare module "vue" {
  interface ComponentCustomProperties {
    $appRoutes: typeof appRoutes;
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <AppLoader />
  </NuxtLayout>
</template>

<style src="./App.scss" lang="scss"></style>
