<script lang="ts" setup>
const props = defineProps<{ isLoading: boolean }>();

const { isLoading } = useLoadingIndicator({
  duration: 2e3,
  throttle: 200,
});
</script>

<template>
  <div v-if="isLoading || props.isLoading" class="app-loader">
    <div class="app-loader__image">
      <UiSvg name="touch-icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../shared/styles/variables/layers";

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
  z-index: layers.$z-index-app-loader;

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
