<script setup lang="ts">
import { DetailCard, characteristicsModel } from "@features/characteristics";
import type {
  CharacteristicType,
  DetailCardType,
  DetailValueType,
  IconNameType,
} from "@types";

const props = defineProps<{
  characteristic: CharacteristicType;
  values: string[];
}>();

const detailCardList = computed(() => {
  type Card = DetailCardType & { icon: IconNameType };

  return props.values.reduce<Card[]>((result, value) => {
    const detailCard = characteristicsModel.getDetailBy(
      props.characteristic,
      value,
    );
    if (!detailCard) return result;

    result.push({
      ...detailCard,
      icon: characteristicsModel.getIconByDetail(
        value as DetailValueType,
        detailCard.type,
      ),
    });

    return result;
  }, []);
});
</script>

<template>
  <div class="detail-card-list">
    <DetailCard
      v-for="(card, i) in detailCardList"
      :key="`${card.type}-${i}`"
      :icon-name="card.icon"
      :data="card"
      :class="{ 'characteristic-card--inactive': i === 1 }"
      class="characteristic-card"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.detail-card-list {
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
}

.characteristic-card {
  &--inactive {
    background-color: colors.$grey;
    opacity: 0.75;
  }
}
</style>
