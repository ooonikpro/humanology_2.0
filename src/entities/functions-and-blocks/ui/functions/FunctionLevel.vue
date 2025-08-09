<script lang="ts" setup>
import type { FunctionLevel, HumanFunctionType } from "@types";
import { computed } from "vue";

const props = defineProps<{ 
  lvl: FunctionLevel;
  functionType?: HumanFunctionType;
}>();

const LINE_WIDTH = 4;
const LINE_HEIGHT = 4;
const LINE_COUNT = 8;

const SPACING = 2;
const width = LINE_WIDTH * LINE_COUNT + SPACING * (LINE_COUNT - 1);

// Opacity для залитых функций (base, creative, limit, back) - 50%
// Для незалитых (pain, role, activate, suggestive) - 100%
const indicatorOpacity = computed(() => {
  if (!props.functionType) return 1;
  
  const filledFunctions = ['base', 'creative', 'limit', 'back'];
  return filledFunctions.includes(props.functionType) ? 0.5 : 1;
});
</script>

<template>
  <svg
    :width="width"
    :height="LINE_HEIGHT"
    xmlns="http://www.w3.org/2000/svg"
    class="function-level"
    :style="{ opacity: indicatorOpacity }"
  >
    <rect
      v-for="i in LINE_COUNT"
      :key="i"
      :opacity="i <= props.lvl ? 1 : 0.25"
      :width="LINE_WIDTH"
      :height="LINE_HEIGHT"
      :x="(i - 1) * (LINE_WIDTH + SPACING)"
      fill="currentColor"
      rx="1"
    />
  </svg>
</template>
