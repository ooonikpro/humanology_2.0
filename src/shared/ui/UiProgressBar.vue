<script setup lang="ts">
import type { TextColorType } from "@types";

const props = defineProps<{ percent: number; color: TextColorType }>();
const fillWidth = computed(() => {
  return `${Math.max(0, Math.min(100, props.percent))}%`;
});
</script>

<template>
  <div class="ui-progress-bar">
    <div :class="[`g-bg--${props.color}`]" class="ui-progress-bar__fill" />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.ui-progress-bar {
  width: 100%;
  height: 8px;

  overflow: hidden;
  background-color: colors.$light-grey;
  border-radius: 2px 2px 0 0;

  &__fill {
    width: v-bind(fillWidth);
    height: 100%;

    @include transitions.ease(width);
  }
}
</style>
