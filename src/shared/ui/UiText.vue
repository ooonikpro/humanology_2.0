<script lang="ts" setup>
import { defineProps } from "vue";
import type { TextColorType } from "@types";

const {
  color = "black",
  preset = "body",
  ...props
} = defineProps<{
  forceTag?: string;
  color?: TextColorType;
  preset?:
    | "display"
    | "heading"
    | "title"
    | "title-alternative"
    | "subtitle"
    | "subtitle-alternative"
    | "large"
    | "body"
    | "small";
}>();

const presetTag = (() => {
  if (preset == "small") {
    return "span";
  }

  if (preset === "display") {
    return "h1";
  }

  if (preset === "heading") {
    return "h2";
  }

  if (["title", "title-alternative"].includes(preset)) {
    return "h3";
  }

  if (["subtitle", "subtitle-alternative"].includes(preset)) {
    return "h4";
  }

  return "p";
})();
const tag = props.forceTag ?? presetTag;
</script>

<template>
  <component
    :is="tag"
    class="ui-text"
    :class="[`ui-text--preset-${preset}`, `g-color--${color}`]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/variables/fonts";

.ui-text {
  &--preset {
    &-display {
      font-family: fonts.$family-default;
      font-size: 64px;
      line-height: 72px;
      font-weight: 400;
    }

    &-heading {
      font-family: fonts.$family-default;
      font-size: 48px;
      line-height: 56px;
      font-weight: 400;
    }

    &-title {
      font-family: fonts.$family-default;
      font-size: 36px;
      line-height: 44px;
      font-weight: 400;
    }

    &-title-alternative {
      font-family: fonts.$family-alternative;
      font-size: 36px;
      line-height: 44px;
      font-weight: 500;
    }

    &-subtitle {
      font-family: fonts.$family-default;
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
    }

    &-subtitle-alternative {
      font-family: fonts.$family-alternative;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
    }

    &-large {
      font-family: fonts.$family-default;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }

    &-body {
      font-family: fonts.$family-default;
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
    }

    &-small {
      font-family: fonts.$family-default;
      font-size: 13px;
      line-height: 16px;
      font-weight: 400;
    }
  }
}
</style>
