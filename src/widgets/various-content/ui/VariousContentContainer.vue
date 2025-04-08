<script setup lang="ts">
import { useVariousContentContainer } from "../hooks/useVariousContent";

const { switcherOnTop = true, ...props } = defineProps<{
  defaultContentId: string;
  switcherOnTop?: boolean;
  syncWithUrl?: boolean;
}>();

const containerRef = useTemplateRef<HTMLElement>("scroller");

useVariousContentContainer({
  containerRef,
  syncWithUrl: props.syncWithUrl,
  defaultContentId: props.defaultContentId,
});
</script>

<template>
  <div
    class="various-content-container"
    :class="{
      'various-content-container__switcher-top': switcherOnTop,
    }"
  >
    <div class="various-content-container__tabs">
      <div ref="scroller" class="various-content-container__tabs-scroller">
        <slot name="tabs" />
      </div>
    </div>

    <div class="various-content-container__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";
@use "@shared/styles/mixins/bem";

.various-content-container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__tabs {
    overflow: hidden;
    margin-bottom: 24px;
  }

  &__tabs-scroller {
    width: 100%;
    overflow-x: scroll;
    padding: 4px;
    display: flex;
    border-radius: 4px;
    background-color: colors.$beige;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  &--switcher-on-top {
    flex-direction: column-reverse;
  }
}
</style>
