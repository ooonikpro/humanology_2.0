<script lang="ts" setup>
import type { ToCallback } from "@kitbag/router";
import { UiText, UiSvg } from "@shared/ui";
import type { Aspect } from "@types";

const props = defineProps<{
  iconName: Aspect;
  to: ToCallback;
  title?: string;
  description?: string;
  tags: string[];
}>();
</script>

<template>
  <article class="aspect-article article">
    <UiSvg
      :name="props.iconName"
      class="aspect-article__icon"
      size="48"
      color="accent"
    />

    <RouterLink :to="props.to" class="aspect-article__link article__link">
      <UiText
        force-tag="h3"
        preset="large"
        color="accent"
        class="aspect-article__title"
      >
        <slot name="title">{{ props.title }}</slot>
      </UiText>

      <UiSvg name="chevron-right" size="24" color="accent" />
    </RouterLink>

    <UiText preset="body" class="aspect-article__description">
      <slot name="description">{{ props.description }}</slot>
    </UiText>

    <div class="aspect-article__tags article__tags">
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

.aspect-article {
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: repeat(3, max-content);
  column-gap: 8px;

  &__link {
    grid-row: 1/1;
    grid-column: 2/2;
  }

  &__icon {
    grid-column: 1/1;
    grid-row: 1/3;
  }

  &__description {
    grid-row: 2/2;
    grid-column: 2/2;
  }

  &__tags {
    grid-column: 1/3;
  }
}
</style>
