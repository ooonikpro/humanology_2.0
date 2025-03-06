<script setup lang="ts">
import FooterWidget from "@widgets/FooterWidget.vue";
import HeaderWidget from "@widgets/HeaderWidget.vue";

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
    <template #header>
      <HeaderWidget />
    </template>

    <template #default>
      <NuxtPage />
    </template>

    <template #footer>
      <FooterWidget />
    </template>

    <template #loader>
      <AppLoader />
    </template>
  </NuxtLayout>
</template>

<style src="./App.scss" lang="scss"></style>
