<script lang="ts" setup>
import type { BlockNameType, SociotypeIdType, AspectType } from "@types";
import { computed } from "vue";
import model from "../../model";
import { sociotypeModel } from "@entities/sociotypes";

const props = defineProps<{
  name: BlockNameType;
  leftInactive?: boolean;
  rightInactive?: boolean;
  sociotypeId?: SociotypeIdType;
}>();

// Получаем цвет правой (маленькой) функции для соединительной линии
const connectorColor = computed(() => {
  if (!props.sociotypeId) {
    return "#e0e0e0"; // Fallback цвет
  }

  const rightFunctionName = model.getRightFunctionName(props.name);
  const rightFunctionAspect = sociotypeModel.getAspectByFunction(props.sociotypeId, rightFunctionName);
  
  // Получаем цвет на основе аспекта правой функции
  switch (rightFunctionAspect) {
    case "logic":
    case "business":
      return "#f6c0b1"; // $pink для логики
    case "people":
    case "emotions":
      return "#d7dd93"; // $green для этики
    case "ideas":
    case "time":
      return "#b6d1c5"; // $turquoise для интуиции
    case "will":
    case "comfort":
      return "#f6e0b1"; // $yellow для сенсорики
    default:
      return "#e0e0e0"; // Fallback
  }
});
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
