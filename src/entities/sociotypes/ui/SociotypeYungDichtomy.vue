<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";
import model from "../model";

const props = defineProps<{ yungs: SociotypeDataType["yungs"] }>();
</script>

<template>
  <SociotypeSignsBlock title="Дихотомии Юнга">
    <UiRowDual
      v-for="row in props.yungs"
      :key="row"
      :leftText="model.getYungDichtomyLabel(row)"
      :rightText="model.getOppositeYungDichtomyLabel(row)"
    />
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped></style>
