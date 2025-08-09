<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import type { IconNameType, IconSizeType, TextColorType } from "@types";
import UiSvg from "./UiSvg.vue";
import UiText from "./UiText.vue";

const { iconSize = "48", ...props } = defineProps<{
  to: RouteLocationRaw;
  iconName: IconNameType;
  iconColor?: TextColorType;
  iconSize?: IconSizeType;
  textColor?: TextColorType;
  bg?: TextColorType;
}>();
</script>

<template>
  <NuxtLink :to="props.to" class="ui-link-block">
    <UiSvg
      :name="props.iconName"
      color="accent"
      :size="iconSize"
      class="ui-link-block__icon"
    />

    <UiText color="black" preset="large" force-tag="span">
      <slot />
    </UiText>

    <UiSvg
      color="accent"
      class="ui-link-block__arrow"
      name="chevron-right"
      size="24"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "../styles/variables/colors";

.ui-link-block {
  padding: 12px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  margin-top: 16px;

  border-radius: 12px;
  background-color: colors.$beige;
  cursor: pointer;
  text-decoration: none;

  &__arrow {
    margin-left: auto;
  }
}
</style>
