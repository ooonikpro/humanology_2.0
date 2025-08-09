<script setup lang="ts">
import { computed } from 'vue'

type Key = 'rational' | 'logic' | 'sensing' | 'extraversion'

const props = defineProps<{
  // объект с целыми значениями по осям: отрицательное — правый полюс, положительное — левый
  tally: Record<Key, number>
  // максимум вопросов на пару (для половины шкалы). Пример: 1, 7, 10
  maxPerPair: number
  // цвет активных элементов
  color: string
}>()

const clampPercent = (v: number) => Math.max(0, Math.min(100, v))

function percentHalf(value: number) {
  return clampPercent((Math.abs(value) / props.maxPerPair) * 100)
}

const items = computed(() => ([
  { left: 'Иррационал', right: 'Рационал', key: 'rational' as const },
  { left: 'Интуит', right: 'Сенсорик', key: 'sensing' as const },
  { left: 'Логик', right: 'Этик', key: 'logic' as const },
  { left: 'Экстратим', right: 'Интротим', key: 'extraversion' as const },
]))

function isLeftActive(key: Key) { return props.tally[key] < 0 }
function isRightActive(key: Key) { return props.tally[key] > 0 }

function isLeftPreferredOnZero(key: Key) {
  // При нуле выбираем сторону по тем же правилам, что и итоговый тип
  // rational: 0 → irrational (лево)
  // logic: 0 → ethics (право)
  // sensing: 0 → intuition (лево)
  // extraversion: 0 → introversion (право)
  switch (key) {
    case 'rational': return true
    case 'logic': return false
    case 'sensing': return true
    case 'extraversion': return false
  }
}

function labelWithPoints(label: string, key: Key, left: boolean) {
  const v = props.tally[key]
  const active = left ? isLeftActive(key) : isRightActive(key)
  if (v === 0) {
    const zeroLeft = isLeftPreferredOnZero(key)
    if ((left && zeroLeft) || (!left && !zeroLeft)) return `${label} 0`
    return label
  }
  if (!active) return label
  return `${label} +${Math.abs(v)}`
}
</script>

<template>
  <div class="pairs">
    <div v-for="item in items" :key="item.key" class="pair">
      <div class="labels">
        <span
          :class="{ inactive: (!isLeftActive(item.key) && !(tally[item.key] === 0 && isLeftPreferredOnZero(item.key))) }"
          :style="(isLeftActive(item.key) && tally[item.key] !== 0) || (tally[item.key] === 0 && isLeftPreferredOnZero(item.key)) ? { color } : {}"
        >
          {{ labelWithPoints(item.left, item.key, true) }}
        </span>
        <span
          :class="{ inactive: (!isRightActive(item.key) && !(tally[item.key] === 0 && !isLeftPreferredOnZero(item.key))) }"
          :style="(isRightActive(item.key) && tally[item.key] !== 0) || (tally[item.key] === 0 && !isLeftPreferredOnZero(item.key)) ? { color } : {}"
        >
          {{ labelWithPoints(item.right, item.key, false) }}
        </span>
      </div>
      <div class="row">
        <div class="bar bar--left">
          <div
            class="fill fill--left"
            :style="{ width: `${percentHalf(tally[item.key])}%`, backgroundColor: color }"
            v-if="isLeftActive(item.key) && tally[item.key] !== 0"
          />
          <div v-if="tally[item.key] === 0 && isLeftPreferredOnZero(item.key)" class="dot dot--left" :style="{ backgroundColor: color }" />
        </div>
        <div class="bar bar--right">
          <div
            class="fill fill--right"
            :style="{ width: `${percentHalf(tally[item.key])}%`, backgroundColor: color }"
            v-if="isRightActive(item.key) && tally[item.key] !== 0"
          />
          <div v-if="tally[item.key] === 0 && !isLeftPreferredOnZero(item.key)" class="dot dot--right" :style="{ backgroundColor: color }" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.pairs { display: flex; flex-direction: column; gap: 8px; }
.pair { display: flex; flex-direction: column; gap: 4px; }
.row { display: grid; grid-template-columns: 1fr 1fr; column-gap: 4px; align-items: center; }

.bar { height: 8px; background: rgba(colors.$white, 0.2); border-radius: 2px; overflow: hidden; position: relative; }
.bar--left { }
.bar--right { }
.fill { height: 100%; transition: width 0.3s ease; }
.fill--left { margin-left: auto; border-radius: 2px 0 0 2px; }
.fill--right { border-radius: 0 2px 2px 0; }

.labels { display: flex; justify-content: space-between; font-size: 12px; color: colors.$white; margin-bottom: 2px; }

.dot { position: absolute; width: 6px; height: 6px; border-radius: 50%; top: 50%; transform: translateY(-50%); }
.dot--left { right: 2px; }
.dot--right { left: 2px; }
.labels .inactive { opacity: 0.5; }
</style>


