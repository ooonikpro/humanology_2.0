<script lang="ts" setup>
import { NavigationTab } from "@entities/navigation";
import {
  SociotypePortraitTrioKids,
  SociotypePortraitTrioYoungs,
  SociotypeQuadraIconsBlock,
} from "@entities/sociotypes";
import MainNavigationIconsSkeleton from "./MainNavigationIconsSkeleton.vue";
</script>

<template>
  <nav class="main-nav">
    <div class="main-nav__row">
      <NavigationTab
        :to="$appRoutes.whatIsIt"
        class="main-nav__tab col-50"
        label="Что это такое?"
        iconName="square-0"
      />

      <NavigationTab
        :to="$appRoutes.disclaimer"
        class="main-nav__tab col-50"
        label="Дисклеймер"
        iconName="square-1"
      />
    </div>

    <div class="main-nav__row">
      <NavigationTab
        :to="$appRoutes.sociotypes"
        class="main-nav__tab col-100 with-image-tab"
        label="Социотипы"
      >
        <template #icon>
          <ClientOnly>
            <template #fallback>
              <MainNavigationIconsSkeleton :icons-amount="4" size="24" />
            </template>
            <SociotypeQuadraIconsBlock quadrasSize="24" />
          </ClientOnly>
        </template>
        <template #bottom>
          <ClientOnly>
            <SociotypePortraitTrioYoungs class="with-image-tab__img" />
          </ClientOnly>
        </template>
      </NavigationTab>
      <NavigationTab
        :to="$appRoutes.intertypes"
        class="main-nav__tab col-100 intertypes-tab"
        label="Интертипные отношения"
        iconName="square-2"
      >
        <template #top>
          <ClientOnly>
            <template #fallback>
              <MainNavigationIconsSkeleton :size="['24', '32', '48', '64']" />
            </template>
            <div class="intertypes-tab__icons">
              <UiSvg name="parallel" color="pink" size="24" />
              <UiSvg name="beneficiary" color="yellow" size="32" />
              <UiSvg name="pragmatic" color="green" size="48" />
              <UiSvg name="activity" color="turquoise" size="64" />
            </div>
          </ClientOnly>
        </template>
      </NavigationTab>
    </div>

    <div class="main-nav__row">
      <NavigationTab
        :to="$appRoutes.howToDefine"
        class="main-nav__tab col-60"
        label="Как определять тип?"
        iconName="ghost"
      />

      <NavigationTab
        :to="$appRoutes.tests"
        class="main-nav__tab col-40"
        label="Тесты"
        iconName="presentation-chart-bar-alt"
      />
    </div>

    <div class="main-nav__row">
      <NavigationTab
        :to="$appRoutes.theory"
        class="main-nav__tab col-100"
        label="Теория"
        iconName="justify-left"
      />
    </div>

    <div class="main-nav__row main-nav__row--tab-bg-grey">
      <NavigationTab
        to="#"
        class="main-nav__tab col-40 main-nav__tab--soon"
        label="Профиль"
        iconName="user-square"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>

      <NavigationTab
        to="#"
        class="main-nav__tab col-60 people-tab main-nav__tab--soon"
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
        class="main-nav__tab col-50 main-nav__tab--soon"
        label="Специалисты"
        iconName="diamond"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>

      <NavigationTab
        to="#"
        class="main-nav__tab col-50 main-nav__tab--soon"
        label="Коллективы"
        iconName="briefcase-alt"
      >
        <template #top>
          <UiSvg color="accent" name="cone" />
        </template>
      </NavigationTab>
    </div>

    <div class="main-nav__row">
      <NavigationTab
        to="#"
        class="main-nav__tab col-100 kids-tab with-image-tab main-nav__tab--soon"
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
@use "@shared/styles/variables/colors";

$gap: 8px;
$mt: 20px;

.main-nav {
  padding: 8px;
  gap: $gap;

  &__row {
    display: flex;
    flex-flow: row wrap;
    gap: $gap;

    &:not(:first-child) {
      margin-top: $mt;
    }

    &--tab-bg-grey > .main-nav__tab {
      background-color: colors.$beige;
      border: 0;
    }
  }

  &__tab {
    border: 1px solid colors.$grey;

    & .people-amount {
      color: rgba(colors.$black, 0.5);
    }

    &--soon {
      opacity: 0.5;
      cursor: default;
    }
  }

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

  .with-image-tab {
    &__img {
      margin-bottom: -8px;
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
}

.in-development {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 4px;
}

.col-40 {
  flex: 0 0 calc(40% - $gap / 2);
}

.col-50 {
  flex: 0 0 calc(50% - $gap / 2);
}

.col-60 {
  flex: 0 0 calc(60% - $gap / 2);
}

.col-100 {
  flex: 0 0 100%;
}
</style>
