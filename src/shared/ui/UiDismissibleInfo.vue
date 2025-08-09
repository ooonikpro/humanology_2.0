<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = withDefaults(
  defineProps<{
    storageKey?: string;
    initiallyVisible?: boolean;
    ariaLabel?: string;
  }>(),
  {
    initiallyVisible: true,
    ariaLabel: "Закрыть",
  },
);

const isVisible = ref(props.initiallyVisible);

onMounted(() => {
  if (props.storageKey && typeof window !== 'undefined' && window.localStorage) {
    try {
      const stored = localStorage.getItem(props.storageKey);
      if (stored === "hidden") {
        isVisible.value = false;
      }
    } catch (error) {
      // Если localStorage недоступен, оставляем компонент видимым
      console.warn('localStorage not available:', error);
    }
  }
});

function close() {
  isVisible.value = false;
  if (props.storageKey && typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(props.storageKey, "hidden");
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }
}
</script>

<template>
  <div v-if="isVisible" class="ui-dismissible-info">
    <button class="ui-dismissible-info__close" :aria-label="ariaLabel" @click="close">
      <UiSvg name="close" color="accent" size="24" />
    </button>
    <div class="ui-dismissible-info__content">
      <slot name="title" />
      <slot />
    </div>
  </div>
  <template v-else />
  
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/globals";

.ui-dismissible-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  padding: 12px 40px 12px 12px;
  border: none;
  background: colors.$beige;
  border-radius: 12px;
  margin-bottom: 8px;
  color: colors.$black;
  

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: background-color 0.2s ease;

    &:hover { background: rgba(colors.$accent, 0.1); }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    :deep(.ui-text--preset-large) { color: colors.$accent; }
  }
}
</style>


