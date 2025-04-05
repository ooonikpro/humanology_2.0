<script setup lang="ts">
import type { TextColorType, TextPresetType } from "@types";
import UiText from "./UiText.vue";

const props = defineProps<{
  tags: string[];
  preset?: TextPresetType;
  color?: TextColorType;
}>();
</script>

<template>
  <div class="ui-tags">
    <UiText
      v-for="label in props.tags"
      :key="label"
      force-tag="span"
      :color="props.color"
      :preset="props.preset"
    >
      {{ label }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
.ui-tags {
  display: flex;
  flex-flow: row wrap;
  row-gap: 2px;
  column-gap: 8px;
}
</style>
