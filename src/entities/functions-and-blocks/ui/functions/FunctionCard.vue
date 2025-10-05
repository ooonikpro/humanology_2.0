<script lang="ts" setup>
import type {
  HumanFunctionType,
  IconNameType,
  FunctionAspectVariantType,
} from "@types";

import { FUNCTION_CARD_CONFIG } from "../../config";
import model from "../../model";
import FunctionBackground from "./FunctionBackground.vue";
import FunctionLevel from "./FunctionLevel.vue";

const props = defineProps<{
  function: HumanFunctionType;
  aspectVariant: FunctionAspectVariantType;
  aspectIcon?: IconNameType;
  aspectElementIcon: IconNameType;
  aspectName: string;
  disabled?: boolean;
}>();

const currentConfig = computed(() => FUNCTION_CARD_CONFIG[props.function]);
const currentIconSize = computed(() => currentConfig.value.iconSize || "64");
const isLarge = computed(() => {
  return currentConfig.value.size === "large";
});

const functionName = toRef(() => model.getName(props.function));
const functionNumber = toRef(() => model.getNumber(props.function));
const functionLevel = toRef(() => model.getLevel(props.function));
</script>

<template>
  <article
    :class="[
      { 'function-card--large': isLarge },
      { 'function-card--disabled': props.disabled },
      `function-card--function-${props.function}`,
    ]"
    class="function-card"
  >
    <FunctionBackground :function="props.function" />

    <header class="function-card__row function-card__head">
      <UiText color="black" preset="small" class="function-card__number">
        {{ functionNumber }}
      </UiText>
      <UiText color="black" preset="small" class="function-card__name">
        {{ functionName }}
      </UiText>

      <UiSvg
        :name="props.aspectVariant"
        color="inherit"
        size="16"
        class="function-card__head-icon"
      />
    </header>

    <div class="function-card__row">
      <FunctionLevel :lvl="functionLevel" class="function-card__level" />
      <UiSvg
        :name="props.aspectIcon!"
        :size="currentIconSize"
        :class="[
          `function-card__icon--${currentIconSize}`,
          { 'function-card__icon--hidden': !isLarge },
        ]"
        color="inherit"
        class="function-card__icon"
      />
    </div>

    <div class="function-card__row function-card__foot">
      <UiText
        color="black"
        preset="subtitle"
        class="function-card__aspect-name"
      >
        {{ props.aspectName }}
      </UiText>
      <UiSvg
        :name="props.aspectElementIcon"
        size="20"
        color="inherit"
        class="function-card__element-icon"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/bem";

$gap: 8px;
$padding: 8px;
$card-gap: 4px;
$text-opacity: 0.5;

.function-card {
  --function-color: #{colors.$aspect};
  --function-border: 1px solid #{colors.$aspect};
  --function-background: transparent;
  --function-background-opacity: 1;

  flex: 1 1 auto;
  position: relative;
  padding: $gap;

  min-height: 80px;
  display: flex;
  flex-flow: column nowrap;
  gap: $gap;

  border-radius: 12px;
  border: var(--function-border);
  color: var(--function-color);

  overflow: hidden;
  cursor: pointer;

  &__row {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    position: relative;
    z-index: 1;
  }

  &__head {
    gap: 6px;

    &-icon {
      margin-left: auto;
    }
  }

  &__number,
  &__name {
    opacity: $text-opacity;
  }

  &__icon {
    position: absolute;
    top: -$gap;
    right: 0;

    &--hidden {
      display: none;
    }

    &--80 {
      top: -16px;
    }
  }

  &__foot {
    margin-top: auto;
  }

  &__element-icon {
    opacity: 0.5;
  }

  &--large {
    height: 126px;
  }

  &--function {
    &-base,
    &-creative,
    &-limit,
    &-back {
      --function-color: #{colors.$black};
      --function-border: none;
    }

    &-base {
      --function-background: linear-gradient(
        158.38deg,
        #{colors.$aspect} -14.75%,
        #{colors.$aspect} 67.11%
      );
    }

    &-creative {
      --function-background: linear-gradient(
        225.63deg,
        #{colors.$aspect} -12.69%,
        #{colors.$aspect} 71.14%
      );
    }

    &-limit,
    &-back {
      --function-background: #{colors.$aspect};
      --function-background-opacity: 0.5;
    }

    &-pain,
    &-role {
      --function-border: 2px solid #{colors.$aspect-semitransparent};
    }

    &-activate,
    &-suggestive {
      --function-border: 2px solid #{colors.$aspect};
    }
  }

  @include bem.modificatorForChildren("function-base") {
    &__head-icon {
      opacity: 0.5;
    }

    &__level {
      opacity: 0.5;
    }
  }

  @include bem.modificatorForChildren("function-creative") {
    &__icon {
      opacity: 0.75;
    }

    &__head-icon {
      opacity: 0.5;
    }

    &__level {
      opacity: 0.5;
    }
  }

  @include bem.modificatorForChildren("function-limit") {
    &__head-icon {
      opacity: 0.5;
    }

    &__level {
      opacity: 0.5;
    }
  }

  @include bem.modificatorForChildren("function-back") {
    &__head-icon {
      opacity: 0.5;
    }

    &__element-icon {
      opacity: 0.25;
    }

    &__level {
      opacity: 0.5;
    }
  }

  @include bem.modificatorForChildren("function-activate") {
    &__icon {
      opacity: 0.75;
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
