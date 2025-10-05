<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { BlockNameType, HumanFunctionType, SociotypeIdType } from "@types";
import { BlockFunctionsProvider } from "@entities/functions-and-blocks";
import BlockFunction from "./BlockFunction.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  blockName: BlockNameType;
  activeFunctionName?: HumanFunctionType;
  withSeparators?: boolean;
}>();

const router = useRouter();

const openBottomSheet = (functionName: HumanFunctionType) => {
  if (!props.activeFunctionName) {
    router.replace({
      query: { f: functionName },
    });
  }
};
</script>

<template>
  <BlockFunctionsProvider :name="props.blockName">
    <template #left="{ leftFunctionName }">
      <BlockFunction
        :sociotype-id="props.sociotypeId"
        :function-name="leftFunctionName"
        :is-disabled="
          props.activeFunctionName &&
          props.activeFunctionName !== leftFunctionName
        "
        :with-separator="props.withSeparators"
        type="left"
        @click="openBottomSheet(leftFunctionName)"
      />
    </template>

    <template #right="{ rightFunctionName }">
      <BlockFunction
        :sociotype-id="props.sociotypeId"
        :function-name="rightFunctionName"
        :is-disabled="
          props.activeFunctionName &&
          props.activeFunctionName !== rightFunctionName
        "
        :with-separator="props.withSeparators"
        type="right"
        @click="openBottomSheet(rightFunctionName)"
      />
    </template>
  </BlockFunctionsProvider>
</template>
