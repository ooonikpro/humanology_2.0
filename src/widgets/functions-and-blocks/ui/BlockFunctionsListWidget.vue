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
  <div :style="style" class="block-functions-list">
    <BlockFunctions
      v-for="(blockName, $index) in config.BLOCKS_ORDER"
      :key="`${props.sociotypeId}-${blockName}-block-function`"
      :sociotype-id="props.sociotypeId"
      :block-name="blockName"
      :with-separators="$index === 1 || $index === 3"
      class="block-functions-list__item"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.block-functions-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
