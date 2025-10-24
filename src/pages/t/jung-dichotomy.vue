<script setup lang="ts">
import { yungDichotomiesModel } from "@entities/yung-dichotomies";
import { DetailCard } from "@features/characteristics";

const allDetailYungs = yungDichotomiesModel.getAllDetailYungs();
</script>

<template>
  <div class="jung-dichotomy">
    <DetailCard
      v-for="data in allDetailYungs"
      :key="data.yung"
      :icon-name="`yung_${data.yung}`"
      :data="data"
    />
  </div>
</template>

<style scoped lang="scss">
.jung-dichotomy {
  padding: 8px;

  & > *:not(:first-child) {
    margin-top: 16px;
  }
}
</style>
