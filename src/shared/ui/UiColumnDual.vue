<script lang="ts" setup>
import { defineProps } from "vue";
import UiText from "./UiText.vue";

const props = defineProps<{ leftTitle: string; rightTitle: string }>();
</script>

<template>
  <div class="ui-column-dual">
    <div>
      <UiText tag="h4" color="grey" class="ui-column-dual__title">
        {{ props.leftTitle }}
      </UiText>
      <slot name="left"></slot>
    </div>
    <div>
      <UiText tag="h4" color="grey" class="ui-column-dual__title">
        {{ props.rightTitle }}
      </UiText>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-column-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  &__title {
    font-size: 15px;
    line-height: 20px;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 18px;
    line-height: 24px;
  }
}
</style>
