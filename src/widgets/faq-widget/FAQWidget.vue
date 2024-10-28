<script lang="ts" setup>
import { TabLink } from "@entities/navigation";
import { linkTabSizeClass, tabs } from "./config";
import FaqTabLinkWithImg from "./ui/FaqTabLinkWithImg.vue";
</script>

<template>
  <div class="faq-widget">
    <template
      v-for="{ to, iconName, label, size, src } in tabs"
      :key="to + iconName"
    >
      <FaqTabLinkWithImg
        v-if="src"
        class="faq-widget__tab"
        :class="linkTabSizeClass[size]"
        :to
        :iconName
        :label
        :src
      />
      <TabLink
        v-else
        class="faq-widget__tab"
        :class="linkTabSizeClass[size]"
        :to
        :iconName
        :label
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
$gap: 8px;
.faq-widget {
  padding: 8px;
  display: flex;
  flex-flow: row wrap;
  gap: $gap;

  &__tab {
    flex: 0 0 calc(50% - $gap);

    &.--small {
      flex-basis: calc(40% - $gap);
    }

    &.--big {
      flex-basis: calc(60% - $gap);
    }

    &.--full {
      flex-basis: 100%;
    }
  }
}
</style>
