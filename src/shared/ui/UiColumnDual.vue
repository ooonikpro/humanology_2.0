<script lang="ts" setup>
import UiText from "./UiText.vue";

const props = defineProps<{ leftTitle: string; rightTitle?: string }>();
</script>

<template>
  <div class="ui-column-dual">
    <div>
      <UiText color="dark-grey" class="ui-column-dual__title">
        {{ props.leftTitle }}
      </UiText>
      <div class="ui-column-dual__content">
        <slot name="left"></slot>
      </div>
      <slot name="leftBottom"></slot>
    </div>

    <div v-if="props.rightTitle || $slots.right">
      <UiText color="dark-grey" class="ui-column-dual__title">
        {{ props.rightTitle }}
      </UiText>
      <div class="ui-column-dual__content">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-column-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  &__content {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
