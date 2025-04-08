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
    <FooterWidget />

    <MenuNavigationWidget
      :isOpen="isOpenNavigation"
      @click.capture="closeNavigation"
    />
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
  min-width: layouts.$minWidth;
  margin: 0 auto;
  border-radius: 4px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  &__header {
    width: 100%;
    position: sticky;
    align-self: start;
    top: 0;
    left: 0;
    right: 0;
    height: layouts.$headerHeight;
    z-index: layers.$z-index-app-header;
  }

  &__body {
    flex: 2 0 auto;
  }

  &__body,
  &__footer {
    position: relative;
    z-index: layers.$z-index-app-content;
  }
}
</style>
