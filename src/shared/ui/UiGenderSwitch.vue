<script lang="ts" setup>
import UiSvg from "@shared/ui/UiSvg.vue";
import type { Gender } from "@types";
import { computed } from "vue";

const gender = defineModel<Gender>({
  required: true,
});

const checked = computed(() => gender.value === "male");
</script>

<template>
  <label class="ui-gender-switch">
    <input
      class="ui-gender-switch__input"
      type="checkbox"
      v-model="gender"
      true-value="male"
      false-value="female"
      :checked
    />
    <span class="ui-gender-switch__icon-wrapper">
      <UiSvg v-if="checked" class="ui-gender-switch__icon" name="masculine" />
      <UiSvg v-else class="ui-gender-switch__icon" name="feminine" />
    </span>
  </label>
</template>

<style lang="scss" scoped>
$padding: 2px;
$p: ".ui-gender-switch";
#{$p} {
  padding: $padding;
  width: 32px;
  height: 20px;
  display: block;

  background-color: $color-basic-black;
  border-radius: 10px;
  position: relative;

  &__input {
    display: none;
    &:checked + #{$p}__icon-wrapper {
      transform: translate(calc(100% - $padding), -50%);
    }
  }

  &__icon-wrapper {
    height: calc(100% - $padding * 2);
    aspect-ratio: 1/1;
    display: inline-block;

    position: absolute;
    left: 0;
    top: 50%;
    transform: translate($padding, -50%);
    transition: transform 0.2s linear;

    border-radius: 50%;
    background-color: $color-basic-white;
  }

  &__icon {
    display: inline-block;
    color: $color-basic-accent;
  }
}
</style>
