<script setup lang="ts">
import { reininsModel } from "@entities/reinins";
import { DetailCard } from "@features/characteristics";

const allDetailReinins = reininsModel.getAllDetailReinins();
</script>

<template>
  <div class="reining-signs">
    <DetailCard
      v-for="data in allDetailReinins"
      :key="data.reinin"
      :icon-name="`reinin_${data.reinin}`"
      :data="data"
    />
  </div>
</template>

<style scoped lang="scss">
.reining-signs {
  padding: 8px;

  & > *:not(:first-child) {
    margin-top: 16px;
  }
}
</style>
