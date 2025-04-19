<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget
      iconName="aspect_logic"
      iconSize="80"
      title="Знание"
      subtitle="Ti — Соотношение свойств объектов"
    />

    <UiText>
      Интровертная часть аспекта логика — мышление. Называется так же
      «структурная логика», «логика соотношений» или «белая логика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Показывает соотношения между различными объектами, структуру объектов,
      возможность сравнения объектов, их классификацию, закономерности между
      объектами.
    </UiText>

    <UiText>
      Смысл аспекта заключается в выделении объективных соотношений между
      различными объектами и их частями.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">
      <UiListItem>
        Способность логически мыслить устанавливать логические связи, определять
        соотношения, анализировать.
      </UiListItem>

      <UiListItem>
        Восприятие мира через соотношения различных объектов друг с другом, их
        сравнение, выбор главного.
      </UiListItem>

      <UiListItem>
        Способность классифицировать всевозможные объекты, систематизация
        окружающего мира.
      </UiListItem>

      <UiListItem>
        Оценка любой информации по тому, насколько она укладывается в различные
        системы.
      </UiListItem>

      <UiListItem>
        Восприятие пространства как системы расстояний, восприятие своего места
        в социуме.
      </UiListItem>
    </UiList>

    <hr />

    <UiText preset="subtitle" color="accent">Знаки аспекта</UiText>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="extensive" color="fire" size="24" />
        <UiText preset="large" color="fire">Экстенсивная</UiText>
      </div>

      <UiText>
        Логика доказательств / организации — импликативная, «если-то» логика,
        построение цепочек причин и следствий, линейная, однонаправленная,
        укрепляет соответствия, уверенная в своей непогрешимости.
      </UiText>

      <UiText color="accent">
        Конкретность, подробность, детальная проработка, тщательность,
        строгость, место в иерархии, законы, постановления, инструкции, выбор
        лучшего варианта, чёткость функционирования, показатели, отчётность.
      </UiText>
    </div>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="intensive" color="water" size="24" />
        <UiText preset="large" color="water">Интенсивная</UiText>
      </div>

      <UiText>
        Логика опровержений / науки — дизъюнктивная, «или-или» логика,
        разнонаправленная, объемная, голографическая, противоречия, сомнения,
        парадокс.
      </UiText>

      <UiText color="accent">
        Абстрактность, всеобщность, универсальность, система, классификация,
        типология, общие закономерности, объективность, истина, справедливость,
        всестороннее рассмотрение, анализ, расчленение, критерии.
      </UiText>
    </div>

    <hr />

    <UiText preset="subtitle" color="accent">
      Эксперты структурной логики
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="INTJ" />

    <UiText>
      <span class="g-color--air">Аналитик</span>
      — эксперт
      <span class="g-color--water">интенсивного Разума</span>
      , логически анализируя окружающий мир, выделяет его крупные, универсальные
      закономерности, отрицает все отжившее, нелогичное, несправедливое,
      рассматривает любое явление с объективной высоты, расчленяет его на
      составные части, анатомирует, выявляя таким образом его устройство.
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="ISTJ" />

    <UiText>
      <span class="g-color--earth">Инспектор</span>
      — эксперт
      <span class="g-color--fire">экстенсивного Разума</span>
      , поступает противоположным образом, углубляется в выбранную им узкую
      сферу, анализирует подробности, прорабатывает детали, выбирает из многих
      систем самую лучшую, самую четкую и составляет план ее внедрения, вовлекая
      в его выполнение людей и ресурсы.
    </UiText>
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
