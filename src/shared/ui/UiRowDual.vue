<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  leftText: string;
  rightText: string;
}>();
</script>

<template>
  <div class="ui-row-dual">
    <span class="ui-row-dual__text">{{ leftText }}</span>
    <span class="ui-row-dual__line"></span>
    <span class="ui-row-dual__text">{{ rightText }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/colors";
.ui-row-dual {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  height: 32px;
}

.ui-row-dual__text {
  font-size: 18px;
  text-decoration: none;
  padding-bottom: 2px;
}

.ui-row-dual__line {
  flex-grow: 1;
  border-bottom: 1px dotted black;
  margin: 0 10px;
}
</style>
