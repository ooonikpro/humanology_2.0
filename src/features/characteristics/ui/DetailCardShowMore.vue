<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const { link = "#" } = defineProps<{ link?: RouteLocationRaw }>();

const isInactive = computed(() => link === "#");
</script>

<template>
  <UiBlock v-slot="{ classes }" :is-inactive="isInactive" variant="secondary">
    <NuxtLink
      :to="link"
      :class="[classes]"
      v-bind="$attrs"
      class="detail-card-show-more"
    >
      <UiText preset="body" color="inherit" force-tag="span">Подробнее</UiText>
      <UiSvg size="24" name="chevron-right" color="inherit" />
    </NuxtLink>
  </UiBlock>
</template>

<style scoped lang="scss">
.detail-card-show-more {
  display: flex;
  justify-content: space-between;
}
</style>
