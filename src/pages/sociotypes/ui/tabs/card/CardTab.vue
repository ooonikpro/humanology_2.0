<script setup lang="ts">
import {
  SociotypeGroupsAndQuadras,
  SociotypeMentality,
  SociotypeReininSigns,
  SociotypeYungDichtomy,
  SociotypeSignsBlock,
} from "@entities/sociotypes";
import type { SociotypeDataType } from "@types";
import { defineAsyncComponent } from "vue";

const props = defineProps<{ data: SociotypeDataType }>();

const Content = defineAsyncComponent(
  () => import(`./content/${props.data.id}.vue`),
);
</script>

<template>
  <SociotypeSignsBlock title="Краткое описание">
    <component :is="Content" />
  </SociotypeSignsBlock>
  <SociotypeMentality v-bind="props.data" />
  <SociotypeGroupsAndQuadras v-bind="props.data" />
  <SociotypeYungDichtomy v-bind="props.data" />
  <SociotypeReininSigns v-bind="props.data" />
</template>
