<script lang="ts" setup>
import { defineProps } from "vue";
import type {
  HumanFunctionType,
  IconNameType,
  FunctionAspectVariantType,
} from "@types";
import { UiSvg, UiText } from "@shared/ui";

import { FUNCTION_CARD_WITHOUT_ICON, LARGE_FUNCTION_CARD } from "../../config";
import model from "../../model";
import FunctionLevel from "./FunctionLevel.vue";

const props = defineProps<{
  function: HumanFunctionType;
  aspectVariant: FunctionAspectVariantType;
  aspectIcon?: IconNameType;
  aspectName: string;
  disabled?: boolean;
}>();

const hasIcon = !FUNCTION_CARD_WITHOUT_ICON.includes(props.function);
const isLarge = LARGE_FUNCTION_CARD.includes(props.function);
const iconSize = isLarge ? "96" : "64";
</script>

<template>
  <div
    :class="{
      'function-card--large': isLarge,
      'function-card--disabled': props.disabled,
      [`function-card--function-${props.function}`]: true,
    }"
    class="function-card"
  >
    <div class="function-card__background"></div>
    <div class="function-card__head">
      <div class="function-card__purpose">
        <FunctionLevel :lvl="model.getLevel(props.function)" />
        <UiText
          color="inherit"
          preset="small"
          class="function-card__purpose-name"
        >
          {{ model.getName(props.function) }}
        </UiText>
      </div>

      <div class="function-card__head-icons">
        <UiSvg
          :name="props.aspectVariant"
          color="inherit"
          size="16"
          class="function-card__head-icon"
        />
        <UiText color="inherit" preset="small">
          {{ model.getNumber(props.function) }}
        </UiText>
      </div>
    </div>
    <UiSvg
      v-if="hasIcon"
      :name="props.aspectIcon"
      :size="iconSize"
      color="inherit"
      class="function-card__icon"
    />
    <UiText color="inherit" preset="subtitle" class="function-card__name">
      {{ props.aspectName }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 8px;

.function-card {
  --function-color: #{colors.$quadra};
  --function-border: 1px solid #{colors.$quadra};
  --function-background: transparent;
  --function-background-opacity: 1;

  flex: 1 1 auto;
  position: relative;
  padding: $gap;
  border-radius: 4px;
  border: var(--function-border);
  color: var(--function-color);
  min-height: 80px;

  &__background {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background: var(--function-background);
    opacity: var(--function-background-opacity);
    z-index: 0;
  }

  &__head {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 1;

    &-icons {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-top: -4px;
    }

    &-icon {
      opacity: 0.6;
    }
  }

  &__purpose {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-name {
      opacity: 0.5;
      margin-left: -1px;
    }
  }

  &__icon {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__name {
    position: absolute;
    bottom: $gap;
    left: $gap - 2px;
  }

  &--large {
    height: 108px;
  }

  &--function {
    &-base {
      --function-color: #{colors.$white};
      --function-border: none;
      --function-background: linear-gradient(
        158.38deg,
        #{colors.$role} -14.75%,
        #{colors.$quadra} 67.11%
      );
    }

    &-creative {
      --function-color: #{colors.$white};
      --function-border: none;
      --function-background: linear-gradient(
        225.63deg,
        #{colors.$role} -12.69%,
        #{colors.$quadra} 71.14%
      );
    }

    &-limit,
    &-back {
      --function-color: #{colors.$white};
      --function-border: none;
      --function-background: #{colors.$quadra};
      --function-background-opacity: 0.8;
    }

    &-pain,
    &-role {
      opacity: 0.6;
    }
  }

  &--disabled {
    pointer-events: none;
    touch-action: none;
    cursor: none;
    opacity: 0.1;
  }
}
</style>
