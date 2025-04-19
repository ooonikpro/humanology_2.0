<script setup lang="ts">
import { functionsModel } from "@entities/functions-and-blocks";
import { AspectDescription } from "@entities/aspects";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget iconName="square-5" title="Функции" />

    <UiText>
      Психическая функция — это инструмент психики, с помощью которого она
      взаимодействует с реальностью. Представляют собой способности человека
      воспринимать и обрабатывать информацию по различным информационным
      аспектам.
    </UiText>

    <UiText preset="large" color="accent">
      Каждая функция работает с определенным аспектом жизни. Всего существует
      восемь соционических функций.
    </UiText>

    <UiText>
      Они ограничены своим кругом деятельности, взаимодействует с определённым
      аспектом реальности, воспринимает, обрабатывает и выдает информацию,
      связанную с одним из аспектов информационного метаболизма.
    </UiText>

    <hr />

    <UiText color="accent">
      Лучше рассматривать функции вместе с пониманием блоков, колец, мерностей и
      признаков.
    </UiText>

    <div>
      <UiLinkBlock
        iconName="test-simple"
        iconColor="accent"
        bg="beige"
        to="/t/f/blocks"
      >
        Блоки и кольца
      </UiLinkBlock>

      <UiLinkBlock
        iconName="test-complex"
        iconColor="accent"
        bg="beige"
        to="/t/f/signs"
      >
        Мерности и признаки
      </UiLinkBlock>
    </div>

    <hr />

    <UiText preset="subtitle" color="accent">Функции</UiText>

    <div class="function-list">
      <AspectDescription
        v-for="f in functionsModel.getAllFunctions()"
        :key="f"
        :title="functionsModel.getName(f)"
        :tags="functionsModel.getTags(f)"
        :to="$appRoutes.functionCard(f)"
      >
        {{ functionsModel.getDescription(f) }}
      </AspectDescription>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.page {
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
