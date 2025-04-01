<script setup lang="ts">
import type { IconNameType, IconSizeType, TextColorType } from "@types";
import UiSvg from "./UiSvg.vue";

const iconData = inject("$iconProps") as {
  iconName: IconNameType;
  iconSize: Extract<IconSizeType, "16" | "24">;
  iconColor: TextColorType;
};
</script>

<template>
  <li class="ui-list-item">
    <UiSvg
      v-if="iconData.iconName"
      :name="iconData.iconName"
      :color="iconData.iconColor"
      :size="iconData.iconSize"
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
