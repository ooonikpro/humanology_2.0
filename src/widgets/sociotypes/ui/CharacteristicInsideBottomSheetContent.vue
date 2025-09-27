<script setup lang="ts">
import type { CharacteristicType } from "@types";
import { capitalize } from "@shared/lib";
import {
  isMentalityCharacteristic,
  isValidCharacteristic,
} from "@features/characteristics";
import DetailCardList from "./sheet-content/DetailCardList.vue";

const props = defineProps<{
  characteristic: string;
  value: string;
}>();

const isMentalityCh = computed(() => {
  return isMentalityCharacteristic(props.characteristic);
});
const isValidCh = computed(() => isValidCharacteristic(props.characteristic));
const sharedProps = computed(() => {
  return {
    values: props.value.split(" "),
    characteristic: props.characteristic as CharacteristicType,
  };
});

const componentName = computed(() => {
  return props.characteristic
    .split("_")
    .filter(Boolean)
    .map(capitalize)
    .join("");
});
const Component = defineAsyncComponent({
  loader: () => {
    return import(`./sheet-content/${componentName.value}SheetContent.vue`);
  },
});
</script>

<template>
  <component
    v-if="isValidCh && isMentalityCh"
    :is="Component"
    v-bind="sharedProps"
  />
  <DetailCardList v-else-if="isValidCh" v-bind="sharedProps" />
  <div v-else>Что-то пошло не так</div>
</template>

<style lang="scss" scoped></style>
