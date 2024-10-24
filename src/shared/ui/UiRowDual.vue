<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  leftText: string;
  rightText: string;
}>();
</script>

<template>
  <div class="ui-row-dual">
    <span class="ui-row-dual__text left">{{ leftText }}</span>
    <span class="ui-row-dual__line"></span>
    <span class="ui-row-dual__text right">{{ rightText }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/colors";

.ui-row-dual {
  display: flex;
  gap: 8px;
  align-items: baseline;
    .right {
      opacity: 0.5;
    }
    &__line {
      flex-grow: 1;
      border-bottom: 1px dotted colors.$black;
    }
}
</style>
