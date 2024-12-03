<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
import { NavigationTab } from "@entities/navigation";
import { SociotypePortraitTrioKids } from "@entities/sociotypes";
</script>

<template>
  <nav class="main-nav">
    <div class="main-nav__row">
      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'WhatIsPage' })"
        class="main-nav__tab col-50"
        label="Что это такое?"
        iconName="square-0"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'DisclaimerPage' })"
        label="Дисклеймер"
        iconName="square-1"
      />

      <NavigationTab
        class="main-nav__tab col-60"
        :to="(resolve) => resolve('tabs', { tabName: 'HowDefineTypePage' })"
        label="Как определять тип?"
        iconName="ghost"
      />

      <NavigationTab
        class="main-nav__tab col-40"
        :to="(resolve) => resolve('tabs', { tabName: 'TestsPage' })"
        label="Тесты"
        iconName="presentation-chart-bar-alt"
      />
    </div>

    <div class="main-nav__row main-nav__row--tab-bg-grey">
      <NavigationTab
        class="main-nav__tab col-40"
        :to="(resolve) => resolve('tabs', { tabName: 'ProfilePage' })"
        label="Профиль"
        iconName="user-square"
      />

      <NavigationTab
        class="main-nav__tab col-60"
        :to="(resolve) => resolve('tabs', { tabName: 'PeoplePage' })"
        label="Люди"
        iconName="users"
      >
        <template #bottom>
          <span class="people-amount">5267</span>
        </template>
      </NavigationTab>

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'ProPersonsPage' })"
        label="Специалисты"
        iconName="diamond"
      >
        <template #top>
          <UiSvg class="main-nav__tab-ruble" name="ruble-square" />
        </template>
      </NavigationTab>

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'TeamsPage' })"
        label="Коллективы"
        iconName="briefcase-alt"
      >
        <template #top>
          <UiSvg class="main-nav__tab-ruble" name="ruble-square" />
        </template>
      </NavigationTab>
    </div>

    <div class="main-nav__row">
      <NavigationTab
        class="main-nav__tab col-100"
        :to="(resolve) => resolve('tabs', { tabName: 'ChildsPage' })"
        label="Дети"
        iconName="chart-bubble"
      >
        <template #bottom>
          <SociotypePortraitTrioKids class="main-nav__tab-img" />
        </template>
      </NavigationTab>

      <NavigationTab
        class="main-nav__tab col-100"
        :to="
          (resolve) =>
            resolve('tabs', { tabName: 'InformationalMetabolismPage' })
        "
        label="Информационный метаболизм"
        iconName="square-3"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'HistoryPage' })"
        label="История"
        iconName="time"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'FunctionsPage' })"
        label="Функции"
        iconName="square-5"
      />

      <NavigationTab
        class="main-nav__tab col-100"
        :to="(resolve) => resolve('tabs', { tabName: 'AspectsPage' })"
        label="Аспекты"
        iconName="square-4"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'QuadrasPage' })"
        label="Квадры"
        iconName="square-6"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'RolesAndSuitsPage' })"
        label="Роли и масти"
        iconName="square-7"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'ClubsAndGroupsPage' })"
        label="Клубы и группы"
        iconName="square-8"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'MindsetKindsPage' })"
        label="Типы мышления"
        iconName="square-9"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'RaininsSignsPage' })"
        label="Признаки Рейнина"
        iconName="square-10"
      />

      <NavigationTab
        class="main-nav__tab col-50"
        :to="(resolve) => resolve('tabs', { tabName: 'JungsDichotomysPage' })"
        label="Дихотомии Юнга"
        iconName="square-11"
      />
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

    &-ruble {
      color: colors.$fire;
    }

    &-img {
      margin-bottom: -8px;
    }
  }
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
