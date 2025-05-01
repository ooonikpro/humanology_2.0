<script lang="ts" setup>
import { NavigationTab } from "@entities/navigation";
import {
  SociotypePortraitTrioKids,
  SociotypePortraitTrioYoungs,
  SociotypeQuadraIconsBlock,
} from "@entities/sociotypes";

const props = defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div
    :class="[
      'navigation-overflow',
      {
        'navigation-overflow--visible': props.isOpen,
      },
    ]"
  >
    <nav :class="['navigation', { 'navigation--open': props.isOpen }]">
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
          iconName="atom"
        />
      </div>

      <div class="navigation__row">
        <NavigationTab
          :to="$appRoutes.sociotypes"
          class="navigation__tab col-100 with-image-tab sociotypes"
          label="Социотипы"
        >
          <template #icon>
            <SociotypeQuadraIconsBlock quadrasSize="24" only-icons />
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

      <div class="navigation__row">
        <NavigationTab
          :to="$appRoutes.theory"
          class="navigation__tab col-100"
          label="Теория"
          iconName="paragraph"
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
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "./NavigationWidget.scss";
@use "@shared/styles/variables/layers";
@use "@shared/styles/variables/layouts";
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.navigation {
  width: 100%;
  height: 100dvh;
  transform: translateX(-100%);
  padding-bottom: 70px;
  padding-top: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  background-color: colors.$white;

  @include transitions.ease(transform);

  &--open {
    transform: translateX(0);
  }
}

.navigation-overflow {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  padding-top: layouts.$headerHeight;
  max-width: layouts.$maxWidth;
  bottom: 0;
  z-index: layers.$z-index-app-nav;
  overflow: hidden;
  visibility: hidden;
  transform: translateX(-50%);

  @include transitions.ease(visibility, display);

  &--visible {
    visibility: visible;
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

.kids-tab {
  position: relative;
  .in-development {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
