<script setup lang="ts">
import { useRoute } from "@kitbag/router";
import { computed, defineAsyncComponent } from "vue";

const route = useRoute("tabs");

const TabPage = computed(() => {
  return defineAsyncComponent(
    () => import(`./tabs/${route.params.tabName}.vue`),
  );
});
</script>

<template>
  <div>
    <component :is="TabPage"></component>
  </div>
</template>

<style lang="scss" scoped></style>
