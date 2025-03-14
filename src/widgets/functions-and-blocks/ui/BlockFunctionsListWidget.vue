<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import * as config from "../config";
import BlockFunctions from "./BlockFunctions.vue";
import FunctionInsideBottomSheetWidget from "./FunctionInsideBottomSheetWidget.vue";
import FunctionInsideBottomSheetContent from "./FunctionInsideBottomSheetContent.vue";

const props = defineProps<{ sociotypeId: SociotypeIdType }>();
</script>

<template>
  <div class="block-functions-list">
    <BlockFunctions
      v-for="blockName in config.BLOCKS_ORDER"
      :key="blockName"
      :sociotypeId="props.sociotypeId"
      :blockName="blockName"
    />
  </div>

  <FunctionInsideBottomSheetWidget v-slot="propsData">
    <FunctionInsideBottomSheetContent v-bind="propsData" />
  </FunctionInsideBottomSheetWidget>
</template>

<style lang="scss" scoped>
.block-functions-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
