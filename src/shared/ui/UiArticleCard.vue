<script setup lang="ts">
import type { TextColorType, IconNameType } from "@types";

const { themeColor = "accent", ...props } = defineProps<{
  themeColor?: TextColorType;
  iconName?: IconNameType;
  title?: string;
  subtitle?: string;
  tags?: string[];
  description?: string[];
}>();
</script>

<template>
  <article class="ui-article-card">
    <UiSvg
      name="help-circle"
      size="24"
      :color="themeColor"
      class="ui-article-card__help-icon"
    />

    <slot name="icon">
      <UiSvg
        v-if="props.iconName"
        class="ui-article-card__icon"
        :name="props.iconName"
        size="48"
        :color="themeColor"
      />
    </slot>
    <slot name="title">
      <UiText
        v-if="props.title"
        class="ui-article-card__title"
        force-tag="h3"
        preset="subtitle-alternative"
        :color="themeColor"
      >
        {{ props.title }}
      </UiText>
    </slot>

    <UiText
      v-if="props.subtitle"
      class="ui-article-card__subtitle"
      :color="themeColor"
      force-tag="h4"
      preset="subtitle"
    >
      {{ props.subtitle }}
    </UiText>

    <UiTags
      v-if="props.tags"
      class="ui-article-card__tags"
      :tags="props.tags"
      color="accent"
      preset="small"
    />

    <div v-if="props.description" class="ui-article-card__description">
      <UiText
        v-for="paragraph in props.description"
        :key="paragraph"
        preset="large"
      >
        {{ paragraph }}
      </UiText>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 8px;

.ui-article-card {
  padding: $gap;
  border-radius: 8px;
  border: 1px solid
    var(--ui-article-card-border-color, rgba(colors.$accent, 0.15));
  gap: $gap;
  position: relative;

  &__help-icon {
    position: absolute;
    top: $gap;
    right: $gap;
  }

  &,
  &__description {
    display: flex;
    flex-direction: column;
  }

  &__description {
    gap: 4px;
  }

  &__tags {
    opacity: 0.75;
  }
}
</style>
