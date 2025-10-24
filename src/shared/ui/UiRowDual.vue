<script setup lang="ts" generic="T">
import UiText from "./UiText.vue";

type SharedProps = {
  leftText: string;
  rightText: string;
};

type BothLink = {
  link?: never;
  leftLink: string;
  rightLink: string;
};

type OneLink = {
  link: string;
  leftLink?: never;
  rightLink?: never;
};

const props = defineProps<(OneLink | BothLink) & SharedProps>();
</script>

<template>
  <div class="ui-row-dual">
    <NuxtLink :to="props.link || props.leftLink">
      <UiText
        preset="large"
        color="black"
        force-tag="span"
        class="ui-row-dual__text"
      >
        {{ props.leftText }}
      </UiText>
    </NuxtLink>
    <span class="ui-row-dual__line"></span>
    <NuxtLink :to="props.link || props.rightLink">
      <UiText preset="small" color="dark-grey" class="ui-row-dual__text">
        {{ props.rightText }}
      </UiText>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/colors";

.ui-row-dual {
  height: 24px;
  display: flex;
  align-items: baseline;
  gap: 8px;

  &__line {
    height: 1px;
    flex-grow: 1;
    position: relative;
    background: linear-gradient(90deg, colors.$quadra 0%, colors.$white 100%);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-bottom: 1px dotted colors.$white;
    }
  }
}
</style>
