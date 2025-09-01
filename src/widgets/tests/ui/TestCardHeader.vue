<script setup lang="ts">
const props = defineProps<{
  testTitle: string;
}>();
</script>

<template>
  <header class="test-card-header">
    <UiText preset="subtitle" color="black" class="test-card-header__title">
      {{ props.testTitle }}
    </UiText>
    <div class="test-card-header__badges">
      <slot name="badges"></slot>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.test-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &__title {
    flex: 1 1 auto;
  }

  &__badges {
    min-width: 0;
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  }
}
</style>
