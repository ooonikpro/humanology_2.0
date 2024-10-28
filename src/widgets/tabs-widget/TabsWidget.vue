<script setup lang="ts">
import { ref } from "vue";
import UiSvg from "@shared/ui/UiSvg.vue";
import { tabs } from "./data";

const container = ref<HTMLDivElement | null>(null);

const scrollToTabById = (id: string) => {
  if (container.value) {
    const activeTabElement = container.value.querySelector(`#${id}`);

    if (activeTabElement) {
      activeTabElement.scrollIntoView({
        inline: "start",
        block: "center",
        behavior: "smooth",
      });
    }
  }
};
</script>

<template>
  <div class="tabs-widget" ref="container">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.label"
      :id="tab.id"
      :to="tab.to"
      class="tabs-widget__link"
      @click="scrollToTabById(tab.id)"
    >
      <UiSvg :name="tab.iconName" class="tabs-widget__icon" />
      {{ tab.label }}
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@use "../../shared/styles/variables/colors";

.tabs-widget {
  display: flex;
  width: 100%;
  gap: 4px;
  color: var(--text-color);
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__link {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 96px;
    height: 80px;
    padding: 8px;
    font-size: 18px;
    line-height: 24px;
    opacity: 0.5;
    white-space: nowrap;
    box-shadow: 0 1px 1px 0 rgba(38, 30, 30, 0.1);
    border-radius: 4px;
    cursor: pointer;

    &.router-link-active {
      background-color: var(--bg-color);
      opacity: 1;
    }

    &.tabs-widget__link_md {
      flex-basis: 142px;
    }

    &.tabs-widget__link_lg {
      flex-basis: 166px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    opacity: 0.5;
  }
}
</style>
