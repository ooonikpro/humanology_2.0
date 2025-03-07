<script setup lang="ts">
import type { IconNameType, IconSizeType, TextColorType } from "@types";
import { getIconMap } from "@shared/lib";

const iconMap = getIconMap();

const { color, size, ...props } = defineProps<{
  name: IconNameType;
  color?: TextColorType;
  size?: IconSizeType;
}>();
</script>

<template>
  <i
    :class="[
      {
        [`ui-icon--size-${size}`]: size,
      },
      props.name,
      color && `g-color--${color}`,
    ]"
    class="ui-icon"
    v-html="iconMap[props.name]"
  ></i>
</template>

<style lang="scss">
@use "../styles/variables/colors.scss";

.ui-icon {
  display: inline-flex;
  aspect-ratio: 1/1;

  svg {
    width: 100%;
    height: 100%;
  }

  &--size {
    @each $size in 12, 16, 20, 24, 32, 48, 64, 80, 96, 128 {
      &-#{$size} {
        width: #{$size}px;
        height: #{$size}px;
      }
    }
  }
}
</style>
