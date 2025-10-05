<script setup lang="ts"></script>

<template>
  <h2 class="article-links-title">
    <a href="#article-links-list" class="article-links-title__link">
      <UiSvg name="document" size="20" />
      <UiText preset="large">
        <slot />
      </UiText>
    </a>
  </h2>
</template>

<style lang="scss" scoped>
.article-links-title {
  &__link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 4px;
  }
}
</style>
