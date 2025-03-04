<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavigationWidget from "@widgets/MainNavigationWidget.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <component :is="Component" />
    </template>

    <template v-else>
      <MainNavigationWidget />
    </template>
  </RouterView>
</template>

<style scoped lang="scss"></style>
