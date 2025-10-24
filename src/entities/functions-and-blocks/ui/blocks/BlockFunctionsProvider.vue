<script lang="ts" setup>
import type { BlockNameType } from "@types";
import model from "../../model";

const props = defineProps<{
  name: BlockNameType;
  leftInactive?: boolean;
  rightInactive?: boolean;
}>();
</script>

<template>
  <div
    :class="{
      [`block-functions-provider--${props.name}`]: true,
    }"
    class="block-functions-provider"
  >
    <div class="block-functions-provider__left">
      <slot
        v-bind="{ leftFunctionName: model.getLeftFunctionName(props.name) }"
        name="left"
      />
    </div>

    <div class="block-functions-provider__right">
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

.block-functions-provider {
  display: flex;
  flex-wrap: nowrap;
  gap: $gap;

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
