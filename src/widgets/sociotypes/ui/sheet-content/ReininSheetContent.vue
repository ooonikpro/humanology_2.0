<script setup lang="ts">
import { computed } from 'vue';
import type { ReininSignType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_REININ } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: [ReininSignType, ReininSignType];
}>();

type PairItem = { key: ReininSignType; card: DetailCardType; icon: IconNameType };

const pair = computed<PairItem[]>(() =>
  props.value.map((k) => {
    const found = DETAIL_CARD_REININ.find(c => c.reinin === k);
    // если не нашли — делаем простую заглушку
    const card = (found ?? {
      type: 'reinin',
      title: String(k),
      subtitle: props.characteristic,
      tags: [],
      content: []
    }) as unknown as DetailCardType;

    const icon = (`reinin_${k}`) as IconNameType; // имя иконки по соглашению
    return { key: k, card, icon };
  })
);
</script>

<template>
  <div class="reinin-pair">
    <DetailCardWidget
      v-for="(item, i) in pair"
      :key="item.key"
      :icon-name="item.icon"
      :data="item.card"
      :class="['reinin-card', { 'is-second': i === 1 }]"
    />
  </div>
</template>

<style scoped lang="scss">
.reinin-pair { display: grid; gap: 16px; }
.reinin-card.is-second { opacity: .5; }
</style>