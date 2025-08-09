<script setup lang="ts">
import { computed } from 'vue';
import type { ClubIdType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_CLUBS } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: ClubIdType; 
}>();

const CLUB_DICT = Object.fromEntries(
  DETAIL_CARD_CLUBS.map(c => [c.club, c])
) as Record<ClubIdType, DetailCardType>;

const card = computed<DetailCardType>(() => CLUB_DICT[props.value]);
const iconName = computed<IconNameType>(() => `${props.value}` as IconNameType);
</script>

<template>
  <DetailCardWidget :icon-name="iconName" :data="card" />
</template>

<style scoped lang="scss"></style>
