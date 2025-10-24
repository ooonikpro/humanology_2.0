<script setup lang="ts">
const props = defineProps<{ questionAmount: number; disabled?: boolean }>();

const emits = defineEmits<{
  completeTest: [];
}>();

const currentQuestionIndex = defineModel<number>({
  required: true,
});

const canGoNext = computed(() => {
  return (
    !props.disabled && currentQuestionIndex.value < props.questionAmount - 1
  );
});

const goNextButtonLabel = computed(() => {
  return currentQuestionIndex.value < props.questionAmount - 1
    ? "Далее"
    : "Завершить тест";
});

const next = () => {
  if (canGoNext.value) {
    currentQuestionIndex.value++;
  } else {
    emits("completeTest");
  }
};
</script>

<template>
  <UiBlock v-slot="{ classes }" variant="black">
    <button
      :class="[classes]"
      v-bind="$attrs"
      :disabled="props.disabled"
      class="tests-next-button"
      @click="next"
    >
      <UiText preset="large" force-tag="span" color="inherit">
        {{ goNextButtonLabel }}
      </UiText>
    </button>
  </UiBlock>
</template>

<style lang="scss" scoped>
.tests-next-button {
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
}
</style>
