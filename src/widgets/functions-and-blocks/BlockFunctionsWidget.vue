<script lang="ts" setup>
import { defineProps } from "vue";
import type { BlockNameType, SociotypeIdType } from "@types";
import {
  BlockFunctionsProvider,
  FunctionCard,
} from "@entities/functions-and-blocks";
import { sociotypeModel } from "@entities/sociotypes";
import { aspectModel } from "@entities/aspects";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  blockName: BlockNameType;
}>();
</script>

<template>
  <BlockFunctionsProvider :name="props.blockName">
    <template #left="{ leftFunctionName }">
      <FunctionCard
        :function="leftFunctionName"
        :aspectName="
          aspectModel.getAspectName(
            sociotypeModel.getAspectByFunction(
              props.sociotypeId,
              leftFunctionName,
            ),
          )
        "
        :aspectIcon="
          sociotypeModel.getAspectByFunction(
            props.sociotypeId,
            leftFunctionName,
          )
        "
      />
    </template>

    <template #right="{ rightFunctionName }">
      <FunctionCard
        :function="rightFunctionName"
        :aspectName="
          aspectModel.getAspectName(
            sociotypeModel.getAspectByFunction(
              props.sociotypeId,
              rightFunctionName,
            ),
          )
        "
        :aspectIcon="
          sociotypeModel.getAspectByFunction(
            props.sociotypeId,
            rightFunctionName,
          )
        "
      />
    </template>
  </BlockFunctionsProvider>
</template>
