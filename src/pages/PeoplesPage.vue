<script setup lang="ts">
import { UiBottomSheet } from "@shared/ui";
import { ref } from "vue";

const isSheetOpen = ref(false);
const isSheetInsideOpen = ref(false);

function handleSheetClose() {
  isSheetOpen.value = false;
}
</script>

<template>
  <UiBottomSheet :is-open="isSheetOpen" @close="handleSheetClose">
    <template #title>
      <h3>
        Блок Эго
        <span>Знаю</span>
      </h3>
    </template>

    <template #header>
      <div style="width: 150px; height: 150px; background-color: red"></div>
      <div style="width: 150px; height: 150px; background-color: red"></div>
    </template>

    <div
      v-for="n in 5"
      :key="n"
      style="width: 200px; height: 200px; background-color: blue"
      @click="isSheetInsideOpen = true"
    ></div>

    <UiBottomSheet
      :isOpen="isSheetInsideOpen"
      @close="isSheetInsideOpen = false"
    >
      inside modal content
    </UiBottomSheet>
  </UiBottomSheet>
  <div @click="isSheetOpen = true">Page about people</div>
</template>

<style scoped lang="scss"></style>
