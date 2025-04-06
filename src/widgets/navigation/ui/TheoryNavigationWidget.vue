<script lang="ts" setup>
import { NavigationTab } from "@entities/navigation";
</script>

<template>
  <nav class="navigation">
    <div class="navigation__row">
      <NavigationTab
        :to="$appRoutes.history"
        class="navigation__tab col-100"
        label="История"
        iconName="time"
      />

      <NavigationTab
        :to="$appRoutes.history"
        class="navigation__tab col-100"
        label="Информационный метаболизм"
        iconName="square-3"
      />

      <NavigationTab
        :to="$appRoutes.aspects"
        class="navigation__tab col-50"
        label="Аспекты"
        iconName="square-4"
      />
      <NavigationTab
        :to="$appRoutes.functions"
        class="navigation__tab col-50"
        label="Функции"
        iconName="square-5"
      />

      <NavigationTab
        :to="$appRoutes.quadras"
        class="navigation__tab col-50"
        label="Квадры"
        iconName="square-6"
      />
      <NavigationTab
        :to="$appRoutes.roles"
        class="navigation__tab col-50"
        label="Роли и масти"
        iconName="square-7"
      />

      <NavigationTab
        :to="$appRoutes.clubs"
        class="navigation__tab col-50"
        label="Клубы и группы"
        iconName="square-8"
      />
      <NavigationTab
        :to="$appRoutes.mindset"
        class="navigation__tab col-50"
        label="Типы мышления"
        iconName="square-9"
      />

      <NavigationTab
        :to="$appRoutes.raining"
        class="navigation__tab col-50"
        label="Признаки Рейнина"
        iconName="square-10"
      />
      <NavigationTab
        :to="$appRoutes.jung"
        class="navigation__tab col-50"
        label="Дихотомии Юнга"
        iconName="square-11"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "./NavigationWidget.scss";
</style>
