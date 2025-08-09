<script lang="ts" setup>
import type {
  HumanFunctionType,
  IconNameType,
  FunctionAspectVariantType,
  AspectType,
} from "@types";
import { computed } from "vue";

import { getAspectColor } from "@entities/aspects";
import { FUNCTION_CARD_WITHOUT_ICON, LARGE_FUNCTION_CARD } from "../../config";
import model from "../../model";
import FunctionBackground from "./FunctionBackground.vue";
import FunctionLevel from "./FunctionLevel.vue";

const props = defineProps<{
  function: HumanFunctionType;
  aspectVariant: FunctionAspectVariantType;
  aspectIcon?: IconNameType;
  aspectName: string;
  aspect: AspectType;
  disabled?: boolean;
}>();

const hasIcon = !FUNCTION_CARD_WITHOUT_ICON.includes(props.function);
const isLarge = LARGE_FUNCTION_CARD.includes(props.function);

// Размеры иконок: базовая/суггестивная = 80, творческая/активационная = 64
const iconSize = computed(() => {
  if (props.function === "base" || props.function === "suggestive") {
    return "80";
  } else if (props.function === "creative" || props.function === "activate") {
    return "64";
  }
  return "64"; // fallback
});

// Opacity для творческой и активационной
const iconOpacity = computed(() => {
  return (props.function === "creative" || props.function === "activate") ? "0.75" : "1";
});

// Цвет текста для определенных функций (черный для болевой, ролевой, активационной, суггестивной)
const textColor = computed(() => {
  return (props.function === "pain" || props.function === "role" || 
          props.function === "activate" || props.function === "suggestive") 
    ? "black" : "inherit";
});

// Opacity для номера и названия функции (50% на всех функциях)
const functionTextOpacity = "0.5";

// Отступы для иконок
const iconPosition = computed(() => {
  if (props.function === "base" || props.function === "suggestive") {
    return { right: "8px", top: "16px" };
  } else if (props.function === "creative" || props.function === "activate") {
    return { right: "8px", top: "24px" };
  }
  return { right: "8px", top: "16px" }; // fallback
});

// Opacity для элементных иконок по типам функций
const elementIconOpacity = computed(() => {
  switch (props.function) {
    case "base":           // Базовая - 50%
    case "creative":       // Творческая - 50%
      return "0.5";
    case "limit":          // Защитная - 25%
    case "back":           // Фоновая - 25%
      return "0.25";
    case "pain":           // Болевая - 50%
    case "role":           // Ролевая - 50%
      return "0.5";
    case "activate":       // Активации - 100%
    case "suggestive":     // Суггестивная - 100%
      return "1";
    default:
      return "0.5";
  }
});



const aspectColor = computed(() => {
  switch (props.aspect) {
    case "logic":
    case "business":
      return "#f6c0b1"; // $pink
    case "people":
    case "emotions":
      return "#d7dd93"; // $green
    case "ideas":
    case "time":
      return "#b6d1c5"; // $turquoise
    case "will":
    case "comfort":
      return "#fece30"; // $yellow
    default:
      return "#b6d1c5"; // fallback
  }
});

const aspectBorderColor = computed(() => {
  switch (props.aspect) {
    case "logic":
    case "business":
      return "rgba(246, 192, 177, 0.5)"; // $pink с 50%
    case "people":
    case "emotions":
      return "rgba(215, 221, 147, 0.5)"; // $green с 50%
    case "ideas":
    case "time":
      return "rgba(182, 209, 197, 0.5)"; // $turquoise с 50%
    case "will":
    case "comfort":
      return "rgba(254, 206, 48, 0.5)"; // $yellow с 50%
    default:
      return "rgba(246, 192, 177, 0.5)"; // fallback
  }
});

const getAspectElementIcon = (aspect: AspectType): string => {
  // Используем новые элементные иконки
  switch (aspect) {
    case "logic":
      return "element_logic";
    case "business":
      return "element_business";
    case "people":
      return "element_people";
    case "emotions":
      return "element_emotions";
    case "ideas":
      return "element_ideas";
    case "time":
      return "element_time";
    case "will":
      return "element_will";
    case "comfort":
      return "element_comfort";
    default:
      return "element_ideas"; // fallback
  }
};

// Opacity для иконок intensive/extensive: 100% на болевой, ролевой, активационной, суггестивной
const variantIconOpacity = computed(() => {
  return (props.function === "pain" || props.function === "role" || 
          props.function === "activate" || props.function === "suggestive") ? "1" : "0.5";
});

// Opacity для элементных иконок: 50% на болевой, ролевой, активационной, суггестивной
const elementIconOpacityUpdated = computed(() => {
  if (props.function === "pain" || props.function === "role" || 
      props.function === "activate" || props.function === "suggestive") {
    return "0.5"; // 50% для болевой, ролевой, активационной, суггестивной
  }
  return elementIconOpacity.value; // Существующая логика для остальных
});
</script>

<template>
  <div
    :class="[
      { 'function-card--large': isLarge },
      { 'function-card--disabled': props.disabled },
      `function-card--function-${props.function}`,
    ]"
    :style="`--function-aspect-color: ${aspectColor}; --function-aspect-border-color: ${aspectBorderColor}`"
    class="function-card"
  >
    <FunctionBackground :function="props.function" />

        <!-- Верхний ряд: номер/название слева, вариант справа -->
    <div class="function-card__top">
            <div class="function-card__function-info" :style="{ marginTop: '0px', marginLeft: '4px', marginBottom: '4px' }">
            <div class="function-card__number-name">
              <UiText 
                :color="textColor" 
                preset="small" 
                :style="{ opacity: functionTextOpacity }"
                class="function-card__number"
              >
                {{ model.getNumber(props.function) }}
              </UiText>
              <UiText 
                :color="textColor" 
                preset="small" 
                :style="{ opacity: functionTextOpacity }"
                class="function-card__function-name"
              >
                {{ model.getName(props.function) }}
              </UiText>
            </div>
            <FunctionLevel :lvl="model.getLevel(props.function)" :functionType="props.function" />
          </div>

      <UiSvg
        :name="props.aspectVariant"
        color="inherit"
        size="16"
        :style="{
          position: 'absolute',
          top: '0px',
          right: '4px',
          opacity: variantIconOpacity
        }"
        class="function-card__variant-icon"
      />
    </div>

    <!-- Центральная иконка аспекта только для больших функций -->
    <UiSvg
      v-if="hasIcon && isLarge"
      :name="props.aspectIcon!"
      :size="iconSize"
      color="inherit"
      :style="{
        opacity: iconOpacity,
        position: 'absolute',
        right: iconPosition.right,
        top: iconPosition.top
      }"
      class="function-card__main-icon"
    />

    <!-- Название аспекта -->
    <UiText 
      :color="textColor" 
      preset="subtitle" 
              :style="{
          position: 'absolute',
          bottom: '8px',
          left: '12px',
          opacity: '1'
        }"
      class="function-card__aspect-name"
    >
      {{ props.aspectName }}
    </UiText>

    <!-- Элементная иконка аспекта в правом нижнем углу -->
    <UiSvg
      :name="getAspectElementIcon(props.aspect)"
      color="inherit"
      size="24"
              :style="{
          opacity: elementIconOpacityUpdated,
          position: 'absolute',
          bottom: '8px',
          right: '8px'
        }"
      class="function-card__aspect-element-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 8px;
$card-gap: 4px;

.function-card {
  --function-color: var(--function-aspect-color, #{colors.$quadra});
  --function-border: 1px solid var(--function-aspect-color, #{colors.$quadra});
  --function-background: transparent;
  --function-background-opacity: 1;

  flex: 1 1 auto;
  position: relative;
  padding: $gap;
  border-radius: 12px;
  border: var(--function-border);
  color: var(--function-color);
  min-height: 80px;
  overflow: hidden;
  cursor: pointer;

  &__top {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 1;
    margin-bottom: 8px;
  }

  &__function-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__number-name {
    display: flex;
    gap: 6px;
    align-items: baseline;
  }

  &__number {
    line-height: 1;
  }

  &__function-name {
    font-weight: 400;
    opacity: 0.9;
    line-height: 1.2;
  }

  &__variant-icon {
    opacity: 0.7;
    z-index: 1;
  }

  &__main-icon {
    z-index: 1;
  }

  &__aspect-name {
    z-index: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px); // 12px слева + 12px буфер справа
  }

  &__aspect-element-icon {
    z-index: 2;
  }

  &--large {
    height: 128px;
  }

  &--function {
    &-base {
      --function-color: #{colors.$black};
      --function-border: none;
      --function-background: linear-gradient(
        158.38deg,
        var(--function-aspect-color) -14.75%,
        var(--function-aspect-color) 67.11%
      );
    }

    &-creative {
      --function-color: #{colors.$black};
      --function-border: none;
      --function-background: linear-gradient(
        225.63deg,
        var(--function-aspect-color) -12.69%,
        var(--function-aspect-color) 71.14%
      );
    }

    &-limit,
    &-back {
      --function-color: #{colors.$black};
      --function-border: none;
      --function-background: var(--function-aspect-color);
      --function-background-opacity: 0.5;
    }

    &-pain,
    &-role {
      --function-border: 2px solid var(--function-aspect-border-color, var(--function-aspect-color));
    }

    &-activate,
    &-suggestive {
      --function-border: 2px solid var(--function-aspect-color);
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
