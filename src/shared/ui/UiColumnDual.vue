<script lang="ts" setup>
import UiText from "./UiText.vue";

const props = defineProps<{
  leftTitle: string;
  rightTitle?: string;
  leftLink: string;
  rightLink?: string;
}>();
</script>

<template>
  <div class="ui-column-dual">
    <NuxtLink :to="props.leftLink" class="ui-column-dual__link">
      <UiText color="dark-grey" class="ui-column-dual__title">
        {{ props.leftTitle }}
      </UiText>
      <div class="ui-column-dual__content">
        <slot name="left"></slot>
      </div>
      <slot name="leftBottom"></slot>
    </NuxtLink>

    <NuxtLink
      v-if="props.rightTitle || $slots.right"
      :to="props.rightLink"
      class="ui-column-dual__link"
    >
      <UiText color="dark-grey" class="ui-column-dual__title">
        {{ props.rightTitle }}
      </UiText>
      <div class="ui-column-dual__content">
        <slot name="right"></slot>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-column-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  &__link {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
