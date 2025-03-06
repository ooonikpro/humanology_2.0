<script lang="ts" setup>
import type { SociotypeDataType } from "@types";
import SociotypeSignsBlock from "../SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();
</script>

<template>
  <SociotypeSignsBlock title="Краткое описание">
    <component :is="Content" />
  </SociotypeSignsBlock>
</template>
