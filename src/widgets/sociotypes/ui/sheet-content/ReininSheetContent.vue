<script setup lang="ts">
import type { ReininSignType } from "@types";

const props = defineProps<{
  characteristic: string;
  value: [ReininSignType, ReininSignType];
}>();
</script>

<template>
  <div>
    Reinin
    {{ props.value[0] }}
    -
    {{ props.value[1] }}
  </div>
</template>

<style lang="scss" scoped></style>
