<script setup lang="ts">
import { TheoryNavigationWidget } from "@widgets/navigation";
import PageTitleWidget from "@widgets/PageTitleWidget.vue";
</script>

<template>
  <PageTitleWidget title="Теория" icon-name="paragraph">
    <template #onTitleRight>
      <button>
        <UiSvg name="search" color="accent" size="24" />
      </button>
    </template>
  </PageTitleWidget>
  <TheoryNavigationWidget />
</template>
