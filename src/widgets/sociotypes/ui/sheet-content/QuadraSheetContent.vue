<script setup lang="ts">
import { computed } from 'vue';
import type { QuadrasType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_QUADRAS } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: QuadrasType; // 'air' | 'fire' | 'water' | 'earth'
}>();

// быстрый словарь, чтобы не гонять find
const QUADRA_DICT = Object.fromEntries(
  DETAIL_CARD_QUADRAS.map(c => [c.quadra, c])
) as Record<QuadrasType, DetailCardType>;

const card = computed<DetailCardType>(() => QUADRA_DICT[props.value]);
const iconName = computed<IconNameType>(() => `${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget :icon-name="iconName" :data="card" />
</template>

<style scoped lang="scss"></style>
