<script setup lang="ts">
import type { FunctionalComponent } from "vue";
import type { IconNameType, IconSizeType, TextColorType } from "@types";

const props = defineProps<{
  iconName: IconNameType;
  iconSize: Extract<IconSizeType, "16" | "24">;
  iconColor: TextColorType;
}>();

defineSlots<{
  default(): unknown;
}>();

const ListItem: FunctionalComponent<{ node: VNode }> = ({ node }) => {
  if (Array.isArray(node.children))
    return node.children.map((li) => h(li as VNode, props));
  return h(node, props);
};
</script>

<template>
  <ul class="ui-list">
    <ListItem
      v-for="(node, $index) in $slots.default?.()"
      :key="node.key ?? $index"
      :node="node"
    />
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
