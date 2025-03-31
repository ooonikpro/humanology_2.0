<script lang="ts" setup>
import type { NavigationTabPropsType } from "../types";

const props = defineProps<NavigationTabPropsType>();
</script>

<template>
  <NuxtLink :to="props.to" class="navigation-tab">
    <span class="navigation-tab__content">
      <slot name="icon">
        <UiSvg
          v-if="props.iconName"
          :name="props.iconName"
          class="navigation-tab__icon"
        />
      </slot>
      <span class="navigation-tab__label">{{ props.label }}</span>
    </span>

    <span v-if="$slots.top" class="navigation-tab__top">
      <slot name="top"></slot>
    </span>
    <span v-if="$slots.bottom" class="navigation-tab__bottom">
      <slot name="bottom"></slot>
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.navigation-tab {
  padding: 8px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content;
  align-items: flex-end;
  justify-content: space-between;

  font-size: 18px;
  line-height: 24px;

  overflow: hidden;
  box-shadow: 0 1px 1px 0 rgba(colors.$black, 0.1);
  background-color: colors.$white;
  border-radius: 4px;
  cursor: pointer;

  &__content {
    grid-column: 1/1;
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    opacity: 0.75;
  }

  &__label {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__top {
    align-self: start;
  }

  &__top,
  &__bottom {
    justify-self: flex-end;
  }
}
</style>
