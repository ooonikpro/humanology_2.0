<script setup lang="ts">
import { computed } from "vue";
import type { DichotomyType, DetailCardType, IconNameType } from "@types";
import { DETAIL_CARD_YUNG } from "@entities/sociotypes/config/detailCard";
import { DetailCardWidget } from "@widgets/detail-card";

const props = defineProps<{
  characteristic: string;
  value: [DichotomyType, DichotomyType];
}>();

type PairItem = {
  key: DichotomyType;
  card: DetailCardType;
  icon: IconNameType;
};

const pair = computed<PairItem[]>(() =>
  props.value.map((k) => {
    const found = DETAIL_CARD_YUNG.find((c) => c.yung === k);
    // заглушка на случай, если ключа нет в конфиге
    const card = (found ?? {
      type: "yung",
      title: String(k),
      subtitle: props.characteristic,
      tags: [],
      content: [],
    }) as unknown as DetailCardType;

    const icon = `yung_${k}` as IconNameType; // имя иконки по соглашению
    return { key: k, card, icon };
  }),
);
</script>

<template>
  <div class="yung-pair">
    <DetailCardWidget
      v-for="(item, i) in pair"
      :key="item.key"
      :icon-name="item.icon"
      :data="item.card"
      :class="['yung-card', { 'is-second': i === 1 }]"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables/colors.scss";
.yung-pair {
  display: grid;
  gap: 16px;
}
.yung-card.is-second {
  background-color: colors.$grey;
  opacity: 0.75;
}
</style>
