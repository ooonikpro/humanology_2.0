<script lang="ts" setup>
import type { IconNameType } from "@types";
import { GenderEnum } from "@shared/constants";

import UiSvg from "./UiSvg.vue";

const gender = defineModel<Gender | GenderEnum>({
  required: true,
});
</script>

<template>
  <label class="ui-gender-toggle">
    <input
      :true-value="GenderEnum.male"
      :false-value="GenderEnum.female"
      type="checkbox"
      class="ui-gender-toggle__input"
      v-model="gender"
    />
    <span class="ui-gender-toggle__pointer">
      <UiSvg
        :name="gender as IconNameType"
        size="12"
        color="accent"
        class="ui-gender-toggle__pointer-icon"
      />
    </span>
  </label>
</template>

<style lang="scss" scoped>
@use "../styles/variables/colors";
@use "../styles/mixins/transitions";

$pointer-size: 16px;
$padding: 2px;

.ui-gender-toggle {
  padding: $padding;
  width: $pointer-size * 2;
  height: $pointer-size + $padding * 2;
  display: block;
  background-color: colors.$black;
  border-radius: $pointer-size;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__input:checked + &__pointer {
    transform: translateX($pointer-size - $padding * 2);
  }

  &__pointer {
    @include transitions.ease(transform);

    width: $pointer-size;
    height: $pointer-size;
    display: flex;
    border-radius: 50%;
    background-color: colors.$white;
  }

  &__pointer-icon {
    margin: auto;
  }
}
</style>
