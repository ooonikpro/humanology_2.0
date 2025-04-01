<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";
import model from "../model";

const props = defineProps<{ reinin: SociotypeDataType["reinin"] }>();
</script>

<template>
  <SociotypeSignsBlock title="Признаки Рейнина">
    <template v-for="(row, $index) in props.reinin" :key="row">
      <UiRowDual
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
