<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import { sociotypeModel } from "@entities/sociotypes";
import { intertypeModel } from "@entities/intertypes";

import * as config from "../config";
import BlockFunctions from "./BlockFunctions.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
}>();

const relationRole = computed(() => {
  return sociotypeModel.getSociotypeBy(
    sociotypeModel.getIntertypeRelations(
      props.sociotypeId,
      intertypeModel.getIntertypeOrder("quadral")[0],
    ),
  ).role;
});

const style = computed(() => ({
  "--function-quadral-role-color": `var(--color-quadra-${sociotypeModel.getRoleQuadra(relationRole.value)})`,
}));
</script>

<template>
  <div class="block-functions-list" :style="style">
    <BlockFunctions
      v-for="blockName in config.BLOCKS_ORDER"
      :key="blockName"
      :sociotypeId="props.sociotypeId"
      :blockName="blockName"
    />
  </div>
</template>

<style lang="scss" scoped>
.block-functions-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
