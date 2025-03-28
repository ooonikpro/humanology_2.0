<script setup lang="ts">
import type { HumanFunctionType } from "@types";
import { FUNCTION_CARD_WITHOUT_BACKGROUND_IMAGE } from "../../config";

const props = defineProps<{
  function: HumanFunctionType;
}>();

const hasBackgroundImage = !FUNCTION_CARD_WITHOUT_BACKGROUND_IMAGE.includes(
  props.function,
);
</script>

<template>
  <div class="function-background" />
  <UiSvg
    v-if="hasBackgroundImage"
    :name="`blink_${props.function}`"
    :class="[`function-background-image--function-${props.function}`]"
    class="function-background-image"
  />
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$card-gap: 4px;

.function-background {
  position: absolute;
  inset: 0;
  border-radius: 4px;
  background: var(--function-background);
  opacity: var(--function-background-opacity);
  z-index: 0;
}

.function-background-image {
  position: absolute;
  z-index: 0;
  color: rgba(colors.$white, 0.1);

  &--function {
    &-base {
      width: 100%;
      height: 88px;
      left: 0;
    }

    &-creative {
      width: 252px;
      height: 173px;
      left: -$card-gap;
      bottom: -$card-gap;
    }

    &-limit {
      width: 111px;
      height: 153px;
      top: -50%;
      right: -12px;
    }

    &-pain {
      width: 351px;
      height: 351px;
      left: -78px;
      bottom: -94px;

      opacity: 0.1;
      color: var(--function-color);
    }

    &-activate {
      width: 88px;
      height: 139px;
      left: 35%;
      bottom: -13px;
    }

    &-suggestive {
      width: 372px;
      height: 139px;
      right: -7px;
      bottom: -15px;
    }

    &-activate,
    &-suggestive {
      opacity: 0.1;
      color: var(--function-quadral-role-color);
    }
  }
}
</style>
