<script setup lang="ts">
import type { IconNameType, IconSizeType, TextColorType } from "@types";
import UiSvg from "./UiSvg.vue";

const props = defineProps<{
  iconName?: IconNameType;
  iconSize?: Extract<IconSizeType, "16" | "24">;
  iconColor?: TextColorType;
}>();
</script>

<template>
  <li class="ui-list-item">
    <UiSvg
      v-if="props.iconName"
      :name="props.iconName"
      :color="props.iconColor"
      :size="props.iconSize"
    />
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.ui-list-item {
  display: flex;
  align-items: top;
  flex-flow: row nowrap;
  gap: 12px;
}
</style>
