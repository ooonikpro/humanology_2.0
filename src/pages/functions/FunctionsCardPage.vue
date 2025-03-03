<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute("functions.card");

const ComponentName = defineAsyncComponent(
  () => import(`./content/${route.params.functionName}.vue`),
);
</script>

<template>
  <component :is="ComponentName" />
</template>
