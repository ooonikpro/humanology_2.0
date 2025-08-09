<script setup lang="ts">
const props = defineProps<{
  percent: number
  color: string
}>()
</script>

<template>
  <div class="progress-bar">
    <div class="progress-fill" :style="{ width: `${Math.max(0, Math.min(100, percent))}%`, backgroundColor: color }" />
  </div>
</template>

<style scoped lang="scss">
.progress-bar { position: absolute; top: 0; left: 0; right: 0; height: 8px; background-color: #e0e0e0; border-radius: 2px 2px 0 0; overflow: hidden; }
.progress-fill { height: 100%; transition: width 0.3s ease; }
</style>


