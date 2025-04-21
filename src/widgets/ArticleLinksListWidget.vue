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
        <UiSvg name="document" size="20" />
        <UiText preset="large">Свежие статьи</UiText>
      </a>
    </li>

    <hr />
    <li class="article-links-list-widget__item">
      <NavigationTab to="/sexual-programs" label="Сексуальные программы квадр">
        <template #icon>
          <SociotypeQuadraIconsBlock class="icons" quadras-size="24" />
        </template>
        <template #top>
          <div class="new">
            <UiText color="earth">Свежая</UiText>
            <UiSvg name="leaf" color="earth" />
          </div>
        </template>
      </NavigationTab>
    </li>
    <li class="article-links-list-widget__item">
      <NavigationTab
        to="/group-compatibility"
        label="Совместимость психогрупп"
        class="article-links-list-widget__navtab"
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
@use "../shared/styles/variables/colors";

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

  &__navtab {
    border: 1px solid colors.$beige;
    margin-top: -8px;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 4px;
  }

  .new {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 4px;
  }
}
</style>
