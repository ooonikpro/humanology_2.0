<script setup lang="ts">
import HeaderWidget from "@widgets/HeaderWidget.vue";
import FooterWidget from "@widgets/FooterWidget.vue";
import { MenuNavigationWidget } from "@widgets/navigation";

const isOpenNavigation = ref(false);
const toggleNavigation = () => {
  isOpenNavigation.value = !isOpenNavigation.value;
};
const closeNavigation = () => {
  isOpenNavigation.value = false;
};

const route = useRoute();
const isDev = process.dev;
</script>

<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <HeaderWidget
        :isOpenNavigation="isOpenNavigation"
        @toggleNavigation="toggleNavigation"
      />
    </header>
    <main class="app-layout__body"><slot /></main>
    <footer class="app-layout__footer">
      <FooterWidget />
    </footer>

    <Teleport to="body">
      <MenuNavigationWidget
        :isOpen="isOpenNavigation"
        @click.capture="closeNavigation"
      />
    </Teleport>
    <div v-if="isDev" class="route-debug">Route: {{ route.fullPath }}</div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/layers";
@use "@shared/styles/variables/layouts";
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.app-layout {
  position: relative;
  max-width: layouts.$maxWidth;
  margin: 0 auto;
  border-radius: 4px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: layouts.$headerHeight;
  overflow-x: hidden;

  &__header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: layouts.$headerHeight;
    z-index: layers.$z-index-app-header;
  }

  &__body {
    width: 100vw;
    flex: 2 0 auto;

    @media screen and (min-width: layouts.$maxWidth) {
      width: 100%;
    }
  }

  &__body,
  &__footer {
    position: relative;
    z-index: layers.$z-index-app-content;
  }
}

.route-debug {
  position: fixed;
  right: 8px;
  bottom: 8px;
  padding: 4px 8px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 4px;
  z-index: 9999;
}
</style>
