<script setup lang="ts">
import { computed } from 'vue';
import type { PsychotypeIdType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_PSYCHOTYPES } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: PsychotypeIdType; // например: 'childlike', 'caring', 'victim', 'aggressor'
}>();

// Создаём словарь для быстрого доступа
const PSYCHOTYPE_DICT = Object.fromEntries(
  DETAIL_CARD_PSYCHOTYPES.map(p => [p.psychotype, p])
) as Record<PsychotypeIdType, DetailCardType>;

const card = computed(() => PSYCHOTYPE_DICT[props.value]);
const iconName = computed(() => `${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget :icon-name="iconName" :data="card" />
</template>

<style scoped lang="scss"></style>
