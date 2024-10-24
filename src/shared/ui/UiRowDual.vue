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
    flex-grow: 1;
    border-bottom: 1px dotted colors.$black;
  }
}
</style>
