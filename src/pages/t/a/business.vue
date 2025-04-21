<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget
      iconName="aspect_business"
      iconSize="80"
      title="Действие"
      subtitle="Te — Свойства объектов"
    />

    <UiText>
      Экстравертная часть аспекта логика — мышление. Называется так же «Деловая
      логика» или «Черная логика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Показывает ресурсы объектов, деятельность, эффективность действий,
      создание неких технологий и методов работы.
    </UiText>

    <UiText>
      Смысл аспекта заключается в выделении в некоем объекте качеств, которые
      можно использовать при своей деятельности. К деловой логике относится
      понятие целесообразности какой-либо деятельности.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">
      <UiListItem>
        Восприятие окружающего мира, людей, себя через поступки, оценка их
        рациональности.
      </UiListItem>

      <UiListItem>
        Способность к анализу фактов, поступков, процессов.
      </UiListItem>

      <UiListItem>
        Умение различать логичные и нелогичные поступки, оценивать их
        целесообразность, оптимизировать деятельность.
      </UiListItem>

      <UiListItem>
        Умение выбрать способ противостояния внешнему воздействию.
      </UiListItem>

      <UiListItem>Восприятие движения и пространства.</UiListItem>
    </UiList>

    <hr />

    <UiText preset="subtitle" color="accent">Знаки аспекта</UiText>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="extensive" color="fire" size="24" />
        <UiText preset="large" color="fire">Экстенсивная</UiText>
      </div>

      <UiText>
        Максимизация прибыли — траты, вложения, риски, комбинации, обкатка
        нового.
      </UiText>

      <UiText color="accent">
        Польза, выгода, экономность, технология, факты, приобретения,
        накопление, купля, сбережения, наведение порядка, практичность.
      </UiText>
    </div>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="intensive" color="water" size="24" />
        <UiText preset="large" color="water">Интенсивная</UiText>
      </div>

      <UiText>
        Минимизация затрат — сбережения, экономия, бережная эксплуатация
        имеющегося, урезывание расходов.
      </UiText>

      <UiText color="accent">
        Бесполезность, невыгодность, использование, применение, износ, расходы,
        траты, рискованность, эксперимент, продажа, торговля, действия в условия
        хаоса, изобретательность.
      </UiText>
    </div>

    <hr />

    <UiText preset="subtitle" color="accent">Эксперты деловой логики</UiText>

    <SociotypesCardMiniWidget sociotype-id="ENTJ" />

    <UiText>
      <span class="g-color--water">Предпринимателя</span>
      — эксперта
      <span class="g-color--water">интенсивных Дел</span>
      , привлекают крупные, рискованные, порой весьма авантюрные дела, для
      исполнения которых надо много двигаться, бывать в отдаленных местах, при
      этом не боится затрат, в надежде на то, что они окупятся в ближайшем
      будущем.
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="ESTJ" />

    <UiText>
      <span class="g-color--fire">Администратор</span>
      — эксперт
      <span class="g-color--fire">экстенсивных Дел</span>
      , предпочитает не рисковать, не вкладывать средства в надежде на удачу, а
      стабильно, качественно работать, рационально организовывать труд,
      экономить, не упускать из внимания подробности, собирать конкретные факты
      в интересующей его довольно узкой сфере.
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
