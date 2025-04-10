<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";

</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="aspect_time" iconSize="80" title="Чутьё" subtitle="Ni — Соотношение изменений" />

    <UiText>
      Интровертная часть аспекта интуиция. Называется так же «интуиция времени» или «черная интуиция».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Несёт информацию о времени, об изменениях в мире, о цикличности явлений, о событиях, происходящих во времени.
    </UiText>

    <UiText>
      Белая интуиция показывает отношения между событиями, которое характеризуется временем.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">

      <UiListItem>
        Существование в мире представлений, образов, воспоминаний и фантазий.
      </UiListItem>

      <UiListItem>
        Восприятие происходящего через отзвук реальных событий во внутреннем состоянии.
      </UiListItem>

      <UiListItem>
        Оценка окружающего мира через соответствие реальных событий внутреннему состоянию по возникающим представлениям и их гармонии.
      </UiListItem>

      <UiListItem>
        Способность проникать во внутренний мир других людей, изучение интересов и проблем, которые их занимают.
      </UiListItem>

      <UiListItem>
        Способность различать оттенки внутренних состояний.
      </UiListItem>

      <UiListItem>
        Ощущение ритма происходящего, темпа событий, ощущение степени созвучности поведения и взглядов окружающих, чувство заполненности своего и чужого времени.
      </UiListItem>

      <UiListItem>
        Представление возможных ситуаций (и невозможных тоже), своего места в них, предчувствие.
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
        Интуиция новизны — надежд, любопытства, стремления в будущее.
      </UiText>

      <UiText color="accent">
        Будущее, изменение ситуации во времени, предсказание, предвидение, постепенное развитие, эволюция, восхождение, динамика перемен, временной поток, воображение, непротиворечивое описание, перемены, шаг за шагом, схождение, конвергенция.
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
        Интуиция избегания опасности — ошибок прошлого, противоречивых тенденций. 
      </UiText>

      <UiText color="accent">
        Прошлое, учет ошибок, избегание опасности, тревожность, смутное чувство, предупреждение, назревание кризиса, революция, скачек во времени, умение застраховаться от неприятностей, резкие сдвиги, противоречивость, момент решительных действий, расхождение, дивергенция.
      </UiText>
    </div>

    <hr />
    
    <UiText preset="subtitle" color="accent">
      Эксперты интуиции времени
    </UiText>

      <SociotypesCardMiniWidget sociotype-id="INFP" gender="female" />

      <UiText>
        <span class="g-color--air">Лирик</span> — эксперт <span class="g-color--water">интенсивного Времени</span>, предчувствует назревающую опасность, крупные, обычно неприятные изменения ситуации, помнит яркие эпизоды прошлого.
      </UiText>

      <SociotypesCardMiniWidget sociotype-id="INTP" />

      <UiText>
        <span class="g-color--air">Критик</span> — эксперт <span class="g-color--fire">экстенсивного Времени</span>, на основе близкого, внимательного, подробного наблюдения за людьми или явлениями может предсказать их поведение в ближайшем будущем.
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
