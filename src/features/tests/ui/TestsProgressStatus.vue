<script setup lang="ts">
const props = defineProps<{
  currentQuestionIndex: number;
  questionAmount: number;
  isCompleted?: boolean;
}>();

const label = computed(() => {
  return props.isCompleted
    ? "Завершен"
    : `${props.currentQuestionIndex + 1} из ${props.questionAmount}`;
});
</script>

<template>
  <UiText preset="small" color="black">
    {{ label }}
  </UiText>
</template>

<style lang="scss" scoped></style>
