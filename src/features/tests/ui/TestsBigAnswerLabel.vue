<script setup lang="ts">
import model from "../model";

const props = defineProps<{ label: string }>();

const firstSentence = computed(() => model.getFirstSentence(props.label));
const restOfText = computed(() => model.getRestOfText(props.label));
</script>

<template>
  <div class="tests-bug-answer-label">
    <UiText preset="large" color="black">
      {{ firstSentence }}
    </UiText>

    <slot>
      <hr class="tests-bug-answer-label__divider" />
    </slot>

    <UiText preset="body" color="black">{{ restOfText }}</UiText>
  </div>
</template>

<style lang="scss" scoped>
.tests-bug-answer-label {
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;

  &__divider {
    margin: 4px 0;
    opacity: 0.5;
  }
}
</style>
