<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget
      iconName="aspect_people"
      iconSize="80"
      title="Чувство"
      subtitle="Fi — Cоотношение энергетических состояний"
    />

    <UiText>
      Интровертная часть аспекта этика — чувство. Называется так же «Этика
      отношений» или «Белая этика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Показывает связи между объектами. Отношения между людьми, симпатии,
      антипатии, любовь и ненависть — все это относится к этому аспекту.
    </UiText>

    <UiText>
      Способность устанавливать и поддерживать отношения, оценивать их и видеть
      отношения других людей.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">
      <UiListItem>
        Существование в среде чувств, отношений, симпатий и антипатий.
      </UiListItem>

      <UiListItem>
        Восприятие окружающего через те чувства которые оно вызывает.
      </UiListItem>

      <UiListItem>
        Способность различать отношения и улавливать их оттенки.
      </UiListItem>

      <UiListItem>
        Переживание различных отношений любовь-ненависть, симпатия-антипатия,
        расположение-неприязнь, восхищение.
      </UiListItem>
    </UiList>

    <hr />

    <UiText preset="subtitle" color="accent">Знаки аспекта</UiText>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="extensive" color="fire" size="24" />
        <UiText preset="large" color="fire">Экстенсивная</UiText>
      </div>

      <UiText>Максимизация добра — этика прощения, притяжения.</UiText>

      <UiText color="accent">
        Хорошие отношения, любовь, дружба, симпатия, притяжение, теплота
        отношений, общительность, близкая психологическая дистанция, добро,
        жалость.
      </UiText>
    </div>

    <div class="sign-block">
      <div class="sign-title">
        <UiSvg name="intensive" color="water" size="24" />
        <UiText preset="large" color="water">Интенсивная</UiText>
      </div>

      <UiText>
        Минимизация зла — этика осуждения, дистанцирования, отталкивания,
      </UiText>

      <UiText color="accent">
        Плохие отношения, ненависть, вражда, антипатия, отталкивание, холодность
        отношений, отчужденность, необщительность, далекая психологическая
        дистанция, зло, безжалостность.
      </UiText>
    </div>

    <hr />

    <UiText preset="subtitle" color="accent">Эксперты этики отношений</UiText>

    <SociotypesCardMiniWidget sociotype-id="ISFJ" gender="female" />

    <UiText>
      <span class="g-color--earth">Хранитель</span>
      — эксперт
      <span class="g-color--water">интенсивного Чувства</span>, держится от людей на расстоянии, не подпуская их близко к себе на долгое
      время, оценивает отношения в целом, резко деля людей на друзей и врагов,
      особое внимание уделяет критике зла и стремится уйти от источника плохих
      отношений — человека, который вызывает у него антипатию.
    </UiText>

    <SociotypesCardMiniWidget sociotype-id="INFJ" gender="female" />

    <UiText>
      <span class="g-color--air">Гуманист</span>
      — эксперт
      <span class="g-color--fire">экстенсивного Чувства</span>, прекрасно разбирается в отношениях между людьми, так как общается с ними
      близко, ориентирован на установление положительных отношений — дружбу,
      любовь, теплоту, видит оттенки отношений идет к людям, утверждая добро и
      прощая зло.
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
