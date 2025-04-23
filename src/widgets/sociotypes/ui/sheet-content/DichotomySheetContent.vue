<script setup lang="ts">
import type { DichotomyType } from "@types";

const props = defineProps<{
  characteristic: string;
  value: [DichotomyType, DichotomyType];
}>();
</script>

<template>
  <div>
    Dichotomy
    {{ props.value[0] }}
    -
    {{ props.value[1] }}
  </div>
</template>

<style lang="scss" scoped></style>
