<script setup lang="ts">
import { UiText } from "@shared/ui";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
<div class="page">

  <PageHeaderWidget iconName="presentation-chart-bar-alt" title="Тесты" />

  <UiText preset="subtitle" color="accent">
    О точности тестов
  </UiText>

  <UiText preset="large" color="fire">
    Тесты не дают 100% точности, потому что люди врут – даже самим себе. Рассматривайте тесты как один из факторов, а не как окончательный вердикт.
  </UiText>

  <UiText>
    Наблюдения за поведением, внешностью, речью являются факторами, которые стоит учитывать первичнее теста.
  </UiText>

  <UiText>
    Ошибаются даже профессионалы. Самый надежный способ – комбинировать разные методы и сверять результаты у независимых экспертов.
  </UiText>

  <UiText preset="large" color="accent">
    Наибольшую достоверность даёт применение разных методов и независимое определение типа несколькими людьми.
  </UiText>

  <hr />
  
  <UiText preset="subtitle" color="accent">
    Экспресс-тест Мегедь-Овчарова
  </UiText>
  
  <UiText>
    Один из самых старинных соционических тестов на русском языке.
    Состоит из 4 пар утверждений по основным дихотомиям. В каждой паре, помеченных буквами, необходимо выбрать только одно, которое вам больше подходит.
  </UiText>

  <UiText color="accent">
    <i>3 минуты на прохождение теста.</i>
  </UiText>

  <hr />

  <UiText preset="subtitle" color="accent">
    Тест Воробьева
  </UiText>

  <UiText preset="large" color="accent">
    В 70% случаев результаты теста и результаты последующего типирования полностью совпали.
  </UiText>

  <UiText>
    В 5% случаев было явно видно, что результат теста ошибочен. В остальных 25% случаев испытуемые выявляли признаки искажения типа, в результате чего нельзя было с полной уверенностью ни утвердить, ни опровергнуть результат теста.
  </UiText>

  <UiText>
    Cоздан Виталием Воробьевым и содержит 28 пар слов.
  </UiText>

  <UiText color="dark-grey">
    <i>При заполнении теста человеком, знающим соционику, тестирование получается необъективным, поскольку он если не сознательно, то подсознательно пытается предугадать результат. Человек, не знающий соционику, внимательно и объективно заполняющий тест в 70% случаев получает правильный результат.</i>
  </UiText>

  <UiText color="accent">
    <i>5-6 минут на прохождение теста.</i>
  </UiText>

  <hr />

  <UiText preset="subtitle" color="accent">
    Тест Филатовой
  </UiText>

  <UiText preset="large" color="accent">
    Cоздан Екатериной Филатовой и содержит 40 вопросов.
  </UiText>

  <UiText>
    Лично я сомневаюсь в достоверности любых тестов, но этот, судя по отзывам, вроде является самым точным.
  </UiText>

  <UiText color="accent">
    <i>10 минут на прохождение теста.</i>
  </UiText>

  <hr />

  <UiText preset="subtitle" color="accent">
    Опросник Кейрси
  </UiText>

  <UiText preset="large" color="accent">
    Разработан в 1956 году профессором Калифорнийскоrо университета Дэвидом Кейрси для изучения типичных способов поведения и личностных особенностей.
  </UiText>

  <UiText>
    Содержит 70 вопросов. Все ответы равноценны, правильных или неправильных среди них нет.
  </UiText>

  <UiText color="accent">
    <i>15 минут на прохождение опросника.</i>
  </UiText>




</div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

  .page {
  display: flex;
  flex-direction: column;
  gap: 12px;
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