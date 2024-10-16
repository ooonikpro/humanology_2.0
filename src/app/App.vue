<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import AppLoader from "./AppLoader.vue";

const isLoading = ref(true);

setTimeout(() => (isLoading.value = false), Math.random() * 2500);
</script>

<template>
  <RouterView />
  <AppLoader v-if="isLoading" />
</template>

<style src="./styles.scss" lang="scss"></style>
