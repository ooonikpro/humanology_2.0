<script lang="ts" setup>
import { defineProps } from "vue";
import { UiSvg } from "@shared/ui";
import type { LinkTabPropsType } from "../config";

const props = defineProps<LinkTabPropsType>();
</script>

<template>
  <RouterLink
    :to="props.to"
    :class="['tab-link', { [`tab-link--size-${props.size}`]: props.size }]"
  >
    <UiSvg :name="props.iconName" class="tab-link__icon" />
    <slot>
      <span class="tab-link__title">{{ props.label }}</span>
    </slot>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.tab-link {
  $gap: 8px;
  padding: 8px;
  flex: 0 0 96px;
  height: 80px;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;

  font-size: 18px;
  line-height: 24px;

  overflow: hidden;
  box-shadow: 0 1px 1px 0 rgba(colors.$black, 0.1);
  background-color: rgba($color: colors.$white, $alpha: 0.5);
  border-radius: 4px;
  cursor: pointer;

  :slotted(*),
  &__title {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &.router-link-active {
    background-color: colors.$white;
  }

  &--size-25 {
    flex: 0 0 calc(25% - $gap);
  }

  &--size-50 {
    flex: 0 0 calc(50% - $gap);
  }

  &--size-75 {
    flex: 0 0 calc(75% - $gap);
  }

  &--size-100 {
    flex: 0 0 calc(100% - $gap);
  }

  &--size-md {
    flex-basis: 142px;
  }

  &--size-lg {
    flex-basis: 166px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    opacity: 0.5;
  }
}
</style>
