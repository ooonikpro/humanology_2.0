<script setup lang="ts">
import type { OptionWithIconType } from "@types";
import { useVariousTab } from "../hooks/useVariousContent";

const props = defineProps<{
  title: string;
  targetContentId: string;
  subtitle?: string;
  iconName?: OptionWithIconType["iconName"];
}>();

const { setOwnContentId, isSelected } = useVariousTab(props.targetContentId);
</script>

<template>
  <UiVariant
    :label="props.title"
    :subtitle="props.subtitle"
    :icon-name="props.iconName"
    :is-selected="isSelected"
    class="various-tab"
    @click="setOwnContentId"
  />
</template>

<style lang="scss" scoped>
.various-tab {
  flex: 1 0 36%;
  gap: 0;
  cursor: pointer;
}
</style>
