<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { UiSvg } from "@shared/ui";
</script>

<template>
  <header class="header-widget">

    <button class="header-widget__button">
      <UiSvg name="menu" class="header-widget__icon" />
    </button>

    <RouterLink to="/" class="header-widget__logo">
      <UiSvg name="logo-circle" class="header-widget__icon" />
    </RouterLink>

    <button class="header-widget__button">
      <UiSvg name="user-square" class="header-widget__icon" />
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

  &__button {
    cursor: pointer;
  }

  &__icon {
    width: 24px;
    height: 24px;
    opacity: 50%;
  }
}
</style>
