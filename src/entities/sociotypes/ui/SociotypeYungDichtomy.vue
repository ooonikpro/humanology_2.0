<script lang="ts" setup>
import type { DichotomyType, SociotypeIdType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import useCharacteristicSheet from "../lib/hooks/useCharacteristicSheet";
import model from "../model";

const props = defineProps<{
  id: SociotypeIdType;
  yungs: DichotomyType[];
}>();

const { goToSheet } = useCharacteristicSheet(() => props.id);

const row = computed(() => {
  return props.yungs.map((yung) => {
    const oppositeYung = model.getOppositeYungDichotomy(yung);

    return {
      key: `${props.id}-${yung}`,
      leftLink: goToSheet("yung", [yung, oppositeYung]),
      rightLink: goToSheet("yung", [oppositeYung, yung]),
      leftText: model.getYungDichtomyLabel(yung),
      rightText: model.getOppositeYungDichtomyLabel(yung),
    };
  });
});
</script>

<template>
  <SociotypeSignsBlock title="Дихотомии Юнга">
    <UiRowDual
      v-for="{ key, ...yungData } in row"
      :key="key"
      v-bind="yungData"
    />
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped></style>
