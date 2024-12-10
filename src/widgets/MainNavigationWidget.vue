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
        :to="(resolve) => resolve('tabs', { tabName: 'DisclaimerPage' })"
        class="main-nav__tab col-50"
        label="Дисклеймер"
        iconName="square-1"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'HowDefineTypePage' })"
        class="main-nav__tab col-60"
        label="Как определять тип?"
        iconName="ghost"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'TestsPage' })"
        class="main-nav__tab col-40"
        label="Тесты"
        iconName="presentation-chart-bar-alt"
      />
    </div>

    <div class="main-nav__row main-nav__row--tab-bg-grey">
      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'ProfilePage' })"
        class="main-nav__tab col-40"
        label="Профиль"
        iconName="user-square"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'PeoplePage' })"
        class="main-nav__tab col-60"
        label="Люди"
        iconName="users"
      >
        <template #bottom>
          <span class="people-amount">5267</span>
        </template>
      </NavigationTab>

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'ProPersonsPage' })"
        class="main-nav__tab col-50"
        label="Специалисты"
        iconName="diamond"
      >
        <template #top>
          <UiSvg class="main-nav__tab-ruble" name="ruble-square" />
        </template>
      </NavigationTab>

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'TeamsPage' })"
        class="main-nav__tab col-50"
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
        :to="(resolve) => resolve('tabs', { tabName: 'ChildsPage' })"
        class="main-nav__tab col-100"
        label="Дети"
        iconName="chart-bubble"
      >
        <template #bottom>
          <SociotypePortraitTrioKids class="main-nav__tab-img" />
        </template>
      </NavigationTab>

      <NavigationTab
        :to="
          (resolve) =>
            resolve('tabs', { tabName: 'InformationalMetabolismPage' })
        "
        class="main-nav__tab col-100"
        label="Информационный метаболизм"
        iconName="square-3"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'HistoryPage' })"
        class="main-nav__tab col-50"
        label="История"
        iconName="time"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'FunctionsPage' })"
        class="main-nav__tab col-50"
        label="Функции"
        iconName="square-5"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'AspectsPage' })"
        class="main-nav__tab col-100"
        label="Аспекты"
        iconName="square-4"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'QuadrasPage' })"
        class="main-nav__tab col-50"
        label="Квадры"
        iconName="square-6"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'RolesAndSuitsPage' })"
        class="main-nav__tab col-50"
        label="Роли и масти"
        iconName="square-7"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'ClubsAndGroupsPage' })"
        class="main-nav__tab col-50"
        label="Клубы и группы"
        iconName="square-8"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'MindsetKindsPage' })"
        class="main-nav__tab col-50"
        label="Типы мышления"
        iconName="square-9"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'RaininsSignsPage' })"
        class="main-nav__tab col-50"
        label="Признаки Рейнина"
        iconName="square-10"
      />

      <NavigationTab
        :to="(resolve) => resolve('tabs', { tabName: 'JungsDichotomysPage' })"
        class="main-nav__tab col-50"
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
