<script setup lang="ts">
import { DETAIL_CARD_YUNG } from "@entities/sociotypes/config/detailCard";
import { DetailCardWidget } from "@widgets/detail-card";
</script>

<template>
  <div class="jung-dichotomy">
    <DetailCardWidget
      v-for="data in DETAIL_CARD_YUNG"
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
