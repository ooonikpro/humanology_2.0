<script setup lang="ts">
import { functionsModel } from "@entities/functions-and-blocks";
import { AspectDescription } from "@entities/aspects";
</script>

<template>
  <div class="functions-page">
    <AspectDescription
      v-for="f in functionsModel.getAllFunctions()"
      :key="f"
      :title="functionsModel.getName(f)"
      :tags="functionsModel.getTags(f)"
      :to="{ name: 'functions.card', params: { functionName: f } }"
    >
      {{ functionsModel.getDescription(f) }}
    </AspectDescription>
  </div>
</template>

<style scoped lang="scss">
.functions-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
