<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>();

const emits = defineEmits<{
  exitTests: [];
}>();

const currentQuestionIndex = defineModel<number>({
  required: true,
});

const canGoBack = computed(() => {
  return !props.disabled && currentQuestionIndex.value > 0;
});

const goBackButtonLabel = computed(() => {
  return canGoBack.value ? "Назад" : "К тестам";
});

const back = () => {
  if (canGoBack.value) {
    currentQuestionIndex.value--;
  } else {
    emits("exitTests");
  }
};
</script>

<template>
  <UiBlock v-slot="{ classes }" variant="secondary">
    <button
      :class="[classes]"
      v-bind="$attrs"
      :disabled="props.disabled"
      class="tests-back-button"
      @click="back"
    >
      <UiText preset="large" force-tag="span" color="inherit">
        {{ goBackButtonLabel }}
      </UiText>
    </button>
  </UiBlock>
</template>

<style lang="scss" scoped>
.tests-back-button {
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
}
</style>
