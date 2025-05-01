<script setup lang="ts">
import type { TextColorType } from "@types";
import UiBadge from "./UiBadge.vue";

const {
  bg = "shadow",
  small = true,
  ...props
} = defineProps<{
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
      :small="small"
      :color="props.color"
      :bg="bg"
      force-tag="span"
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
