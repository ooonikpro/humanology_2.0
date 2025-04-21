<script lang="ts" setup>
import type {
  ReininSignType,
  SociotypeDataType,
  SociotypeIdType,
} from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import useCharacteristicSheet from "../lib/hooks/useCharacteristicSheet";
import model from "../model";

const props = defineProps<{
  id: SociotypeIdType;
  reinin: SociotypeDataType["reinin"];
}>();

const { goToSheet } = useCharacteristicSheet(() => props.id);
const goToReininSheet = (reinin: ReininSignType) => {
  return goToSheet("reinin", [reinin, model.getOppositeReinin(reinin)]);
};
</script>

<template>
  <SociotypeSignsBlock title="Признаки Рейнина">
    <template v-for="(row, $index) in props.reinin" :key="row">
      <UiRowDual
        :link="goToReininSheet(row)"
        :leftText="model.getReininLabel(row)"
        :rightText="model.getOppositeReininLabel(row)"
      />

      <hr v-if="[4, 7].includes($index)" />
    </template>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
hr {
  margin: 8px 0;
}
</style>
