<script lang="ts" setup>
import { TabLink } from "@entities/navigation";
import type { LinkTabPropsType } from "@types";
import { defineProps } from "vue";

const props = defineProps<LinkTabPropsType & { src: string }>();

const src = new URL(props.src, import.meta.url).href
</script>

<template>
  <TabLink class="faq-tab-link-with-img" :to="props.to" :iconName="props.iconName" :label="props.label">
    <img class="faq-tab-link-with-img__img" :src :alt="props.label">
  </TabLink>
</template>

<style lang="scss" scoped>
.faq-tab-link-with-img {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content;
  align-items: end;

  &:deep(.link-tab__icon) {
    grid-column: 1/1;
    grid-row: 1/1;
    margin-bottom: 100%;
  }

  &:deep(.link-tab__title) {
    grid-column: 1/1;
    grid-row: 1/1;
  }
  
  &__img {
    width: 70%;
    aspect-ratio: 3/2;
    grid-column: 2/2;
    justify-self: end;
  }
}


</style>
