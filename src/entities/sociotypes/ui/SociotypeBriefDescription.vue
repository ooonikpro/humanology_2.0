<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from "vue";
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();

const Content = defineAsyncComponent(() => import(`./content/${props.id}.vue`));
</script>

<template>
  <SociotypeSignsBlock
    class="sociotype-short-desctiption"
    title="Краткое описание"
  >
    <component :is="Content"></component>
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped>
.sociotype-short-desctiption {
  &__person-attributes {
    font-size: 18px;
    line-height: 133%;
  }
  &__person-description {
    font-size: 15px;
    line-height: 133%;
  }
}
</style>
