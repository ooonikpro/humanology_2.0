<script setup lang="ts">
import type { HumanFunctionType } from "@types";
import { FUNCTION_CARD_WITHOUT_BACKGROUND_IMAGE } from "../../config";

const props = defineProps<{
  function: HumanFunctionType;
}>();

const hasBackgroundImage = !FUNCTION_CARD_WITHOUT_BACKGROUND_IMAGE.includes(
  props.function,
);

type FunctionWithBackground = Exclude<HumanFunctionType, "back" | "role">;
</script>

<template>
  <div class="function-background" />
  <UiSvg
    v-if="hasBackgroundImage"
    :name="`blink_${props.function as FunctionWithBackground}`"
    :class="[`function-background-image--function-${props.function}`]"
    class="function-background-image"
  />
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$card-gap: 4px;

@keyframes base-function {
    0% {
      top: 10%;
    }

    50% {
      top: 25%;
    }

    100% {
      top: 10%;
    }
}

@keyframes creative-function {
    0% {
      left: -10%;
    }

    50% {
      left: 5%;
    }

    100% {
      left: -10%;
    }
}

@keyframes limit-function {
    0% {
      right: -15%;
    }

    50% {
      right: 0%;
    }

    100% {
      right: -15%;
    }
}

@keyframes pain-function {
    0% {
      bottom: -108px;
      opacity: 0.1;
    }

    50% {
      bottom: -128px;
      opacity: 0.2;
    }

    100% {
      bottom: -108px;
      opacity: 0.1;
    }
}

@keyframes activate-function {
    0% {
      left: 10%;
    }

    50% {
      left: 25%;
    }

    100% {
      left: 10%;
    }
}

@keyframes suggestive-function {
    0% {
      left: -25%;
    }

    50% {
      left: -50%;
    }

    100% {
      left: -25%;
    }
}


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
  color: rgba(colors.$white, 0.15);

  &--function {
    &-base {
      width: 100%;
      height: 88px;
      left: 0;
      animation: base-function 5s ease-in-out infinite;
    }

    &-creative {
      width: 320px;
      height: 200px;
      left: 0%;
      bottom: -10%;
      animation: creative-function 5s ease-in-out infinite;
    }

    &-limit {
      width: 111px;
      height: 153px;
      top: -50%;
      right: -12px;
      animation: limit-function 5s ease-in-out infinite;
    }

    &-pain {
      width: 360px;
      height: 360px;
      left: -64px;
      bottom: -128px;
      color: var(--function-aspect-color);
      opacity: 0.1;
      animation: pain-function 5s ease-in-out infinite;
    }

    &-activate {
      width: 88px;
      height: 139px;
      left: 35%;
      bottom: -13px;
      animation: activate-function 5s ease-in-out infinite;
    }

    &-suggestive {
      width: 372px;
      height: 139px;
      right: -7px;
      bottom: -15px;
      animation: suggestive-function 5s ease-in-out infinite;
    }

    &-activate,
    &-suggestive {
      opacity: 0.1;
      color: var(--function-aspect-color);
    }
  }
}
</style>
