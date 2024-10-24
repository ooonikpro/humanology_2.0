<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import AppLoader from "./AppLoader.vue";
import FooterWidget from "@widgets/FooterWidget.vue";
import HeaderWidget from "@widgets/HeaderWidget.vue";
import AppLayout from "@app/AppLayout.vue";

const isLoading = ref(true);

setTimeout(() => (isLoading.value = false), Math.random() * 2500);
</script>

<template>
  <AppLayout>
    <template v-slot:default>
      <RouterView />
    </template>

    <template v-slot:header>
      <HeaderWidget />
    </template>

    <template v-slot:footer>
      <FooterWidget />
    </template>

    <template v-slot:loader><AppLoader v-if="isLoading" /></template>
  </AppLayout>
</template>

<style src="./styles.scss" lang="scss">

</style>
