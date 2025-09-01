<script setup lang="ts">
import type { QuadrasType, TextColorType } from "@types";

const {
  currentQuestionIndex = 0,
  questionAmount = 100,
  ...props
} = defineProps<{
  resultQuadra: QuadrasType | null;
  fallbackColor: TextColorType;
  questionAmount?: number;
  currentQuestionIndex?: number;
}>();

const progress = computed(() => {
  return Math.round(((currentQuestionIndex + 1) / questionAmount) * 100);
});

const color = computed(() => {
  return props.resultQuadra || props.fallbackColor;
});
</script>

<template>
  <UiProgressBar :percent="progress" :color="color" />
</template>

<style lang="scss" scoped></style>
