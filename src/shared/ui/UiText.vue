<script lang="ts" setup>
import { defineProps } from "vue";

const {
  color = "black",
  font = "base",
  ...props
} = defineProps<{
  tag: string;
  font?: "base" | "alternative";
  color?: "black" | "grey" | "accent" | "quadra" | "role";
}>();
</script>

<template>
  <component
    :is="props.tag"
    class="ui-text"
    :class="[`ui-text--font-${font}`, `ui-text--color-${color}`]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-text {
  &--font {
    &-base {
      font-family: "Halvar Mittel Rg", sans-serif;
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
