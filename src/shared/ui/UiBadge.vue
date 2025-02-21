<script lang="ts" setup>
import type { TextColorType } from "@types";
import UiText from "./UiText.vue";

const { color = "black", ...props } = defineProps<{
  color?: TextColorType;
  bg: TextColorType;
  small?: boolean;
}>();
</script>

<template>
  <span
    :class="[
      'ui-badge',
      {
        'ui-badge--small': props.small,
      },
      `g-bg--${props.bg}`,
    ]"
  >
    <UiText :color="color" preset="small">
      <slot />
    </UiText>
  </span>
</template>

<style lang="scss" scoped>
.ui-badge {
  width: max-content;
  border-radius: 4px;
  padding: 4px 8px;

  &--small {
    padding: 0 4px;
  }
}
</style>
