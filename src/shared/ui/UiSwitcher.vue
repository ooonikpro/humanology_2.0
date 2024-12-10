<script setup lang="ts">
import { defineModel, computed, useTemplateRef } from "vue";
import type { IconNameType } from "@types";
import { UiSvg } from "@shared/ui";

export type DataItemType = {
  label: string;
  iconName?: IconNameType;
  subtitle?: string;
  value: string | number;
};

const props = defineProps<{
  name: string;
  data: DataItemType[];
}>();

const picked = defineModel<DataItemType["value"]>({
  required: true,
});

function onPick(newPicked: DataItemType["value"]) {
  picked.value = newPicked;
}

const switcherContainer = useTemplateRef("switcher");

const pickedChoiceElement = computed<HTMLElement | undefined>(() => {
  const pickedIndex = props.data.findIndex(
    (choice) => choice.value === picked.value,
  );
  return switcherContainer.value?.children[pickedIndex] as
    | HTMLElement
    | undefined;
});

const pickedChoiceElementSize = computed(() => ({
  width: pickedChoiceElement.value?.clientWidth ?? 0,
  height: pickedChoiceElement.value?.clientHeight ?? 0,
}));

const transformValue = computed(
  () => pickedChoiceElement.value?.getBoundingClientRect().left ?? 0,
);
</script>

<template>
  <div ref="switcher" class="ui-switcher">
    <label
      v-for="choice in props.data"
      :key="choice.value"
      :class="{ 'ui-switcher__choice--picked': picked === choice.value }"
      class="ui-switcher__choice"
    >
      <span v-if="choice.subtitle" class="ui-switcher__choice-subtitle">
        {{ choice.subtitle }}
      </span>

      <span class="ui-switcher__choice-label">
        <UiSvg
          v-if="choice.iconName"
          :name="choice.iconName"
          class="ui-switcher__choice-label-icon"
        />
        {{ choice.label }}
      </span>

      <input
        :name="props.name"
        :value="choice.value"
        :checked="picked === choice.value"
        type="radio"
        class="ui-switcher__input"
        @change="onPick(choice.value)"
      />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors.scss";

$transition-duration: 0.3s;
$gray: rgba(colors.$black, 0.6);

.ui-switcher {
  padding: 4px 8px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;

  position: relative;
  z-index: 1;

  background-color: colors.$beige;

  &::before {
    --height: calc(v-bind("pickedChoiceElementSize.height") * 1px);
    content: "";

    width: calc(v-bind("pickedChoiceElementSize.width") * 1px);
    height: var(--height);
    display: block;

    position: absolute;
    top: calc((100% - var(--height)) / 2);
    left: 0;
    z-index: -1;

    transform: translateX(calc(v-bind(transformValue) * 1px));
    transition-property: transform, width;
    transition-duration: $transition-duration;
    transition-timing-function: linear;

    border-radius: 4px;
    background-color: colors.$white;
  }

  &__choice {
    padding: 6px 8px;
    flex: 1 0 max-content;

    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;

    background-color: transparent;

    &-label {
      width: 100%;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 4px;

      color: $gray;
      transition: color $transition-duration linear;

      &-icon {
        width: 16px;
        height: 16px;
        // иконка загружается через динамический импорт -> width before неверно исчисляется
        // также шрифты подгружаются позже -> width before неверно исчисляется
        // width before неверно исчисляется только при 1-м рендеринге
      }
    }

    &-subtitle {
      color: rgba(colors.$black, 0.4);
      transition: color $transition-duration linear;
    }

    &-subtitle + &-label {
      justify-content: start;
    }

    &--picked > &-label {
      color: colors.$black;
    }

    &--picked > &-subtitle {
      color: $gray;
    }
  }

  &__input {
    display: none;
  }
}
</style>
