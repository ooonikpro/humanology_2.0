<script setup lang="ts">
import type { IconNameType } from "@types";
import { NavigationTab } from "@entities/navigation";
import { SociotypeQuadraIconsBlock } from "@entities/sociotypes";

const psychotypes: IconNameType[] = [
  "aggressor",
  "caring",
  "childlike",
  "victim",
];
</script>

<template>
  <ul id="article-links-list" class="article-links-list-widget">
    <li class="article-links-list-widget__item">
      <a href="#article-links-list" class="article-links-list-widget__title">
        <UiSvg name="document" size="24" />
        <UiText preset="subtitle">Статьи</UiText>
      </a>
    </li>
    <li class="article-links-list-widget__item">
      <NavigationTab
        :to="$appRoutes.sociotypes"
        label="Сексуальные программы квадр"
      >
        <template #icon>
          <SociotypeQuadraIconsBlock class="icons" quadras-size="24" />
        </template>
        <template #top>
          <UiSvg name="leaf" color="earth" />
          <UiText color="earth">Новая</UiText>
        </template>
      </NavigationTab>
    </li>
    <li class="article-links-list-widget__item">
      <NavigationTab
        :to="$appRoutes.sociotypes"
        label="Психо-эмоциональная совместимость"
      >
        <template #icon>
          <div class="icons">
            <UiSvg
              v-for="name in psychotypes"
              :name="name"
              :key="name"
              color="accent"
              size="24"
            />
          </div>
        </template>
      </NavigationTab>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.article-links-list-widget {
  margin-top: 24px;
  list-style: none;

  &__item {
    padding: 8px;

    .icons {
      display: flex;
      flex-flow: row nowrap;
      align-self: flex-start;
    }
  }

  &__title {
    display: flex;
    align-items: flex-start;
    flex-flow: column nowrap;
    gap: 16px;
  }
}
</style>
