<script setup lang="ts">
import MainNavigationWidget from "@widgets/main-navigation-widget";
import { parseSociotypeRoute } from "@entities/sociotypes";
import { APP_ROUTES_KEY } from "@shared/hooks/useAppRoutes";
import { appRoutes } from "../constants";
import AppLoader from "./AppLoader.vue";

const app = useNuxtApp().vueApp;

// Глобальная переменная для быстрых ссылок
app.config.globalProperties.$appRoutes = appRoutes;

provide(APP_ROUTES_KEY, appRoutes);

declare module "vue" {
  interface ComponentCustomProperties {
    $appRoutes: typeof appRoutes;
  }
}

const isMenuOpen = useState("menu-state", () => false);

const isSociotypeLoading = useState("loading", () => false);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <template #loader>
        <AppLoader :is-loading="isSociotypeLoading" />
      </template>
    </NuxtLayout>
    <MainNavigationWidget v-if="isMenuOpen" />
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
