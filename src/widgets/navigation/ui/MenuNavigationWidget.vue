<script lang="ts" setup>
import { NavigationTab } from "@entities/navigation";
import {
  SociotypePortraitTrioKids,
  SociotypePortraitTrioYoungs,
  SociotypeQuadraIconsBlock,
} from "@entities/sociotypes";
</script>

<template>
  <nav class="navigation">
    <div class="navigation__row">
      <NavigationTab
        :to="$appRoutes.whatIsIt"
        class="navigation__tab col-50"
        label="Что это такое?"
        iconName="square-0"
      />

      <NavigationTab
        :to="$appRoutes.disclaimer"
        class="navigation__tab col-50"
        label="Дисклеймер"
        iconName="square-1"
      />
    </div>

    <div class="navigation__row">
      <NavigationTab
        :to="$appRoutes.sociotypes"
        class="navigation__tab col-100 with-image-tab"
        label="Социотипы"
      >
        <template #icon>
          <SociotypeQuadraIconsBlock only-icons quadrasSize="24" />
        </template>
        <template #bottom>
          <SociotypePortraitTrioYoungs class="with-image-tab__img" />
        </template>
      </NavigationTab>
      <NavigationTab
        :to="$appRoutes.intertypes"
        class="navigation__tab col-100 intertypes-tab"
        label="Интертипные отношения"
        iconName="square-2"
      >
        <template #top>
          <div class="intertypes-tab__icons">
            <UiSvg name="parallel" color="pink" size="24" />
            <UiSvg name="beneficiary" color="yellow" size="32" />
            <UiSvg name="pragmatic" color="green" size="48" />
            <UiSvg name="activity" color="turquoise" size="64" />
          </div>
        </template>
      </NavigationTab>
    </div>

    <div class="navigation__row">
      <NavigationTab
        :to="$appRoutes.howToDefine"
        class="navigation__tab col-60"
        label="Как определять тип?"
        iconName="ghost"
      />

      <NavigationTab
        :to="$appRoutes.tests"
        class="navigation__tab col-40"
        label="Тесты"
        iconName="presentation-chart-bar-alt"
      />
    </div>

    <div class="navigation__row">
      <NavigationTab
        :to="$appRoutes.theory"
        class="navigation__tab col-100"
        label="Теория"
        iconName="justify-left"
      />
    </div>

    <div class="navigation__row navigation__row--tab-bg-grey">
      <NavigationTab
        to="#"
        class="navigation__tab col-40 navigation__tab--soon"
        label="Профиль"
        iconName="user-square"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>

      <NavigationTab
        to="#"
        class="navigation__tab col-60 people-tab navigation__tab--soon"
        label="Люди"
        iconName="users"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
        <template #bottom>
          <UiText class="people-tab__announcement" color="accent">
            В разработке
          </UiText>
        </template>
      </NavigationTab>

      <NavigationTab
        to="#"
        class="navigation__tab col-50 navigation__tab--soon"
        label="Специалисты"
        iconName="diamond"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>

      <NavigationTab
        to="#"
        class="navigation__tab col-50 navigation__tab--soon"
        label="Коллективы"
        iconName="briefcase-alt"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>
    </div>

    <div class="navigation__row">
      <NavigationTab
        to="#"
        class="navigation__tab col-100 kids-tab with-image-tab navigation__tab--soon"
        label="Дети"
        iconName="chart-bubble"
      >
        <template #bottom>
          <div class="in-development">
            <UiText color="accent">В разработке</UiText>
            <UiSvg color="accent" name="cone" />
          </div>

          <SociotypePortraitTrioKids class="with-image-tab__img" />
        </template>
      </NavigationTab>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "./NavigationWidget.scss";

.people-tab {
  position: relative;
  &__announcement {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
}

.intertypes-tab {
  &__icons {
    display: flex;
    align-items: flex-start;
  }
}

.kids-tab {
  position: relative;
  .in-development {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
