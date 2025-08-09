<script setup lang="ts">
import { computed } from 'vue';
import type { DetailCardType, IconNameType, TarotType } from '@types';
import { DETAIL_CARD_SUITS } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: TarotType; // 'swords' | 'cups' | 'wands' | 'pentacles'
}>();

// индекс по ключу, чтобы не ловить undefined из-за find
const SUIT_DICT = Object.fromEntries(
  DETAIL_CARD_SUITS.map(c => [c.suit, c])
) as Record<TarotType, DetailCardType>;

const card = computed<DetailCardType>(() => SUIT_DICT[props.value]);
const iconName = computed<IconNameType>(() => `${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget :icon-name="iconName" :data="card" />
</template>
