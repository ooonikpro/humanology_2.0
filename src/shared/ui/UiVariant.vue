<script setup lang="ts">
import type {
  OptionType,
  OptionWithIconType,
  OptionWithSubtitleType,
} from "@types";

const props = defineProps<
  Partial<OptionWithIconType & OptionWithSubtitleType & OptionType> & {
    isSelected?: boolean;
  }
>();
</script>

<template>
  <label
    :class="{ 'ui-variant--selected': props.isSelected }"
    class="ui-variant"
  >
    <span
      :class="{ 'ui-variant__label--with-subtitle': props.subtitle }"
      class="ui-variant__label"
    >
      <UiSvg
        v-if="props.iconName"
        :name="props.iconName"
        size="16"
        class="ui-variant__label-icon"
      />
      {{ props.label }}
    </span>

    <span v-if="props.subtitle" class="ui-variant__subtitle">
      {{ props.subtitle }}
    </span>

    <slot />
  </label>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";
@use "@shared/styles/mixins/transitions.scss";

.ui-variant {
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

  &__label {
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 4px;

    color: colors.$dark-grey;
    @include transitions.ease(color);

    &--with-subtitle {
      justify-content: start;
    }
  }

  &__subtitle {
    color: colors.$dark-grey;
    font-size: 14px;
  }

  &--selected {
    background-color: colors.$white;
    box-shadow: 0 1px 1px 0 colors.$shadow;
  }

  &--selected > &__label {
    color: colors.$black;
  }
}
</style>
