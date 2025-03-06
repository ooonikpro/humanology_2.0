<script setup lang="ts">
import type { SociotypeDataType } from "@types";

const props = defineProps<{ data: SociotypeDataType }>();

const Content = defineAsyncComponent(
  () => import(`./content/${props.data.id}.vue`),
);
</script>

<template>
  <component :is="Content" />
</template>
