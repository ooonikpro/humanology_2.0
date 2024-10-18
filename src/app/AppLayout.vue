<template>
  <div class="app-layout">
    <header class="app-layout__header"><slot name="navigation" /></header>
    <main class="app-layout__body"><slot /></main>

    <slot name="footer" />
    <slot name="loader" />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  --header-height: 40px;

  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: var(--header-height);

  &__header {
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  &__body {
    flex: 2 0 auto;
  }

  &__body,
  &__footer {
    position: relative;
    z-index: 1;
  }
}
</style>
