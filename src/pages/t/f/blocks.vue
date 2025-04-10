<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="test-simple" title="Блоки и кольца" />

    <UiText>
      Аспекты всегда используются в блоке, состоящем из пары аспектов, что
      обеспечивает возможность согласовывать процессы непосредственного
      восприятия и оценки полученной информации.
    </UiText>

    <UiText preset="large" color="accent">
      В блоке могут находиться только соседние аспекты из одного и того же
      кольца.
    </UiText>

    <hr />

    <UiText preset="subtitle" color="accent">Кольца функций</UiText>

    <hr />
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

  .function-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
