<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
import type { LinkTabPropsType } from "@types";
import { defineProps } from "vue";

const props = defineProps<LinkTabPropsType>();
</script>

<template>
  <RouterLink :to="props.to" class="link-tab">
    <UiSvg :name="props.iconName" class="link-tab__icon" />
    <span class="link-tab__title">{{ props.label }}</span>
    <slot></slot>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";

.link-tab {
  padding: 8px;
  display: inline-block;
  
  color: var(--text-color);
  border: 0.5px solid colors.$grey;
  border-radius: 4px;

  &__icon {
    width: 24px;
    height: 24px;
    color: var(--text-color);
    opacity: 0.5;
  }

  &__title {
    margin-top: 8px;
    display: inline-block;
    width: 100%;
  }
}
</style>
