<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { AspectDescription, aspectModel } from "@entities/aspects";
</script>

<template>
  <div class="aspects-page">
    <PageHeaderWidget iconName="square-4" title="Аспекты" />

    <UiText preset="large" color="accent">
      Информационный аспект – это одна из восьми категорий, на которые психика
      разделяет поток информации для ориентации в коммуникативном пространстве.
    </UiText>

    <UiText>
      Такое деление основано на фундаментальной когнитивной способности человека
      – ограниченному числу элементов, которые он может одновременно удерживать
      в оперативной памяти. Это число известно как число Миллера и составляет
      примерно 7 ± 2 единицы.
    </UiText>

    <UiText>
      Информационные аспекты обрабатываются соционическими функциями, поэтому
      эти термины часто употребляются как синонимы.
    </UiText>

    <UiText>
      Упорядоченный набор функций формирует соционический тип личности,
      определяя, какие аспекты человек воспринимает осознанно, какие интуитивно,
      а какие остаются вне его зоны внимания.
    </UiText>

    <hr />

    <UiText preset="large" color="accent">
      Спектр аспектов представляет собой универсальную систему, с помощью
      которой можно анализировать любые интеллектуальные, психологические и
      социальные явления.
    </UiText>

    <UiText>
      Это логическое продолжение идей Карла Густава Юнга о четырех способах
      восприятия мира: сенсорике (ощущения), логике (мышление), этике (чувства)
      и интуиции.
    </UiText>

    <UiText>
      Каждая из этих четырех функций может проявляться в экстравертной
      (активной) или интровертной (пассивной) форме.
    </UiText>

    <UiText>
      В экстравертном варианте функция фиксирует объективные характеристики
      внешнего мира, его свойства и явления. В интровертном – сосредотачивается
      на внутренних связях, закономерностях и субъективном восприятии. Таким
      образом, число функций удваивается, образуя восемь информационных
      аспектов.
    </UiText>

    <UiText>
      В интровертном – сосредотачивается на внутренних связях, закономерностях и
      субъективном восприятии. Таким образом, число функций удваивается, образуя
      восемь информационных аспектов.
    </UiText>

    <hr />

    <UiText preset="large" color="accent">Экстравертные аспекты</UiText>

    <UiText>
      Традиционно называемые «черными», фиксируют саму сущность явлений, их
      проявления и характеристики. Они описывают энергию, действия, динамику,
      факты и параметры объектов.
    </UiText>

    <UiText preset="large" color="accent">Интровертные аспекты</UiText>

    <UiText>
      «Белые», отражают внутреннюю сторону процессов – закономерности, отношения
      между объектами, внутренние переживания и структуры. Они анализируют, как
      одно соотносится с другим, какую форму приобретает взаимодействие и как
      информация структурируется внутри системы.
    </UiText>

    <hr />

    <UiText>
      Таким образом, вся информация, воспринимаемая человеком, проходит через
      этот восьмеричный фильтр, а работа функций определяет индивидуальный стиль
      мышления и поведения.
    </UiText>

    <hr />

    <div class="aspects">
      <AspectDescription
        v-for="aspect in aspectModel.getAllAspects()"
        :key="aspect"
        :iconName="aspectModel.getAspectIconName(aspect)"
        :title="aspectModel.getAspectName(aspect)"
        :subtitle="aspectModel.getAspectLabel(aspect)"
        :tags="aspectModel.getAspectTags(aspect)"
        :to="$appRoutes.aspectCard(aspect)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.aspects-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
  padding-right: 12px;

  .aspects {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

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
