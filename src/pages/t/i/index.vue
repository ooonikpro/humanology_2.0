<script lang="ts" setup>
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";

import {
  IntertypeCard,
  IntertypeGroupProvider,
  intertypeModel,
  IntertypeProvider,
} from "@entities/intertypes";
</script>

<template>
  <div class="intertype-page g-page">
    <PageHeaderWidget iconName="square-2" title="Интертипные отношения" />
    <UiText preset="large" color="accent">
      Одной из главных причин, почему люди обращаются к соционике, является
      желание упростить общение и лучше понимать окружающих.
    </UiText>

    <UiText>
      Соционика показывает, что с разными типами людей взаимодействие
      складывается по-разному: с одними отношения будут легкими и естественными,
      с другими — сложными и требующими усилий.
    </UiText>

    <UiText>
      Это не зависит от личных качеств или опыта, а связано с тем, как устроен
      обмен информации между разными типами психики.
    </UiText>

    <UiText>
      Это естественно — невозможно быть в гармонии со всеми. Аушра
      Аугустинавичюте еще в 1978 году выделила, что в соционике существуют
      благоприятные, нейтральные и неблагоприятные типы отношений.
    </UiText>

    <hr />

    <UiText>
      В благоприятных взаимодействие происходит легко, без особых усилий, в
      нейтральных – спокойно и без особых конфликтов, а в неблагоприятных
      неизбежны частые недопонимания, напряжение и ссоры.
    </UiText>

    <UiText>
      Эти различия объясняются тем, как воспринимается и обрабатывается
      информация разными психотипами.
    </UiText>

    <UiText>
      В одних случаях люди интуитивно дополняют друг друга, а в других —
      оказываются на разных «волнах», что создает сложности в общении.
    </UiText>

    <UiText>
      Знание соционики помогает не только предсказать, какие отношения могут
      сложиться с тем или иным человеком, но и избежать ненужных конфликтов,
      адаптируясь к особенностям взаимодействия.
    </UiText>

    <IntertypeGroupProvider
      v-slot="{ intertypeGroupName, intertypeOrder }"
      v-for="intertypeGroupId in intertypeModel.getIntertypeGroupOrder()"
      :key="intertypeGroupId"
      :intertypeGroupId="intertypeGroupId"
      class="intertype-page__intertypes"
    >
      <hr class="intertype-page__intertypes-separator" />
      <UiText
        force-tag="h3"
        preset="subtitle-alternative"
        color="intertype"
        class="intertype-page__intertypes-title"
      >
        {{ intertypeGroupName }}
      </UiText>

      <IntertypeProvider
        v-slot="intertypeData"
        v-for="intertypeId in intertypeOrder"
        :key="intertypeId"
        :intertypeId="intertypeId"
      >
        <IntertypeCard v-bind="intertypeData" />
      </IntertypeProvider>
    </IntertypeGroupProvider>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.intertype-page {
  hr {
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .half {
    width: 50%;
  }

  &__intertypes {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 32px;

    &-separator {
      background-color: colors.$intertype;
    }

    &-title {
      text-align: left;
      margin-bottom: 12px;
    }
  }
}
</style>
