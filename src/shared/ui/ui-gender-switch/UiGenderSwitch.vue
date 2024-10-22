<script lang="ts" setup>
import type { Gender } from "@types";
import { computed } from "vue";

const gender = defineModel<Gender>({
  required: true,
});

const checked = computed(() => gender.value === 'male')
</script>

<template>
  <label class="ui-gender-switch" :class="{'--active': checked}">
    <input
      class="ui-gender-switch__input"
      type="checkbox"
      v-model="gender"
      true-value="male"
      false-value="female"
      :checked
    />
  </label>
</template>

<style lang="scss" scoped>
.ui-gender-switch {
  $padding: 2px;
  padding: $padding;
  width: 32px;
  height: 20px;
  display: block;

  background-color: $color-basic-black;
  border-radius: 10px;
  position: relative;

  &__input {
    display: none;
  }

  &::before {
    content: "";
    height: calc(100% - $padding * 2);
    aspect-ratio: 1/1;

    position: absolute;
    left: 0;
    top: 50%;
    transform: translate($padding, -50%);
    transition: transform 0.2s linear;

    background-color: $color-basic-white;
    border-radius: 50%;
  }

  &.--active {
    &::before {
      transform: translate(calc(100% - $padding), -50%);
    }
  }
}
</style>
