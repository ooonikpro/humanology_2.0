<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="zap" title="Курсы" />

    <UiText preset="large" color="accent">
      Тут будет информация по курсам…
    </UiText>

    <UiText>Их будет два, но позже…</UiText>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
  padding-right: 12px;

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.2;
    background-color: colors.$accent;
  }
}

a {
  text-decoration: underline;
}
</style>
