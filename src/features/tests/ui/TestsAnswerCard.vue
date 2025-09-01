<script setup lang="ts" generic="T extends string | null">
const props = defineProps<{
  questionId: number;
  variant: T;
  variantLabel?: string;
  answerLabel?: string;
  mini?: boolean;
}>();

const id = useId();
const name = computed(() => `${props.questionId}`);

const pickedVariant = defineModel<T>({
  required: true,
});
const isPicked = computed(() => pickedVariant.value === props.variant);

const answerPreset = computed(() => (props.mini ? "large" : "body"));
</script>

<template>
  <article
    :class="{
      'tests-answer-card--selected': isPicked,
      'tests-answer-card--mini': props.mini,
    }"
    class="tests-answer-card"
    @click="pickedVariant = props.variant"
  >
    <header class="tests-answer-card__header">
      <label :for="id" class="radio">
        <input
          :name="name"
          :value="props.variant"
          :checked="isPicked"
          :id="id"
          type="radio"
          class="radio__input"
        />

        <span class="radio__circle" />
      </label>

      <slot v-if="!props.mini" name="variantLabel">
        <UiText
          v-if="props.variantLabel"
          preset="small"
          color="inherit"
          class="tests-answer-card__variant-label"
        >
          {{ props.variantLabel }}
        </UiText>
      </slot>
    </header>

    <hr class="tests-answer-card__divider" />

    <slot name="answerLabel">
      <UiText
        v-if="props.answerLabel"
        :class="{ 'tests-answer-card__answer-label': props.mini }"
        :preset="answerPreset"
        color="black"
      >
        {{ props.answerLabel }}
      </UiText>
    </slot>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$radio-size: 20px;

.tests-answer-card {
  padding: 12px;

  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 8px;

  position: relative;

  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgba(colors.$grey, 0.3);
  background-color: colors.$white;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(colors.$black, 0.5);
  }

  &--selected {
    border-color: colors.$black;
  }

  &--selected &__variant-label {
    color: colors.$black;
  }

  &--mini {
    gap: 0;
  }

  &--mini &__divider {
    display: none;
  }

  &--mini &__answer-label {
    margin: auto;
    padding-bottom: $radio-size;
  }

  &__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }

  &__variant-label {
    color: colors.$dark-grey;
    transition: color 0.2s ease;
  }

  &__divider {
    margin: 4px 0;
  }
}

.radio {
  width: $radio-size;
  height: $radio-size;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #ccc;
  border-radius: 50%;

  &__input {
    display: none;
  }

  &__input:checked + &__circle {
    background-color: colors.$black;
  }

  &__circle {
    width: 8px;
    height: 8px;

    display: block;
    border-radius: 50%;

    background-color: transparent;
    transition: background-color 0.2s ease;
  }
}
</style>
