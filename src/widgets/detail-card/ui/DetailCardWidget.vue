<script setup lang="ts">
import type { DetailCardType, IconNameType } from "@types";

const props = defineProps<{
  iconName?: IconNameType;
  data: DetailCardType;
}>();
</script>

<template>
  <article :class="[`detail-card--${props.data.type}`]" class="detail-card">
    <button class="detail-card__explanation-button">
      <UiSvg name="help-circle" size="24" color="accent" />
    </button>

    <slot name="icon">
      <UiSvg
        :name="props.iconName!"
        class="detail-card__icon"
        size="48"
        color="accent"
      />
    </slot>
    <slot name="title">
      <UiText
        class="detail-card__title"
        force-tag="h3"
        preset="subtitle-alternative"
        color="accent"
      >
        {{ props.data.title }}
      </UiText>
    </slot>

    <UiText
      class="detail-card__subtitle"
      color="accent"
      force-tag="h4"
      preset="subtitle"
    >
      {{ props.data.subtitle }}
    </UiText>

    <UiTags
      :tags="props.data.tags"
      class="detail-card__tags"
      color="accent"
      preset="small"
    />

    <UiText
      v-for="paragraph in props.data.content"
      :key="paragraph"
      class="detail-card__text"
      preset="large"
    >
      {{ paragraph }}
    </UiText>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 8px;

.detail-card {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: $gap;

  cursor: pointer;
  border-radius: 12px;
  border: 1px solid rgba(colors.$accent, 0.15);
  background-color: colors.$beige;

  & > *:not(:first-child, :nth-child(2)) {
    margin-top: $gap;
  }

  &__text:not(:first-of-type) {
    margin-top: $gap * 2;
  }

  &__tags {
    opacity: 0.75;
  }

  &__explanation-button {
    justify-self: flex-end;
    margin-bottom: -$gap * 2;
    cursor: pointer;
  }
}
</style>
