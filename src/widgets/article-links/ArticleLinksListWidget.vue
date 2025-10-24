<script setup lang="ts">
import { SociotypeQuadraIconsBlock } from "@entities/sociotypes";
import { PsychotypeIconsBlock } from "@entities/clubs-and-psychotypes";
import ArticleLinksTitle from "./ArticleLinksTitle.vue";
import ArticleLink from "./ArticleLink.vue";
</script>

<template>
  <section class="article-links-list-widget">
    <ArticleLinksTitle class="article-links-list-widget__title">
      Свежие статьи
    </ArticleLinksTitle>

    <ul id="article-links-list" class="article-links-list-widget__cards">
      <li class="article-links-list-widget__card">
        <ArticleLink
          :to="$appRoutes.sexualPrograms"
          label="Сексуальные программы квадр"
        >
          <template #icon>
            <SociotypeQuadraIconsBlock
              class="article-links-list-widget__card-icons"
              quadras-size="24"
            />
          </template>
        </ArticleLink>
      </li>
      <li class="article-links-list-widget__card">
        <ArticleLink
          :to="$appRoutes.groupCompatibility"
          label="Совместимость психогрупп"
        >
          <template #icon>
            <PsychotypeIconsBlock
              class="article-links-list-widget__card-icons"
              icon-size="24"
              color="accent"
            />
          </template>
        </ArticleLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.article-links-list-widget {
  margin-top: 24px;

  &__title {
    padding: 8px;
  }

  &__cards {
    margin-top: 8px;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  &__card {
    &-icons {
      display: flex;
      flex-flow: row nowrap;
      align-self: flex-start;
    }
  }
}
</style>
