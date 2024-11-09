<script lang="ts" setup>
import { defineProps } from "vue";

const {
  color = "black",
  font = "base",
  preset = "body",
  ...props
} = defineProps<{
  tag: string;
  font?: "base" | "alternative";
  color?: "black" | "grey" | "accent" | "quadra" | "role";
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
</script>

<template>
  <component
    :is="props.tag"
    class="ui-text"
    :class="[
      `ui-text--font-${font}`,
      `ui-text--color-${color}`,
      `ui-text--preset-${preset}`,
    ]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-text {
  &--preset {
    & display {
      font-size: 64px;
      line-height: 72px;
    }

    &-heading {
      font-size: 48px;
      line-height: 56px;
    }

    &-title {
      font-size: 36px;
      line-height: 44px;
    }

    &-title-alternative {
      font-family: "Halvar Breit Md", sans-serif;
      font-size: 36px;
      line-height: 44px;
      font-weight: 500;
    }

    &-subtitle {
      font-size: 24px;
      line-height: 28px;
    }

    &-subtitle-alternative {
      font-family: "Halvar Breit Md", sans-serif;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
    }

    &-large {
      font-size: 18px;
      line-height: 24px;
    }

    &-body {
      font-size: 15px;
      line-height: 20px;
    }

    &-small {
      font-size: 13px;
      line-height: 16px;
    }
  }

  &--font {
    &-base {
      font-family: "Halvar Mittel Rg", sans-serif;
      font-weight: 400;
    }

    &-alternative {
      font-family: "Halvar Breit Md", sans-serif;
      font-weight: 500;
    }
  }

  &--color {
    &-black {
      color: colors.$black;
    }

    &-grey {
      color: colors.$black;
      opacity: 0.5;
    }

    &-accent {
      color: colors.$accent;
    }

    &-role {
      color: colors.$role;
    }

    &-quadra {
      color: colors.$quadra;
    }
  }
}
</style>
