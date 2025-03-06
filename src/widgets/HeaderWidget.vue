<script setup lang="ts">
import { UiSvg } from "@shared/ui";
</script>

<template>
  <header class="header-widget">
    <button class="header-widget__button">
      <UiSvg color="black" name="menu" size="24" />
    </button>

    <NuxtLink :to="$appRoutes.home" class="header-widget__button">
      <UiSvg color="black" name="logo-circle" size="24" />
    </NuxtLink>

    <button class="header-widget__button">
      <UiSvg color="black" name="user-square" size="24" />
    </button>
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
}
</style>
