<script setup lang="ts">
import { toValue, useTemplateRef, watch, onMounted, computed } from "vue";
import { useRoute } from "@kitbag/router";
import type { SociotypeTabType } from "@types";
import { NavigationTab } from "@entities/navigation";
import { scrollContainerToElementByIndex } from "@shared/lib";

const props = defineProps<{ tabs: SociotypeTabType[] }>();

const route = useRoute("sociotypes");
const container = useTemplateRef<HTMLElement>("my-container");

const activeElementIndex = computed(() =>
  props.tabs.findIndex((tab) => tab.name === route.params.tabName),
);

const scrollToActiveElement = () => {
  scrollContainerToElementByIndex(
    toValue(container),
    toValue(activeElementIndex),
  );
};

watch(route, scrollToActiveElement);
onMounted(scrollToActiveElement);
</script>

<template>
  <div ref="my-container" class="tabs-widget">
    <NavigationTab
      v-for="(tab, $index) in props.tabs"
      :key="tab.name"
      :to="(r) => r('sociotypes', { id: route.params.id, tabName: tab.name })"
      :iconName="tab.iconName"
      :label="tab.label"
      class="tabs-widget__link"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

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
    min-width: max-content;
  }
}
</style>
