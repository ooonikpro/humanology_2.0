<script lang="ts" setup>
import type { DichotomyType, SociotypeDataType, SociotypeIdType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import useCharacteristicSheet from "../lib/hooks/useCharacteristicSheet";
import model from "../model";

const props = defineProps<{
  id: SociotypeIdType;
  yungs: SociotypeDataType["yungs"];
}>();

const { goToSheet } = useCharacteristicSheet(() => props.id);

const goToDichotomySheet = (yung: DichotomyType) => {
  return goToSheet("yung", [yung, model.getOppositeYungDichotomy(yung)]);
};
</script>

<template>
  <SociotypeSignsBlock title="Дихотомии Юнга">
    <UiRowDual
      v-for="row in props.yungs"
      :key="row"
      :link="goToDichotomySheet(row)"
      :leftText="model.getYungDichtomyLabel(row)"
      :rightText="model.getOppositeYungDichtomyLabel(row)"
    />
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped></style>
