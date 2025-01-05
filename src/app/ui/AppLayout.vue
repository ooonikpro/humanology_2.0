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

.app-layout {
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

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
