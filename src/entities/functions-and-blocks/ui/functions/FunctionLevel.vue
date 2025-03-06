<script lang="ts" setup>
import type { FunctionLevel } from "@types";

const props = defineProps<{ lvl: FunctionLevel }>();

const LINE_WIDTH = 2;
const LINE_HEIGHT = 4;
const LINE_COUNT = 8;

const width = LINE_WIDTH * (LINE_COUNT * 2 - 1);
</script>

<template>
  <svg
    :width="width"
    :height="LINE_HEIGHT"
    xmlns="http://www.w3.org/2000/svg"
    class="function-level"
  >
    <rect
      v-for="i in LINE_COUNT"
      :key="i"
      :opacity="i <= props.lvl ? 1 : 0.25"
      :width="LINE_WIDTH"
      :height="LINE_HEIGHT"
      :x="(i - 1) * (LINE_WIDTH * 2)"
      fill="currentColor"
      rx="1"
    />
  </svg>
</template>
