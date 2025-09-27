<script lang="ts" setup>
import type { SociotypeDataType, SociotypeIdType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import useCharacteristicSheet from "../lib/hooks/useCharacteristicSheet";
import model from "../model";

const props = defineProps<{
  id: SociotypeIdType;
  reinin: SociotypeDataType["reinin"];
}>();

const { goToSheet } = useCharacteristicSheet(() => props.id);

const row = computed(() => {
  return props.reinin.map((reinin) => {
    const oppositeReinin = model.getOppositeReinin(reinin);

    return {
      key: `${props.id}-${reinin}`,
      leftLink: goToSheet("reinin", [reinin, oppositeReinin]),
      rightLink: goToSheet("reinin", [oppositeReinin, reinin]),
      leftText: model.getReininLabel(reinin),
      rightText: model.getOppositeReininLabel(reinin),
    };
  });
});
</script>

<template>
  <SociotypeSignsBlock title="Признаки Рейнина">
    <template v-for="({ key, ...reininData }, $index) in row" :key="key">
      <UiRowDual v-bind="reininData" />

      <hr v-if="[4, 7].includes($index)" />
    </template>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
hr {
  margin: 8px 0;
}
</style>
