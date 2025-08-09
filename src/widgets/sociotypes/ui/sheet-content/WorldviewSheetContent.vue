<script setup lang="ts">
import { computed } from 'vue';
import type { AlignmentType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_ALIGNMENTS } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: AlignmentType; // например: 'chaoticNeutral', 'lawfulGood', 'TrueNeutral' и т.д.
}>();

// Словарь для быстрого доступа по ключу alignment
const ALIGNMENT_DICT = Object.fromEntries(
  DETAIL_CARD_ALIGNMENTS.map(item => [item.alignment, item])
) as Record<AlignmentType, DetailCardType>;

const card = computed(() => ALIGNMENT_DICT[props.value]);
const iconName = computed(() => `alignment_${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget v-if="card" :icon-name="iconName" :data="card" />
  <div v-else>Выбранное значение не найдено</div>
</template>

<style scoped lang="scss"></style>
