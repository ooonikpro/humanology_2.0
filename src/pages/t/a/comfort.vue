<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";

</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="aspect_comfort" iconSize="80" title="Ощущение" subtitle="Si — Пространственные соотношения" />

    <UiText>
      Интровертная часть аспекта сенсорика — ощущения. Называется так же «Сенсорика ощущений» или «Белая сенсорика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Несёт информацию о соотношениях в пространстве, об ощущениях организма, о комфорте.
    </UiText>

    <UiText>
      Показывает влияние внешних факторов на самочувствие человека.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">

      <UiListItem>
        Существование в среде ощущений, восприятие окружающего мира через любые ощущения своего тела осязание, обоняние, вкус, самочувствие, чистоплотность.
      </UiListItem>

      <UiListItem>
        Оценка свойств окружающих предметов через ощущения, которые от них возникают.
      </UiListItem>

      <UiListItem>
        Способность различать качества ощущений.
      </UiListItem>

      <UiListItem>
        Ощущение окружающего пространства, эстетическое удовольствие, физическое удовлетворение (телесные удовольствия), комфорт.
      </UiListItem>

    </UiList>

    <hr />

    <UiText preset="subtitle" color="accent">Знаки аспекта</UiText>

    <div class="sign-block">

      <div class="sign-title">
        <UiSvg name="extensive" color="fire" size="24" />
        <UiText preset="large" color="fire">
          Экстенсивная
        </UiText>
      </div>

      <UiText>
        Максимизация комфорта — расслабленные, сглаженные ощущения.
      </UiText>

      <UiText color="accent">
        Приятные ощущения, комфорт, удобство, гармония, красота, привлекательность, отдых, здоровье, расслабленность, хорошее самочувствие, удовольствие, наслаждение, чувствительность.
      </UiText>
    </div>

    <div class="sign-block">

      <div class="sign-title">
        <UiSvg name="intensive" color="water" size="24" />
        <UiText preset="large" color="water">
          Интенсивная
        </UiText>
      </div>

      <UiText>
        Минимизация дискомфорта — острые, взбадривающие, контрастные ощущения.
      </UiText>

      <UiText color="accent">
        Неприятные, острые ощущения, дискомфорт, неудобство, дисгармония, безобразие, непривлекательность, работа, усталость, напряжение, болезнь, плохое самочувствие, страдание, боль.
      </UiText>

    </div>

    <hr />
    
    <UiText preset="subtitle" color="accent">
      Эксперты сенсорики комфорта
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="ISFP" gender="female" />

      <UiText>
        <span class="g-color--earth">Дипломат</span> — эксперт <span class="g-color--fire">экстенсивного Комфорта</span>, стремится к приятному в окружающем мире как никто другой, его влекут простые житейские радости и удовольствия: вкусная еда, красивый интерьер, отдых на природе, комфорт обстановки, как бы направлен на прием приятных ощущений в малых дозах на окружающем его пространстве.
      </UiText>

      <SociotypesCardMiniWidget sociotype-id="ISTP" gender="male" />

      <UiText>
        <span class="g-color--earth">Мастер</span> — эксперт <span class="g-color--water">интенсивного Комфорта</span>, сильнее реагирует на отрицательные, неприятные, острые ощущения, стремясь уйти от напряжения, неудобства и дискомфорта. Реакция отличается большей силой и распространяется на большее, чем у <span class="g-color--earth">Дипломата</span>, расстояние. 
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

  .sign-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sign-title {
    display: flex;
    align-items: end;
    gap: 4px;
  }
}

a {
  text-decoration: underline;
}
</style>
