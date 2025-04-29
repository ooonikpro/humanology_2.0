<script setup lang="ts">
import { sociotypeModel } from "@entities/sociotypes";
import { capitalize } from "@shared/lib";

const props = defineProps<{
  characteristic: string;
  value: string;
}>();

// some_word -> SomeWord
const transformCharacteristic = (ch: string) => {
  if (ch.includes("_")) {
    return ch
      .split("_")
      .map((word) => capitalize(word))
      .join("");
  }
  return capitalize(ch);
};

const normalizeValue = computed(() =>
  props.value.split(" ").filter((v) => !!v),
);

const checkValidPair = <T extends string>(
  pair: string[],
  oppositeFunc: (val: T) => T,
) => {
  const [opposite, value] = [
    oppositeFunc(pair[0] as T),
    oppositeFunc(pair[1] as T),
  ];
  return !!value && !!opposite && value === pair[0] && opposite === pair[1];
};

const transformedCharacteristic = computed(() => {
  if (normalizeValue.value.length > 1) {
    const { getOppositeYungDichotomy, getOppositeReinin } = sociotypeModel;
    if (checkValidPair(normalizeValue.value, getOppositeYungDichotomy)) {
      return "Dichotomy";
    }

    if (checkValidPair(normalizeValue.value, getOppositeReinin)) {
      return "Reinin";
    }
  }
  return transformCharacteristic(props.characteristic);
});

const Component = defineAsyncComponent(() => {
  return import(
    `./sheet-content/${transformedCharacteristic.value}SheetContent.vue`
  );
});
</script>

<template>
  <component
    :is="Component"
    :characteristic="props.characteristic"
    :value="normalizeValue"
  ></component>
</template>

<style lang="scss" scoped></style>
