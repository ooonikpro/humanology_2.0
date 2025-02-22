<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
import { NavigationTab } from "@entities/navigation";
import { SociotypePortraitTrioKids } from "@entities/sociotypes";
</script>

<template>
  <nav class="main-nav">
    <div class="main-nav__row">
      <NavigationTab
        :to="{ name: 'what-is-it' }"
        class="main-nav__tab col-50"
        label="Что это такое?"
        iconName="square-0"
      />

      <NavigationTab
        :to="{ name: 'disclaimer' }"
        class="main-nav__tab col-50"
        label="Дисклеймер"
        iconName="square-1"
      />

      <NavigationTab
        :to="{ name: 'how-to-define' }"
        class="main-nav__tab col-60"
        label="Как определять тип?"
        iconName="ghost"
      />

      <NavigationTab
        :to="{ name: 'tests' }"
        class="main-nav__tab col-40"
        label="Тесты"
        iconName="presentation-chart-bar-alt"
      />
    </div>

    <div class="main-nav__row main-nav__row--tab-bg-grey">
      <NavigationTab
        :to="{ name: 'profile' }"
        class="main-nav__tab col-40"
        label="Профиль"
        iconName="user-square"
      />

      <NavigationTab
        :to="{ name: 'people' }"
        class="main-nav__tab col-60"
        label="Люди"
        iconName="users"
      >
        <template #bottom>
          <span class="people-amount">5267</span>
        </template>
      </NavigationTab>

      <NavigationTab
        :to="{ name: 'specialists' }"
        class="main-nav__tab col-50"
        label="Специалисты"
        iconName="diamond"
      >
        <template #top>
          <UiSvg class="main-nav__tab-ruble" name="ruble-square" />
        </template>
      </NavigationTab>

      <NavigationTab
        :to="{ name: 'teams' }"
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
        :to="{ name: 'kids' }"
        class="main-nav__tab col-100"
        label="Дети"
        iconName="chart-bubble"
      >
        <template #bottom>
          <SociotypePortraitTrioKids class="main-nav__tab-img" />
        </template>
      </NavigationTab>

      <NavigationTab
        :to="{ name: 'metabolism' }"
        class="main-nav__tab col-100"
        label="Информационный метаболизм"
        iconName="square-3"
      />

      <NavigationTab
        :to="{ name: 'intertypes' }"
        class="main-nav__tab col-60"
        label="Интертипные отношения"
        iconName="square-2"
      />

      <NavigationTab
        :to="{ name: 'aspects' }"
        class="main-nav__tab col-40"
        label="Аспекты"
        iconName="square-4"
      />

      <NavigationTab
        :to="{ name: 'history' }"
        class="main-nav__tab col-50"
        label="История"
        iconName="time"
      />

      <NavigationTab
        :to="{ name: 'functions' }"
        class="main-nav__tab col-50"
        label="Функции"
        iconName="square-5"
      />

      <NavigationTab
        :to="{ name: 'quadras' }"
        class="main-nav__tab col-50"
        label="Квадры"
        iconName="square-6"
      />

      <NavigationTab
        :to="{ name: 'roles-and-suits' }"
        class="main-nav__tab col-50"
        label="Роли и масти"
        iconName="square-7"
      />

      <NavigationTab
        :to="{ name: 'clubs-and-groups' }"
        class="main-nav__tab col-50"
        label="Клубы и группы"
        iconName="square-8"
      />

      <NavigationTab
        :to="{ name: 'mindset' }"
        class="main-nav__tab col-50"
        label="Типы мышления"
        iconName="square-9"
      />

      <NavigationTab
        :to="{ name: 'raining' }"
        class="main-nav__tab col-50"
        label="Признаки Рейнина"
        iconName="square-10"
      />

      <NavigationTab
        :to="{ name: 'jung' }"
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
