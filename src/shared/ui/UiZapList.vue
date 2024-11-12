<script lang="ts" setup>
import { defineProps } from "vue";
import UiSvg from "./UiSvg.vue";

const props = defineProps<{ temperamentLvl: 1 | 2 | 3 | 4 }>();
</script>

<template>
  <div class="zap-list">
    <UiSvg
      v-for="n in 4"
      :key="n"
      :class="{
        'zap-list__item--active': n <= props.temperamentLvl,
      }"
      name="zap"
      class="zap-list__item"
      size="20"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/colors";

.zap-list {
  display: flex;
  align-items: center;
  margin-left: 8px;

  &__item {
    margin-left: -4px;
    color: colors.$black;
    opacity: 0.25;

    &--active {
      color: colors.$role;
      opacity: 1;
    }
  }
}
</style>
