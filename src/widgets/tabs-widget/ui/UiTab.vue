<script setup lang="ts">
import type { TabsType } from "../model/data";
import { UiSvg } from "@shared/ui";

const props = defineProps<TabsType>();
</script>

<template>
  <RouterLink :to="props.path" class="tabs-widget__link">
    <UiSvg :name="props.iconName" class="tabs-widget__icon" />
    {{ props.label }}
  </RouterLink>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.tabs-widget__link {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 96px;
  height: 80px;
  padding: 8px;
  font-size: 18px;
  line-height: 24px;
  opacity: 0.5;
  white-space: nowrap;
  box-shadow: 0 1px 1px 0 rgba(colors.$black, 0.1);
  border-radius: 4px;
  cursor: pointer;

  &.router-link-active {
    background-color: colors.$white;
    opacity: 1;
  }

  &.tabs-widget__link_md {
    flex-basis: 142px;
  }

  &.tabs-widget__link_lg {
    flex-basis: 166px;
  }
}
.tabs-widget__icon {
  width: 24px;
  height: 24px;
  opacity: 0.5;
}
</style>
