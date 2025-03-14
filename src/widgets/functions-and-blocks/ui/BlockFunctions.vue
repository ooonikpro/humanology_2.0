<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { BlockNameType, HumanFunctionType, SociotypeIdType } from "@types";
import {
  BlockFunctionsProvider,
  FunctionCard,
} from "@entities/functions-and-blocks";
import { sociotypeModel } from "@entities/sociotypes";
import { aspectModel } from "@entities/aspects";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  blockName: BlockNameType;
  activeFunctionName?: HumanFunctionType;
}>();

const router = useRouter();

const openBottomSheet = (functionName: HumanFunctionType) => {
  if (!props.activeFunctionName) {
    router.replace({
      query: { f: functionName },
    });
  }
};

const isDisabled = (functionName: HumanFunctionType) => {
  if (props.activeFunctionName) {
    return props.activeFunctionName !== functionName;
  }

  return false;
};
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
          aspectModel.getAspectIconName(
            sociotypeModel.getAspectByFunction(
              props.sociotypeId,
              leftFunctionName,
            ),
          )
        "
        :aspectVariant="
          sociotypeModel.getAspectVariantByFunction(
            props.sociotypeId,
            leftFunctionName,
          )
        "
        :disabled="isDisabled(leftFunctionName)"
        @click="() => openBottomSheet(leftFunctionName)"
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
          aspectModel.getAspectIconName(
            sociotypeModel.getAspectByFunction(
              props.sociotypeId,
              rightFunctionName,
            ),
          )
        "
        :aspectVariant="
          sociotypeModel.getAspectVariantByFunction(
            props.sociotypeId,
            rightFunctionName,
          )
        "
        :disabled="isDisabled(rightFunctionName)"
        @click="() => openBottomSheet(rightFunctionName)"
      />
    </template>
  </BlockFunctionsProvider>
</template>
