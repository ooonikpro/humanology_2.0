<script setup lang="ts">
import type { SociotypeDataType } from "@types";

const props = defineProps<{ mindKey: SociotypeDataType["mindKey"] }>();

const rationalData = computed(
  () => props.mindKey.split("-") as [string, `${number}`],
);

const ITEM_SIZE = 8;
const GAP = 2;
const FULL_WIDTH = 40;

const itemsAmount = computed(() => +rationalData.value[1] || 0);
</script>

<template>
  <svg
    :width="FULL_WIDTH"
    :height="ITEM_SIZE"
    class="sociotype-card-rationals-block"
    viewBox="0 0 40 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="rationalData[0] === 'rational'">
      <rect
        v-for="lvl in itemsAmount"
        :key="`${rationalData[0]}-${lvl}`"
        :x="FULL_WIDTH - ITEM_SIZE * lvl - (lvl - 1) * GAP"
        :width="ITEM_SIZE"
        :height="ITEM_SIZE"
        class="sociotype-card-rationals-block__item"
        fill="currentColor"
      />
    </template>

    <template v-else>
      <circle
        v-for="lvl in itemsAmount"
        :key="`${rationalData[0]}-${lvl}`"
        :cx="
          FULL_WIDTH -
          (ITEM_SIZE / 2) * lvl -
          (ITEM_SIZE / 2) * (lvl - 1) -
          GAP * (lvl - 1)
        "
        :cy="ITEM_SIZE / 2"
        :r="ITEM_SIZE / 2"
        class="sociotype-card-rationals-block__item"
        fill="currentColor"
      />
    </template>
  </svg>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-rationals-block {
  &__item {
    color: colors.$quadra;
  }
}
</style>
