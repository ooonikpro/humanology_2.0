<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { BlockNameType } from "@types";
import model from "../../model";

const props = defineProps<{
  name: BlockNameType;
  leftInactive?: boolean;
  rightInactive?: boolean;
}>();
const emit = defineEmits(["leftClick", "rightClick"]);

const handleLeftClick = () => emit("leftClick");
const handleRightClick = () => emit("rightClick");
</script>

<template>
  <div
    :class="{
      [`block-with-functions--${props.name}`]: true,
    }"
    class="block-with-functions"
  >
    <div
      :class="{
        'block-with-functions__left--inactive': props.leftInactive,
      }"
      class="block-with-functions__left"
      @click="handleLeftClick"
    >
      <slot
        v-bind="{ leftFunctionName: model.getLeftFunctionName(props.name) }"
        name="left"
      />
    </div>

    <div
      :class="{
        'block-with-functions__right--inactive': props.rightInactive,
      }"
      class="block-with-functions__right"
      @click="handleRightClick"
    >
      <slot
        v-bind="{ rightFunctionName: model.getRightFunctionName(props.name) }"
        name="right"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/mixins/bem";

$gap: 8px;

.block-with-functions {
  display: flex;
  flex-wrap: nowrap;
  gap: $gap;

  &__left--inactive,
  &__right--inactive {
    pointer-events: none;
    touch-action: none;
    opacity: 0.2;
  }

  @include bem.modificatorForChildren("ego") {
    &__left {
      flex: 1 0 calc(55% - $gap);
    }

    &__right {
      flex: 1 0 calc(45% - $gap);
    }
  }

  @include bem.modificatorForChildren("superego") {
    &__left {
      flex: 1 0 calc(45% - $gap);
    }

    &__right {
      flex: 1 0 calc(55% - $gap);
    }
  }

  @include bem.modificatorForChildren("id") {
    &__left {
      flex: 1 0 calc(55% - $gap);
    }

    &__right {
      flex: 1 0 calc(45% - $gap);
    }
  }

  @include bem.modificatorForChildren("superid") {
    &__left {
      flex: 1 0 calc(45% - $gap);
    }

    &__right {
      flex: 1 0 calc(55% - $gap);
    }
  }
}
</style>
