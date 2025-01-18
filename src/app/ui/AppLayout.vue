<template>
  <div class="app-layout">
    <header class="app-layout__header"><slot name="header" /></header>
    <main class="app-layout__body"><slot /></main>
    <slot name="footer" />
    <slot name="loader" />
  </div>
</template>

<style scoped lang="scss">
@use "../../shared/styles/variables/layers";
@use "../../shared/styles/variables/layouts";

.app-layout {
  width: 100%;
  height: 100%;
  max-width: layouts.$maxWidth;
  min-width: layouts.$minWidth;
  margin: 0 auto;
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  border-radius: 4px;
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
