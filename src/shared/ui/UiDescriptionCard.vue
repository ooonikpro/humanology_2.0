<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import type { TextColorType } from "@types";

const { chevronColor = "accent", ...props } = defineProps<{
  to: RouteLocationRaw;
  title: string;
  titleColor?: TextColorType;
  chevronColor?: TextColorType;
}>();
</script>

<template>
  <NuxtLink
    class="ui-description-card"
    :to="props.to"
    :class="{ 'ui-description-card--cols-3': $slots.icon }"
  >
    <slot name="icon" />

    <div class="ui-description-card__body">
      <div class="ui-description-card__title-block">
        <UiText force-tag="h3" preset="subtitle" :color="props.titleColor">
          {{ props.title }}
        </UiText>
        <slot name="after-title"></slot>
      </div>

      <slot />
    </div>

    <UiSvg
      name="chevron-right"
      size="24"
      :color="chevronColor"
      class="ui-description-card__chevron"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-description-card {
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 12px;

  text-decoration: none;
  background-color: colors.$beige;
  border-radius: 8px;

  &--cols-3 {
    grid-template-columns: max-content 1fr max-content;
  }

  &__body {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
  }

  &__title-block {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 4px;
  }

  &__chevron {
    align-self: flex-start;
  }
}
</style>
