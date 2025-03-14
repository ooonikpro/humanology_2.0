<script setup lang="ts">
import { appRoutes } from "../constants";
import AppLoader from "./AppLoader.vue";

const app = useNuxtApp().vueApp;

// Глобальная переменная для быстрых ссылок
app.config.globalProperties.$appRoutes = appRoutes;

app.provide("$appRoutes", appRoutes);

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
