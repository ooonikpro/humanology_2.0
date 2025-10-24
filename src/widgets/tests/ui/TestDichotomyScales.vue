<script setup lang="ts">
import type { TallyKeyType, TallyType, TextColorType } from "@types";
import TestDichotomyScale from "./TestDichotomyScale.vue";

const props = defineProps<{
  // объект с целыми значениями по осям: отрицательное — правый полюс, положительное — левый
  tally: TallyType;
  // максимум вопросов на пару (для половины шкалы). Пример: 1, 7, 10
  maxPerPair: number;
  // цвет активных элементов
  color: TextColorType;
}>();

const scales = [
  { left: "Иррационал", right: "Рационал", key: "rational" },
  { left: "Интуит", right: "Сенсорик", key: "sensory" },
  { left: "Логик", right: "Этик", key: "logic" },
  { left: "Экстратим", right: "Интротим", key: "extravert" },
] satisfies { left: string; right: string; key: TallyKeyType }[];
</script>

<template>
  <ul class="test-dichotomy-scales">
    <li v-for="scale in scales" :key="scale.key" class="pair">
      <TestDichotomyScale
        :tally="props.tally"
        :tally-key="scale.key"
        :color="props.color"
        :max-per-pair="props.maxPerPair"
        :label="scale.left"
        tally-pole="left"
      />
      <TestDichotomyScale
        :tally="props.tally"
        :tally-key="scale.key"
        :color="props.color"
        :max-per-pair="props.maxPerPair"
        :label="scale.right"
        tally-pole="right"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.test-dichotomy-scales {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
  grid-auto-flow: column;
  gap: 4px;
}
</style>
