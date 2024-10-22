<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
</script>

<template>
  <div class="app-loader">
    <div class="app-loader__image">
      <UiSvg name="touch-icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-loader {
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  z-index: 9999;

  &__image {
    animation: blink 5s ease infinite;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

