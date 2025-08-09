<script setup lang="ts">
const emits = defineEmits<{
  close: [];
}>();
</script>

<template>
  <article class="ui-dismissible-info">
    <button class="ui-dismissible-info__close" @click="emits('close')">
      <UiSvg name="close" color="accent" size="24" />
    </button>
    <div class="ui-dismissible-info__content">
      <slot />
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.ui-dismissible-info {
  padding: 12px 40px 12px 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;

  color: colors.$black;
  background-color: colors.$beige;
  border-radius: 12px;

  &__close {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 8px;
    right: 8px;

    cursor: pointer;
    border-radius: 6px;
    background-color: transparent;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(colors.$accent, 0.1);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
