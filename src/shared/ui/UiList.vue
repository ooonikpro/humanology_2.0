<script setup lang="ts">
import type { IconNameType, IconSizeType, TextColorType } from "@types";

const props = defineProps<{
  iconName: IconNameType;
  iconSize: Extract<IconSizeType, "16" | "24">;
  iconColor: TextColorType;
}>();

provide("$iconProps", props);
</script>

<template>
  <ul class="ui-list">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.ui-list {
  list-style: none;

  > *:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
