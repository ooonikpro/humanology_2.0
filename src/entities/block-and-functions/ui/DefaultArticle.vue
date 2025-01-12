<script lang="ts" setup>
import { RouterLink, type ToCallback } from "@kitbag/router";
import { UiText, UiSvg } from "@shared/ui";

const props = defineProps<{
  to: ToCallback;
  title?: string;
  tags: string[];
}>();
</script>

<template>
  <article class="default-article article">
    <RouterLink :to="props.to" class="default-article__link article__link">
      <UiText
        force-tag="h3"
        preset="large"
        color="accent"
        class="default-article__title"
      >
        <slot name="title">{{ props.title }}</slot>
      </UiText>

      <UiSvg name="chevron-right" size="24" color="accent" />
    </RouterLink>

    <div class="default-article__description article__description">
      <slot />
    </div>

    <div class="default-article__tags article__tags">
      <UiText
        v-for="label in props.tags"
        :key="label"
        preset="small"
        color="dark-grey"
      >
        {{ label }}
      </UiText>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "./article" as *;
</style>
