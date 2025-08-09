<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
  <div class="sociotype-signs-block">
    <div class="sociotype-signs-block__header">
      <UiText preset="small" color="black">{{ props.title }}</UiText>
    </div>

    <div class="sociotype-signs-block__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-signs-block {
  background-color: colors.$white;
  border-radius: 4px;
  padding: 8px;

  &__header {
    padding: 0 12px;
    margin: 0 -8px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: colors.$beige-tone;
    border-radius: 12px;
    position: relative;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    gap: 8px;
  }
}
</style>
