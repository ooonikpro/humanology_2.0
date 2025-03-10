<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";

</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="aspect_will" iconSize="80" title="Воля" subtitle="Se — Cвойства пространства" />

    <UiText>
      Экстравертная часть аспекта сенсорика — ощущения. Называется так же «Волевая сенсорика» или «Черная сенсорика».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Несёт информацию относительно территории, пространства, власти, лидерства, воли человека.
    </UiText>

    <UiText>
      Умение управлять и вести за собой, следить за границами личного пространства и охранять чужие границы — это все относится к черной сенсорике.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">

      <UiListItem>
        Способность концентрировать внимание на предметах, легко схватывая их внешние качества и отмечая детали.
      </UiListItem>

      <UiListItem>
        Восприятие внешних форм, оценка эстетики объекта и наслаждение его красотой.
      </UiListItem>

      <UiListItem>
        Умение искать и ставить цели в отношении объектов.
      </UiListItem>

      <UiListItem>
        Манипуляция объектами, управление ими посредством силового (иногда физического) давления. Проявление агрессивности.
      </UiListItem>

      <UiListItem>
        Ощущение власти над объектами, умение подчинить их своим целям.
      </UiListItem>

      <UiListItem>
        Состояние мобилизованности, умение мобилизовать других людей, сила воли.
      </UiListItem>

      <UiListItem>
        Физическая сила, активность, настойчивость и упорство в преодолении препятствий, иногда упрямство.
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
        Максимизация силы — поддержание баланса; стремление к сильному, ищущая союзника, обороняющаяся.
      </UiText>

      <UiText color="accent">
        Удержание власти, неподчинение, защита, оборона, ответный удар, контратака, твёрдость, отстаивание своих интересов, волевое давление снизу вверх, сила, воля, обладание.
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
        Минимизация слабости — противоборствующая сила, конфронтационная, нападающая, угрожающая.
      </UiText>

      <UiText color="accent">
        Захват власти, подчинение, нападение, агрессия, атака, инициатива, настойчивость, требовательность, волевое давление сверху вниз, утверждение своих интересов за счёт других, свержение, слабость, безволие, овладение.
      </UiText>

    </div>

    <hr />
    
    <UiText preset="subtitle" color="accent">
      Эксперты этики отношений
    </UiText>

        <UiText>
          <span class="g-color--fire">Лидер</span> — эксперт <span class="g-color--water">интенсивной Воли</span>, ориентирован на достижение крупных задач , обычно связанных со свержением или подавлением превосходящего противника, инициатива исходит при этом обычно от него, при этом он недемонстративен, предпочитает держаться в тени.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span> — эксперт <span class="g-color--fire">экстенсивной Воли</span>, же решает конкретные тактические задачи, любит находиться в центре внимания, его инициатива - это всегда ответ на чей-то вызов, при этом он не нападает, а отстаивает свою территорию и право на лидерство.
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
