<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute } from "@kitbag/router";

const route = useRoute("aspects.card");

const ComponentName = defineAsyncComponent(
  () => import(`./content/${route.params.aspect}.vue`),
);
</script>

<template>
  <component :is="ComponentName" />
</template>
