<script setup lang="ts">
import type { IconNameType } from "@types";
import UiArticleLink from "@shared/ui/UiArticleLink.vue";
import { SociotypeQuadraIconsBlock } from "@entities/sociotypes";

const psychotypes: IconNameType[] = [
  "aggressor",
  "caring",
  "childlike",
  "victim",
];
</script>

<template>
  <div class="article-links-list-widget">
    <div class="article-links-list-widget__header">
      <a href="#article-links-list" class="article-links-list-widget__title">
        <UiSvg name="document" size="20" />
        <UiText preset="large">Свежие статьи</UiText>
      </a>
    </div>

    <hr />
    
    <div class="article-links-list-widget__cards">
      <UiArticleLink 
        to="/sexual-programs"
      >
        <template #icon>
          <SociotypeQuadraIconsBlock quadras-size="24" />
        </template>
        <template #title>
          Сексуальные<br>программы квадр
        </template>
      </UiArticleLink>
      
      <UiArticleLink
        to="/group-compatibility"
        title="Совместимость психогрупп"
      >
        <template #icon>
          <div class="icons">
            <UiSvg
              v-for="name in psychotypes"
              :key="name"
              :name="name"
              color="accent"
              size="24"
            />
          </div>
        </template>
      </UiArticleLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../shared/styles/variables/colors";

.article-links-list-widget {
  margin-top: 24px;

  &__header {
    padding: 8px;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 4px;
  }

  hr {
    margin: 0 0 8px 0;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    
    .icons {
      display: flex;
      flex-flow: row nowrap;
      align-self: flex-start;
    }
  }
}
</style>
