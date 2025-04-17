<script setup lang="ts">
import type { TextColorType, TextPresetType } from "@types";
import UiBadge from "./UiBadge.vue";

const { bg = "shadow", ...props } = defineProps<{
  tags: string[];
  bg?: TextColorType;
  color?: TextColorType;
  small?: boolean;
}>();
</script>

<template>
  <div class="ui-tags">
    <UiBadge
      v-for="label in props.tags"
      :key="label"
      force-tag="span"
      small
      :color="props.color"
      :bg="bg"
    >
      {{ label }}
    </UiBadge>
  </div>
</template>

<style lang="scss" scoped>
.ui-tags {
  padding-top: 8px;
  display: flex;
  flex-flow: row wrap;
  row-gap: 4px;
  column-gap: 4px;
}
</style>
