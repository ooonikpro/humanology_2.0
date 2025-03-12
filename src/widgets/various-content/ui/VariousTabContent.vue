<script setup lang="ts">
import { useVariousTabContent } from "../hooks/useVariousContent";

const props = defineProps<{ id: string }>();

const isShow = useVariousTabContent(props.id);
</script>

<template>
  <div v-show="isShow">
    <slot />
  </div>
</template>
