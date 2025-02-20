<script lang="ts" setup>
import type { ToCallback } from "@kitbag/router";
import { UiText, UiSvg } from "@shared/ui";
import type { IconNameType } from "@types";

const props = defineProps<{
  iconName?: IconNameType;
  to: ToCallback;
  title: string;
  subtitle?: string;
  tags?: string[];
}>();
</script>

<template>
  <article class="aspect-description">
    <RouterLink :to="props.to" class="aspect-description__head">
      <UiSvg
        v-if="props.iconName"
        :name="props.iconName"
        class="aspect-description__icon"
        size="48"
        color="accent"
      />

      <div class="aspect-description__title">
        <UiText force-tag="h3" preset="large" color="accent">
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
    </RouterLink>

    <div v-if="$slots.default?.()" class="aspect-description__body">
      <slot />
    </div>

    <div v-if="props.tags" class="aspect-description__tags">
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
@use "@shared/styles/variables/colors";

$gap: 8px;

.aspect-description {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px $gap;
  background-color: colors.$beige;
  gap: $gap;

  &__head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
  }

  &__title {
    margin-right: auto;
  }

  &__tags {
    display: flex;
    flex-flow: row wrap;
    gap: 4px;
  }
}
</style>
