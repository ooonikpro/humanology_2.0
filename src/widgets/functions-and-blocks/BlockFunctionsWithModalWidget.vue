<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { BlockNameType, SociotypeIdType } from "@types";
import {
  BlockWithFunctions,
  FunctionCard,
} from "@entities/functions-and-blocks";
import { sociotypeModel } from "@entities/sociotypes";
import { aspectModel } from "@entities/aspects";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  blockName: BlockNameType;
}>();

const isOpenModal = ref(false);
const closeModal = () => (isOpenModal.value = false);
</script>

<template>
  <BlockWithFunctions :name="props.blockName" @click="isOpenModal = true">
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
  </BlockWithFunctions>

  <slot v-bind="{ isOpenModal, closeModal }" />
</template>
