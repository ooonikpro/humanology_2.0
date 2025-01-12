<script setup lang="ts">
import SociotypesByQadrasWidget from "@widgets/sociotypes/SociotypesByQadrasWidget.vue";
import { DefaultArticle, AspectArticle } from "@entities/block-and-functions";
import MainNavigationWidget from "@widgets/MainNavigationWidget.vue";
import { UiText } from "@shared/ui";
</script>

<template>
  <DefaultArticle
    :to="(r) => r('home')"
    :tags="[
      'Реальность',
      'Реальность',
      'Реальность',
      'Реальность',
      'Реальность',
    ]"
  >
    <template #title>Блок Эго</template>
    <UiText preset="body">
      Суть человека, то, что он хочет и стремится
      <wbr />
      дать миру. Способ, с помощью которого
      <wbr />
      он воздействует на других и меняет реальность.
    </UiText>

    <UiText preset="body">
      В этих сферах мы чувствуем уверенность
      <wbr />
      и знаем, как действовать.
    </UiText>
  </DefaultArticle>

  <DefaultArticle
    :to="(r) => r('home')"
    :tags="['Знание цели']"
    title="Базовая функция"
  >
    <UiText preset="body">
      Основа личности. Получается лучше всего.
      <wbr />
      Является самой экспертной.
    </UiText>
  </DefaultArticle>

  <AspectArticle :tags="['Работа']" :to="(r) => r('home')" icon-name="business">
    <template #title>Дела</template>
    <template #description>Деловая логика</template>
  </AspectArticle>

  <SociotypesByQadrasWidget />
  <MainNavigationWidget />
</template>
