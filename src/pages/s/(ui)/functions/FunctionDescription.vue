<script lang="ts" setup>
import type { HumanFunctionType, SociotypeIdType } from "@types";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  functionName: HumanFunctionType;
}>();

const Component = defineAsyncComponent(
  () => import(`./${props.functionName}/${props.sociotypeId}.vue`),
);
</script>

<template>
  <component :is="Component" />
</template>
