<script setup lang="ts"></script>

<template>
  <header class="header-widget">
    <button class="header-widget__button">
      <UiSvg color="black" name="menu" size="24" />
    </button>

    <NuxtLink :to="$appRoutes.home" class="header-widget__button">
      <UiSvg color="black" name="logo-circle" size="24" />
    </NuxtLink>

    <NuxtLink class="header-widget__button courses-button">
      <UiSvg color="accent" name="energy" size="16" />
      <UiText color="accent" preset="small">Курсы</UiText>
    </NuxtLink>
  </header>
</template>

<style scoped lang="scss">
@use "../shared/styles/variables/colors";

.header-widget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
  background-color: colors.$white;
  border-bottom: 1px solid colors.$grey;

  &__button {
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  .courses-button {
    padding: 2px 4px;
    padding-right: 9px;

    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 2px;

    position: relative;
    background-color: colors.$beige;
    border-radius: 2px;

    clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  }
}
</style>
