<script lang="ts" setup>
import type { CharacteristicType } from "@types";

const props = defineProps<{
  characteristic: CharacteristicType;
  values: string[];
}>();
</script>

<template>
  <div>Temperament</div>
</template>

<style lang="scss" scoped></style>
