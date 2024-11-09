<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from "vue";
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "../SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();

const Content = defineAsyncComponent(() => import(`./content/${props.id}.vue`));
</script>

<template>
  <SociotypeSignsBlock
    class="sociotype-brief-desctiption"
    title="Краткое описание"
  >
    <component :is="Content"></component>
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped></style>
