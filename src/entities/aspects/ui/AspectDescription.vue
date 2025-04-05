<script lang="ts" setup>
import type { RouteLocationRaw } from "vue-router";

import type { IconNameType } from "@types";

const props = defineProps<{
  iconName?: IconNameType;
  to: RouteLocationRaw;
  title: string;
  subtitle?: string;
  tags?: string[];
}>();
</script>

<template>
  <article class="aspect-description">
    <NuxtLink :to="props.to" class="aspect-description__head">
      <UiSvg
        v-if="props.iconName"
        :name="props.iconName"
        class="aspect-description__icon"
        size="64"
        color="accent"
      />

      <div class="aspect-description__title">
        <UiText force-tag="h3" preset="subtitle" color="accent">
          {{ props.title }}
        </UiText>

        <UiText v-if="props.subtitle" preset="body">
          {{ props.subtitle }}
        </UiText>
      </div>

      <UiSvg
        name="chevron-right"
        size="24"
        color="accent"
        class="aspect-description__chevron"
      />
    </NuxtLink>

    <div v-if="$slots.default" class="aspect-description__body">
      <slot />
    </div>

    <UiTags v-if="props.tags" color="dark-grey" :tags="props.tags" />
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.aspect-description {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  background-color: colors.$beige;
  border-radius: 4px;
  gap: 4px;

  &__head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
  }

  &__title {
    margin-right: auto;
  }
}
</style>
