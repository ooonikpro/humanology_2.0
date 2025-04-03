<script setup lang="ts">
import HeaderWidget from "@widgets/HeaderWidget.vue";
import FooterWidget from "@widgets/FooterWidget.vue";
import { MainNavigationWidget } from "@widgets/main-navigation-widget";

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
        :is-open-navigation="isOpenNavigation"
        @toggleNavigation="toggleNavigation"
      />
    </header>
    <main class="app-layout__body"><slot /></main>
    <FooterWidget />

    <div
      :class="[
        'app-layout__nav-overflow',
        {
          'app-layout__nav-overflow--visible': isOpenNavigation,
        },
      ]"
    >
      <MainNavigationWidget
        :class="[
          'app-layout__nav',
          {
            'app-layout__nav--animate': isOpenNavigation,
          },
        ]"
        @click.capture="closeNavigation"
      />
    </div>
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

  &__nav {
    position: absolute;
    inset: 0;
    background-color: colors.$white;
    transform: translateX(-100%);

    @include transitions.ease(transform);

    &--animate {
      transform: translateX(0);
    }
  }

  &__nav-overflow {
    position: absolute;
    top: layouts.$headerHeight;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: layers.$z-index-app-nav;
    overflow: hidden;
    visibility: hidden;

    @include transitions.ease(visibility, display);

    &--visible {
      visibility: visible;
    }
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
