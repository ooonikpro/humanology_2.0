<script setup lang="ts">
import { useTemplateRef, watch } from "vue";
import { useRoute } from "vue-router";
import { tabs } from "../model/data";
import UiTab from "./UiTab.vue";

const route = useRoute();
const container = useTemplateRef<HTMLElement>("my-container");

watch(route, () => {
  const index: number = tabs.findIndex((el) => el.path === route.path);
  scrollToActiveTab(index);
});

function scrollToActiveTab(index: number) {
  if (container.value) {
    const activeChildTab = container.value.children[index];

    if (activeChildTab) {
      activeChildTab.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth",
      });
    }
  }
}
</script>

<template>
  <div class="tabs-widget" ref="my-container">
    <UiTab
      v-for="tab in tabs"
      :key="tab.label"
      v-bind="tab"
      class="tabs-widget__link"
    ></UiTab>
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
}
</style>
