<script setup lang="ts">
import { toValue, useTemplateRef, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import type { SociotypeIdType, SociotypeTabType } from "@types";
import { NavigationTab } from "@entities/navigation";
import { scrollContainerToElementByIndex } from "@shared/lib";
import type { TabName } from "@pages/sociotypes/config";

const props = defineProps<{
  tabName: TabName;
  tabs: readonly SociotypeTabType[];
  sociotypeId: SociotypeIdType;
}>();

const route = useRoute();
const container = useTemplateRef<HTMLElement>("my-container");

const activeElementIndex = computed(() =>
  props.tabs.findIndex((tab) => tab.name === props.tabName),
);

const scrollToActiveElement = () => {
  scrollContainerToElementByIndex(
    toValue(container),
    toValue(activeElementIndex),
  );
};

watch(activeElementIndex, scrollToActiveElement);
onMounted(scrollToActiveElement);
</script>

<template>
  <div ref="my-container" class="tabs-widget">
    <NavigationTab
      v-for="tab in props.tabs"
      :key="tab.name"
      :to="$appRoutes.sociotypeTab(props.sociotypeId, tab.name)"
      :iconName="tab.iconName"
      :label="tab.label"
      :class="{
        'tabs-widget__link--active': props.tabName === tab.name,
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
    @include transitions.ease(background-color, color);

    background-color: colors.$beige;
    min-width: max-content;
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
