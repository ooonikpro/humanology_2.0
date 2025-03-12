<script setup lang="ts" generic="T extends VariantType">
import type { OptionByVariantType, VariantType } from "@types";
import UiVariant from "./UiVariant.vue";

const props = defineProps<{
  type: T;
  options: OptionByVariantType[T][];
}>();

const picked = defineModel<string>({
  required: true,
});

const switcherName = useId();
</script>

<template>
  <div class="ui-switcher">
    <UiVariant
      v-for="option in props.options"
      :key="option.value"
      v-bind="option"
      :picked="picked"
    >
      <input
        v-model="picked"
        :name="switcherName"
        :value="option.value"
        :checked="picked === option.value"
        type="radio"
        class="ui-switcher__input"
      />
    </UiVariant>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";

.ui-switcher {
  padding: 4px 4px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 4px;
  border-radius: 4px;

  background-color: colors.$beige;

  &__input {
    display: none;
  }
}
</style>
