<script lang="ts" setup>
import type { FunctionLevel } from "@types";

const props = defineProps<{ lvl: FunctionLevel }>();

const RECT_WIDTH = 4;
const RECT_HEIGHT = 4;
const RECT_COUNT = 8;
const SPACING = 2;

const width = RECT_WIDTH * RECT_COUNT + (RECT_COUNT - 1) * SPACING;
</script>

<template>
  <svg
    :width="width"
    :height="RECT_HEIGHT"
    xmlns="http://www.w3.org/2000/svg"
    class="function-level"
  >
    <rect
      v-for="i in RECT_COUNT"
      :key="i"
      :opacity="i <= props.lvl ? 1 : 0.25"
      :width="RECT_WIDTH"
      :height="RECT_HEIGHT"
      :x="(i - 1) * (RECT_WIDTH + SPACING)"
      fill="currentColor"
      rx="1"
    />
  </svg>
</template>

<style lang="scss" scoped></style>
