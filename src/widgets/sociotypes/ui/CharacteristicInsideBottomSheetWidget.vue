<script setup lang="ts">
import type { LocationQuery } from "vue-router";
import { OpenBottomSheetByQuery } from "@features/open-bottom-sheet-by-query";
import CharacteristicInsideBottomSheetContent from "./CharacteristicInsideBottomSheetContent.vue";

const checkCharacteristicQuery = (query: LocationQuery) =>
  query.hasOwnProperty("ch") && query.hasOwnProperty("v");
</script>

<template>
  <!-- @vue-generic {{ ch: string, v: string }} -->
  <OpenBottomSheetByQuery
    v-slot="{ data, handleAfterClose, handleClose, isOpen }"
    :predicate="checkCharacteristicQuery"
  >
    <UiBottomSheet
      :isOpen="isOpen"
      @close="handleClose"
      @afterClose="handleAfterClose"
    >
      <CharacteristicInsideBottomSheetContent
        :characteristic="data.ch"
        :value="data.v"
      />
    </UiBottomSheet>
  </OpenBottomSheetByQuery>
</template>

<style lang="scss" scoped></style>
