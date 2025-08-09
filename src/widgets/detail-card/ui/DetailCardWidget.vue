<script setup lang="ts">
import type { DetailCardType, IconNameType } from "@types";

const props = defineProps<{
  iconName?: IconNameType;
  data: DetailCardType;
}>();
</script>

<template>
  <article :class="[`detail-card--${props.data.type}`]" class="detail-card">
    <div class="detail-card__header">
      <slot name="icon">
        <UiSvg
          :name="props.iconName!"
          class="detail-card__icon"
          size="64"
          color="accent"
        />
      </slot>
      <slot name="title">
        <UiText
          class="detail-card__title"
          force-tag="h3"
          preset="subtitle"
          color="black"
        >
          {{ props.data.title }}
        </UiText>
      </slot>

      <UiText
        class="detail-card__subtitle"
        color="accent"
        force-tag="h4"
        preset="large"
      >
        {{ props.data.subtitle }}
      </UiText>

      <UiTags
        :tags="props.data.tags"
        class="detail-card__tags"
        color="accent"
        bg="white"
        preset="small"
      />
    </div>

    <UiText
      v-for="paragraph in props.data.content"
      :key="paragraph"
      class="detail-card__text"
      preset="body"
    >
      {{ paragraph }}
    </UiText>

    <button class="detail-card__button">
      <UiText preset="body" color="black">Подробнее</UiText>
      <UiSvg size="24" name="chevron-right" color="black"></UiSvg>
    </button>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 12px;

.detail-card {
  display: flex;
  flex-direction: column;
  gap: $gap;
  padding: $gap;
  background-color: colors.$beige;
  border-radius: 12px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__button {
    opacity: 0.75;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 12px;
    border-radius: 4px;
    height: 40px;
    background-color: colors.$white;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
