<script setup lang="ts">
import { DETAIL_CARD_REININ } from "@entities/sociotypes/config/detailCard";
import DetailCardWidget from "@widgets/DetailCardWidget.vue";
</script>

<template>
  <div class="reining-signs">
    <DetailCardWidget
      v-for="data in DETAIL_CARD_REININ"
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
