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
  <label class="ui-gender-swap">
    <input
      class="ui-gender-swap__input"
      type="checkbox"
      v-model="gender"
      true-value="male"
      false-value="female"
      :checked
    />
    <span class="ui-gender-swap__icon-wrapper">
      <UiSvg class="ui-gender-swap__icon" :name="gender" />
    </span>
  </label>
</template>

<style lang="scss" scoped>
$padding: 2px;
$icon-width: 16px;
.ui-gender-swap {
  padding: $padding;
  width: 32px;
  height: 20px;
  display: block;

  background-color: $color-basic-black;
  border-radius: 10px;

  &__input {
    display: none;
  }

  &__input:checked + &__icon-wrapper {
    transform: translateX($icon-width - $padding * 2);
  }

  &__icon-wrapper {
    width: 16px;
    height: 16px;
    display: flex;

    transform: translateX(0);
    transition: transform 300ms linear;

    border-radius: 50%;
    background-color: $color-basic-white;
  }

  &__icon {
    margin: auto;
    width: 12px;
    height: 12px;
    color: $color-basic-accent;

    &:deep(svg) {
      vertical-align: top;
    }
  }
}
</style>
