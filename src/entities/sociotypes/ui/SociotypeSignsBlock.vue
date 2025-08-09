<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
  <div class="sociotype-signs-block">
    <div class="sociotype-signs-block__header">
      <UiText color="quadra">{{ props.title }}</UiText>
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
  border-radius: 12px;
  padding: 8px;

  &__header {
    padding: 0 8px 8px;
    margin: 0 -8px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        0,
        rgba(colors.$white, 0) 10%,
        colors.$quadra 98%
      );
      opacity: 0.05;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    border-top: 1px solid colors.$grey;
    padding: 16px 0;
    gap: 8px;
  }
}
</style>
