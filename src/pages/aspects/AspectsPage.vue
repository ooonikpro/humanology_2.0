<script setup lang="ts">
import { AspectDescription, aspectModel } from "@entities/aspects";
</script>

<template>
  <div class="aspects-page">
    <AspectDescription
      v-for="aspect in aspectModel.getAllAspects()"
      :key="aspect"
      :iconName="aspectModel.getAspectIconName(aspect)"
      :title="aspectModel.getAspectName(aspect)"
      :subtitle="aspectModel.getAspectLabel(aspect)"
      :tags="aspectModel.getAspectTags(aspect)"
      :to="$appRoutes.aspectCard(aspect)"
    />
  </div>
</template>

<style scoped lang="scss">
.aspects-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
