<script setup lang="ts">
import { UiSvg, UiText } from "@shared/ui";
import { scrollToTop } from "@shared/lib";
</script>

<template>
  <footer>
    <div class="logo-link">
      <UiSvg color="dark-grey" name="logo-circle" size="20" />
    </div>
    <hr />
    <div class="bottom">
      <a href="/" class="link">
        <UiSvg color="dark-grey" name="telegram" size="24" />

        <UiText preset="small" color="dark-grey">Телеграм</UiText>
      </a>
      <a href="/" class="link">
        <UiSvg color="dark-grey" name="vk" size="24" />

        <UiText preset="small" color="dark-grey">ВК</UiText>
      </a>
      <a href="#" class="link up" @click.prevent="scrollToTop">
        <UiText preset="small" color="dark-grey">Наверх</UiText>

        <UiSvg color="dark-grey" name="chevron-up" size="24" />
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
