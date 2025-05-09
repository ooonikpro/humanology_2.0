<script lang="ts" setup>
import type { TextColorType, TextPresetType } from "@types";

const {
  color = "black",
  preset = "body",
  ...props
} = defineProps<{
  forceTag?: keyof HTMLElementTagNameMap;
  color?: TextColorType;
  preset?: TextPresetType;
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
    :class="[`ui-text--preset-${preset}`, `g-color--${color}`]"
    class="ui-text"
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
      letter-spacing: -0.02rem;
    }

    &-heading {
      font-family: fonts.$family-default;
      font-size: 48px;
      line-height: 56px;
      font-weight: 400;
      letter-spacing: -0.02rem;
    }

    &-title {
      font-family: fonts.$family-default;
      font-size: 36px;
      line-height: 44px;
      font-weight: 400;
      letter-spacing: -0.02rem;
    }

    &-title-alternative {
      font-family: fonts.$family-alternative;
      font-size: 36px;
      line-height: 44px;
      font-weight: 500;
      letter-spacing: -0.1rem;
    }

    &-subtitle {
      font-family: fonts.$family-default;
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      letter-spacing: -0.02rem;
    }

    &-subtitle-alternative {
      font-family: fonts.$family-alternative;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      letter-spacing: -0.02rem;
    }

    &-large {
      font-family: fonts.$family-default;
      font-size: 18px;
      line-height: 128%;
      font-weight: 400;
      letter-spacing: -0.01rem;
    }

    &-body {
      font-family: fonts.$family-default;
      font-size: 16px;
      line-height: 128%;
      font-weight: 400;
      letter-spacing: -0.01rem;
    }

    &-small {
      font-family: fonts.$family-default;
      font-size: 14px;
      line-height: 128%;
      font-weight: 400;
      letter-spacing: -0.02rem;
    }
  }
}
</style>
