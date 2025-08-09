<script setup lang="ts">
import { computed } from 'vue';
import type { MindKeyType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_MINDS } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: MindKeyType; // например: 'growth', 'fixed', 'open' и т.д.
}>();

const MINDSET_DICT = Object.fromEntries(
  DETAIL_CARD_MINDS.map(m => [m.mindset, m])
) as Record<MindKeyType, DetailCardType>;

const card = computed(() => MINDSET_DICT[props.value]);
const iconName = computed(() => `${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget :icon-name="iconName" :data="card" />
</template>

<style scoped lang="scss"></style>
