<template>
  <div class="app-layout">
    <header class="app-layout__header"><slot name="navigation" /></header>
    <main class="app-layout__body"><slot /></main>

    <slot name="footer" />
    <slot name="loader" />
  </div>
</template>

<style scoped lang="scss">
@use "../shared/styles/variables/layers";

$header-height: 40px;

.app-layout {
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: $header-height;

  &__header {
    height: $header-height;
    position: sticky;
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
