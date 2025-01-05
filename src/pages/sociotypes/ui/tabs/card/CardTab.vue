<script setup lang="ts">
import {
  SociotypeBriefDescription,
  SociotypeGroupsAndQuadras,
  SociotypeMentality,
  SociotypeReininSigns,
  SociotypeYungDichtomy,
} from "@entities/sociotypes";
import type { SociotypeDataType } from "@types";
import SociotypeSignsBlock from "@entities/sociotypes/ui/SociotypeSignsBlock.vue";
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
