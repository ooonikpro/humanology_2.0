<script setup lang="ts">
import { clampPercent } from "../lib/clampPercent";
import type { TextColorType } from "@types";

const props = defineProps<{
  percent: number;
  color: TextColorType;
  isReversed?: boolean;
}>();
const fillWidth = computed(() => {
  return `${clampPercent(props.percent)}%`;
});
</script>

<template>
  <div
    :class="{ 'ui-progress-bar--reversed': props.isReversed }"
    class="ui-progress-bar"
  >
    <slot v-bind="{ fillWidth, colorClass: `g-bg--${props.color}` }">
      <div :class="[`g-bg--${props.color}`]" class="ui-progress-bar__fill" />
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.ui-progress-bar {
  width: 100%;
  height: 8px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  overflow: hidden;
  background-color: colors.$light-grey;
  border-radius: 2px 2px 0 0;

  &--reversed {
    flex-flow: row-reverse nowrap;
  }

  &__fill {
    flex: 0 0 v-bind(fillWidth);
    width: v-bind(fillWidth);
    height: 100%;

    @include transitions.ease(width);
  }
}
</style>
