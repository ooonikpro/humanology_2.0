<script setup lang="ts">
import TestCardHeader from "./TestCardHeader.vue";

const { to = "#", ...props } = defineProps<{
  to?: string;
  testTitle: string;
  isDisabled?: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    :class="{ 'test-card--disabled': props.isDisabled }"
    class="test-card"
  >
    <TestCardHeader :test-title="props.testTitle">
      <template #badges>
        <slot name="badges"></slot>
      </template>
    </TestCardHeader>
    <UiText preset="body" color="black" class="test-card__description">
      <slot name="description"></slot>
    </UiText>
    <slot name="footer"></slot>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.test-card {
  padding: 12px;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 16px;

  background-color: colors.$grey;
  border-radius: 4px;
  border: 1px solid rgba(colors.$grey, 0.3);

  cursor: pointer;
  color: inherit;

  &--disabled {
    pointer-events: none;
  }
}
</style>
