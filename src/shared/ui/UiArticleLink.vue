<script setup lang="ts">
const props = defineProps<{
  to: string;
  title: string;
  isNew?: boolean;
}>();
</script>

<template>
  <NuxtLink :to="props.to" class="article-link">
    <div class="article-link__content">
      <div class="article-link__icon">
        <slot name="icon" />
      </div>
      
      <div class="article-link__title">
        <slot name="title">{{ props.title }}</slot>
      </div>
    </div>

    <div v-if="props.isNew" class="article-link__badge">
      <UiText color="earth" preset="small">Свежая</UiText>
      <UiSvg name="leaf" color="earth" size="16" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.article-link {
  display: block;
  padding: 12px 12px 8px 12px;
  background-color: colors.$beige-tone;
  border-radius: 12px;
  border: 1px solid colors.$beige;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  min-height: 120px;
  
  &:hover {
    opacity: 0.8;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__icon {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 18px !important;
    line-height: 1.2 !important;
    color: colors.$black;
    margin-top: auto;
    margin-bottom: 0;
    white-space: normal !important;
    word-wrap: break-word !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
    text-overflow: unset !important;
  }

  &__badge {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
}
</style>
