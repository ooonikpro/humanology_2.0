<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  tags: string[];
}>();
</script>

<template>
  <header class="detail-card-header">
    <slot name="icon" />

    <UiText preset="subtitle" force-tag="h3" color="black">
      {{ props.title }}
    </UiText>

    <UiText preset="large" force-tag="p" color="accent">
      {{ props.subtitle }}
    </UiText>

    <UiTags :tags="props.tags" color="accent" bg="white" preset="small" />
  </header>
</template>

<style scoped lang="scss">
.detail-card-header {
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
}
</style>
