<script setup lang="ts">
import {
  DetailCard,
  characteristicsModel,
  isValidCharacteristic,
} from "@features/characteristics";
import type { DetailCardType, DetailValueType, IconNameType } from "@types";

const props = defineProps<{
  characteristic: string;
  value: string;
}>();

const normalizedValue = computed(() => props.value.split(" "));

const detailCardList = computed(() => {
  type Card = DetailCardType & { icon: IconNameType };

  return normalizedValue.value.reduce<Card[]>((result, value) => {
    if (!isValidCharacteristic(props.characteristic)) {
      return result;
    }

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

// ! worldview icon
// ! mindset icon
</script>

<template>
  <div class="characteristic-sheet-content">
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

.characteristic-sheet-content {
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
