<script setup lang="ts">
import { defineProps } from "vue";
import UiText from "./UiText.vue";

const props = <
  {
    leftTitle: string;
    leftText: string;
    rightTitle: string;
    rightText: string;
  }
>defineProps();

console.log("dualcolumns:", props);
</script>

<template>
  <div class="ui-column-dual">
    <div>
      <UiText tag="h4" class="ui-column-dual__title">
        {{ props.leftTitle }}
      </UiText>
      <UiText tag="p" class="ui-column-dual__text">
        {{ props.leftText }}
      </UiText>
    </div>
    <div>
      <UiText tag="h4" class="ui-column-dual__title">
        {{ props.rightTitle }}
      </UiText>
      <UiText tag="p" class="ui-column-dual__text">
        {{ props.rightText }}
      </UiText>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/colors";

.ui-column-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  &__title {
  }
  &__text {
    color: colors.$black;
  }
}
</style>
