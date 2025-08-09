<script setup lang="ts">
import { computed } from 'vue';
import type { RoleType, DetailCardType, IconNameType } from '@types';
import { DETAIL_CARD_ROLES } from '@entities/sociotypes/config/detailCard';
import { DetailCardWidget } from '@widgets/detail-card';

const props = defineProps<{
  characteristic: string;
  value: [RoleType, RoleType];
}>();

type RoleCard = { key: RoleType; icon: IconNameType; data: DetailCardType };

const items = computed<RoleCard[]>(() => {
  // быстрый индекс по ролям
  const dict = new Map<RoleType, DetailCardType>();
  DETAIL_CARD_ROLES.forEach(c => dict.set(c.role as RoleType, c as unknown as DetailCardType));

  return props.value
    .map((k) => {
      const data = dict.get(k);
      if (!data) return null;
      return {
        key: k,
        icon: (`${k}` as IconNameType),
        data
      };
    })
    .filter((x): x is RoleCard => x !== null);
});
</script>

<template>
  <div class="role-pair">
    <DetailCardWidget
      v-for="(item, idx) in items"
      :key="item.key"
      :icon-name="item.icon"
      :data="item.data"
      :class="['role-card', { 'is-second': idx === 1 }]"
    />
  </div>
</template>

<style scoped lang="scss">
.role-pair { display: grid; gap: 16px; }
.role-card.is-second { opacity: .5; }
</style>
