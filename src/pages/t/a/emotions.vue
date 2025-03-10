<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";

</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="aspect_emotions" iconSize="80" title="Эмоции" subtitle="Fe — Энергетические состояния" />

    <UiText>
      Экстравертная часть аспекта этика — чувства. Называется так же «Этика эмоций» или «Черная этика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Показывает энергетические состояния человека, весь спектр эмоций. Обрабатывает информацию относительно энергетических процессов в объектах.
    </UiText>

    <UiText>
      Эмоциональное состояние, восприятие и оценка — все это относится к этике эмоций.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">

      <UiListItem>
        Существование в мире эмоций.
      </UiListItem>

      <UiListItem>
        Восприятие и оценка окружающего мира через эмоции.
      </UiListItem>

      <UiListItem>
        Умение различать положительные и отрицательные эмоции, их оттенки, стремление к положительным эмоциям, хорошему настроению.
      </UiListItem>

      <UiListItem>
        Пребывание в эмоциональных состояниях, переживания, радость или печаль, драматизм или комизм.
      </UiListItem>

      <UiListItem>
        Энтузиазм, впечатлительность, эмоциональный комфорт.
      </UiListItem>

      <UiListItem>
        Восприятие звуков как характеристики различных эмоциональных состояний и интенсивности процессов.
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
        Гостеприимные эмоции — простодушные, одноплановые, без двойного дна.
      </UiText>

      <UiText color="accent">
        Положительные эмоции, радость, веселье, эмоциональный подъём, воодушевление, улыбка, смех, энтузиазм, оптимизм, хорошее настроение, переживание счастья.
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
        Шокирующие эмоции — трагикомизм, язвительность, высмеивание, двусмысленность.
      </UiText>

      <UiText color="accent">
        Отрицательные эмоции, горе, печаль, грусть, эмоциональный спад, депрессия, плач, слезы, недовольство, пессимизм, плохое настроение, переживание несчастья.
      </UiText>

    </div>

    <hr />
    
    <UiText preset="subtitle" color="accent">
      Эксперты этики эмоций
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="ESFJ" gender="female" />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span> — эксперт <span class="g-color--water">интенсивных Эмоций</span>, направлен на уход, избавление от отрицательных эмоций, плохого настроения, подавленности, пессимизма. Его эмоциональные проявления отличаются большой силой и контрастностью и касаются часто незнакомых, посторонних людей.
        </UiText>

        <SociotypesCardMiniWidget sociotype-id="ENFJ" gender="female" />

        <UiText>
          <span class="g-color--water">Наставник</span> — эксперт <span class="g-color--fire">экстенсивных Эмоций</span>, направлен не на уход от отрицательных, а на притяжение и накапливание положительных эмоций. Его эмоциональные проявления отличаются богатством оттенков и нюансов и лучше всего видны в небольших компаниях близких знакомых.
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
