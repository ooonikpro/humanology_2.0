<script lang="ts" setup>
import type { IconNameType } from "@types";
import { GenderEnum } from "@shared/constants/gender";
import UiSvg from "./UiSvg.vue";

const gender = defineModel<GenderEnum>({
  required: true,
});
</script>

<template>
  <label class="ui-gender-switcher">
    <input
      v-model="gender"
      :true-value="GenderEnum.male"
      :false-value="GenderEnum.female"
      type="checkbox"
      class="ui-gender-switcher__input"
    />
    <span class="ui-gender-switcher__pointer">
      <UiSvg
        :name="gender as IconNameType"
        class="ui-gender-switcher__pointer-icon"
      />
    </span>
  </label>
</template>

<style lang="scss" scoped>
@use "../styles/variables/colors";
@use "../styles/mixins/transitions";

$pointer-size: 16px;
$padding: 2px;

.ui-gender-switcher {
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
    width: 12px;
    height: 12px;
    color: colors.$accent;
  }
}
</style>
