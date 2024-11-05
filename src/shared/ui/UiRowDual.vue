<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  leftText: string;
  rightText: string;
}>();
</script>

<template>
  <div class="ui-row-dual">
    <span class="ui-row-dual__text">{{ props.leftText }}</span>
    <span class="ui-row-dual__line"></span>
    <span class="ui-row-dual__text ui-row-dual__text--right">{{
      props.rightText
    }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/colors";

.ui-row-dual {
  height: 24px;
  display: flex;
  align-items: baseline;
  gap: 8px;

  &__text {
    color: colors.$black;

    &--right {
      opacity: 0.5;
    }
  }

  &__line {
    height: 1px;
    flex-grow: 1;
    position: relative;
    background: linear-gradient(90deg, colors.$quadra 0%, colors.$white 100%);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-bottom: 1px dotted colors.$white;
    }
  }
}
</style>
