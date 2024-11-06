<script lang="ts" setup>
import { defineProps } from "vue";
import UiSvg from "./UiSvg.vue";

const props = defineProps<{ temperamentLvl: number }>();
</script>

<template>
  <div class="zap-list">
    <UiSvg
      v-for="n in 4"
      :key="n"
      name="zap"
      class="zap-list__item"
      :class="{
        'zap-list__item--active': n <= props.temperamentLvl,
      }"
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
    width: 20px;
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
