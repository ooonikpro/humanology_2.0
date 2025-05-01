<script setup lang="ts">
import { scrollToTop } from "@shared/lib";
</script>

<template>
  <div class="footer-widget">
    <div class="logo-link">
      <UiSvg color="dark-grey" name="logo-circle" size="20" />
    </div>
    <hr />
    <div class="bottom">
      <a href="https://t.me/humanologyapp" class="link">
        <UiSvg color="dark-grey" name="telegram" size="24" />

        <UiText preset="small" color="dark-grey">Телеграм</UiText>
      </a>
      <a href="https://vk.com/humanologyapp" class="link">
        <UiSvg color="dark-grey" name="vk" size="24" />

        <UiText preset="small" color="dark-grey">ВК</UiText>
      </a>
      <a href="#" class="link up" @click.prevent="scrollToTop">
        <UiText preset="small" color="dark-grey">Наверх</UiText>

        <UiSvg color="dark-grey" name="chevron-up" size="24" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/layouts";
@use "../shared/styles/variables/colors";

.footer-widget {
  width: 100%;
  max-width: layouts.$maxWidth;
  margin: 0 auto;
  height: 160px;
  background-color: colors.$white;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
}

.logo-link {
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}

.link {
  display: flex;
  align-items: center;
  gap: 4px;
}

.up {
  margin-left: auto;
}
</style>
