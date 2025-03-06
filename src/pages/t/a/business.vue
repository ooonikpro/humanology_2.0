<script setup lang="ts">
import { UiText } from "@shared/ui";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
<div class="page">

  <PageHeaderWidget iconName="aspect-business" title="Дела" />

  <UiText preset="subtitle" color="accent">
    Аспект отвечающий за оценку эффективности, рациональности и практического применения ресурсов.
  </UiText>

  <UiText>
    Он показывает, какие качества объекта можно использовать в деятельности, как оптимизировать работу и достичь наилучшего результата.
  </UiText>

  <hr />

  <UiText>
    Суть этого аспекта — в понимании целесообразности любых действий. Восприятие окружающего мира через деловую логику строится на анализе поступков, фактов и процессов, способности отличать логичные и нелогичные решения, а также умение выбирать наилучший способ действий в данных обстоятельствах.
  </UiText>

  <UiText>
    Отвечает за способность ориентироваться в движении и пространстве, оценивать действия людей с точки зрения их рациональности и продуктивности. Определяет склонность к созданию технологий, методов работы, систематизации ресурсов и оптимизации процессов.
  </UiText>

  <UiText>
    Деловая логика — это основа эффективного действия, позволяющая анализировать ресурсы, контролировать процессы, достигать целей и преодолевать внешние воздействия.
  </UiText>

  <hr />
  
  <UiText preset="subtitle" color="accent">
    Знаки аспекта
  </UiText>
  
  <UiText>
    В процессе наполнения……
  </UiText>

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