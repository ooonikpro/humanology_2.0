<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "@kitbag/router";
import FooterWidget from "@widgets/FooterWidget.vue";
import HeaderWidget from "@widgets/HeaderWidget.vue";

import AppLayout from "./AppLayout.vue";
import AppLoader from "./AppLoader.vue";

const isLoading = ref(true);

setTimeout(() => (isLoading.value = false), Math.random() * 2500);
</script>

<template>
  <AppLayout>
    <template #header>
      <HeaderWidget />
    </template>

    <template #default>
      <RouterView />
    </template>

    <template #footer>
      <FooterWidget />
    </template>

    <template #loader>
      <AppLoader v-if="isLoading" />
    </template>
  </AppLayout>
</template>

<style src="./App.scss" lang="scss"></style>
