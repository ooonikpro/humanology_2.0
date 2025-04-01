<script setup lang="ts">
import { NavigationTab } from "@entities/navigation";
import { scrollContainerToElementByIndex } from "@shared/lib";
import {
  useSociotypePageRoute,
  SOCIOTYPE_PAGE_TABS,
} from "@entities/sociotypes";

const { sociotypeId, activeTab, activeTabIndex } = useSociotypePageRoute();

const container = useTemplateRef<HTMLElement>("my-container");

const scrollToActiveElement = () => {
  scrollContainerToElementByIndex(toValue(container), toValue(activeTabIndex));
};

watch(activeTabIndex, scrollToActiveElement);
onMounted(scrollToActiveElement);
</script>

<template>
  <div ref="my-container" class="tabs-widget">
    <NavigationTab
      v-for="tab in SOCIOTYPE_PAGE_TABS"
      :key="tab.name"
      :to="$appRoutes.sociotypeTab(sociotypeId, tab.name)"
      :iconName="tab.iconName"
      :label="tab.label"
      :class="{
        'tabs-widget__link--active': activeTab.name === tab.name,
      }"
      class="tabs-widget__link"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.tabs-widget {
  display: flex;
  width: 100%;
  gap: 4px;
  color: colors.$black;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }

  &__link {
    flex: 0 0 content;
    min-width: 96px;

    @include transitions.ease(background-color, color);

    background-color: colors.$beige;
    opacity: 0.75;

    &--active {
      opacity: 1;
      background-color: colors.$role;
      color: colors.$white;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
