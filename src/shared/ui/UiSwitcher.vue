<script setup lang="ts" generic="T extends UiSwitcherVariantType">
import { defineModel, defineProps, useId } from "vue";
import type {
  OptionType,
  OptionWithIconType,
  OptionWithSubtitleType,
} from "@types";
import { UiSvg } from "@shared/ui";

export type UiSwitcherVariantType =
  | "text"
  | "textWithIcon"
  | "textWithSubtitle";

type UiSwitcherOptionsType = {
  text: OptionType;
  textWithIcon: OptionWithIconType;
  textWithSubtitle: OptionWithSubtitleType;
};

const props = defineProps<{
  type: T;
  options: UiSwitcherOptionsType[T][];
}>();

const picked = defineModel<string>({
  required: true,
});

const switcherName = useId();
</script>

<template>
  <div ref="switcher" class="ui-switcher">
    <label
      v-for="option in props.options"
      :key="option.value"
      :class="{ 'ui-switcher__option--picked': picked === option.value }"
      class="ui-switcher__option"
    >
      <template v-if="props.type === 'textWithSubtitle'">
        <span
          class="ui-switcher__option-label ui-switcher__option-label--start"
        >
          {{ option.label }}
        </span>
        <span class="ui-switcher__option-subtitle">
          {{ (option as OptionWithSubtitleType).subtitle }}
        </span>
      </template>

      <template v-else-if="props.type === 'textWithIcon'">
        <span class="ui-switcher__option-label">
          <UiSvg
            :name="(option as OptionWithIconType).iconName"
            size="16"
            class="ui-switcher__option-label-icon"
          />
          {{ option.label }}
        </span>
      </template>

      <template v-else>
        <span class="ui-switcher__option-label">
          {{ option.label }}
        </span>
      </template>

      <input
        :name="switcherName"
        :value="option.value"
        :checked="picked === option.value"
        type="radio"
        class="ui-switcher__input"
        v-model="picked"
      />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";
@use "@shared/styles/mixins/transitions.scss";

.ui-switcher {
  padding: 4px 4px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 4px;
  border-radius: 4px;

  background-color: colors.$beige;

  &__option {
    padding: 6px 8px;
    width: clamp(60px, 100%, 240px);
    min-height: 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;

    border-radius: 4px;
    background-color: transparent;
    @include transitions.ease(background-color);

    &-label {
      width: 100%;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 4px;

      color: colors.$dark-grey;
      @include transitions.ease(color);

      &--start {
        justify-content: start;
      }
    }

    &-subtitle {
      color: colors.$dark-grey;
    }

    &--picked {
      background-color: colors.$white;
      box-shadow: 0 1px 1px 0 colors.$shadow;
    }

    &--picked > &-label {
      color: colors.$black;
    }
  }

  &__input {
    display: none;
  }
}
</style>
