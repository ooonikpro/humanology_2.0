<script setup lang="ts">
import { UiSvg } from "@shared/ui";
import { scrollToTop } from "@shared/lib";
</script>

<template>
  <footer>
    <RouterLink to="/" class="logo-link">
      <UiSvg name="logo-circle" class="logo-link__icon" />
    </RouterLink>
    <hr />
    <div class="bottom">
      <a href="/" class="link">
        <UiSvg name="telegram" class="logo-link__icon" />

        Телеграм
      </a>
      <a href="/" class="link">
        <UiSvg name="vk" class="logo-link__icon" />

        ВК
      </a>
      <a href="#" class="link up" @click.prevent="scrollToTop">
        Наверх

        <UiSvg name="chevron-up" class="logo-link__icon" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../shared/styles/variables/colors";

footer {
  width: 100%;
  height: 160px;
  background-color: colors.$beige;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
}

.logo-link {
  opacity: 0.25;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);

  &__icon {
    width: 24px;
    height: 24px;
  }
}

hr {
  height: 0.5px;
  background-color: var(--text-color);
  opacity: 0.1;
}

.bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}

.link {
  font-size: 13px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 4px;
}

.up {
  margin-left: auto;
}
</style>
