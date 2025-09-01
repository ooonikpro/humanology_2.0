<script setup lang="ts">
import { TestsProgressStatus } from "@features/tests";

const props = defineProps<{
  title: string;
  currentQuestionIndex: number;
  questionAmount: number;
  isCompleted?: boolean;
}>();
</script>

<template>
  <header class="test-header">
    <UiText preset="subtitle" color="black">{{ props.title }}</UiText>
    <TestsProgressStatus v-bind="props" />
  </header>
</template>

<style lang="scss" scoped>
.test-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
