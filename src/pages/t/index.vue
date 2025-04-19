<script setup lang="ts">
import { TheoryNavigationWidget } from "@widgets/navigation";
import PageTitleWidget from "@widgets/PageTitleWidget.vue";
</script>

<template>
  <PageTitleWidget title="Теория" icon-name="justify-left">
    <template #onTitleRight>
      <button>
        <UiSvg name="search" color="accent" size="24" />
      </button>
    </template>
  </PageTitleWidget>
  <TheoryNavigationWidget />
</template>

<style lang="scss">
.app-layout__body {
  max-height: max-content;
}
</style>
