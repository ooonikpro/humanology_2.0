<script setup lang="ts">
import HeaderWidget from "@widgets/HeaderWidget.vue";
import FooterWidget from "@widgets/FooterWidget.vue";
</script>

<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <HeaderWidget />
    </header>
    <main class="app-layout__body">
      <slot />
      <slot name="loader" />
    </main>
    <FooterWidget />
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/layers";
@use "@shared/styles/variables/layouts";

.app-layout {
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
