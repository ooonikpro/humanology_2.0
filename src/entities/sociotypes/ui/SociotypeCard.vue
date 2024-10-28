<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { SociotypeDataType } from "@types";
import { UiSvg, UiText, UiGenderSwitcher } from "@shared/ui";
import { GenderEnum } from "@shared/constants";

import model from "../model";

const props = defineProps<SociotypeDataType>();
const gender = ref(GenderEnum.male);
</script>

<template>
  <div class="sociotype-card">
    <div class="sociotype-card__top-gradient"></div>
    <div class="sociotype-card__bottom-gradient"></div>
    <div class="sociotype-card__header">
      <UiText tag="span" color="black">{{ props.id }}</UiText>
      <UiText tag="span" color="role">
        {{ props.populationPercentage }}
      </UiText>
      <UiText tag="span" color="grey">{{ props.alias }}</UiText>
      <UiText tag="span" color="grey">{{ props.personalitiesTerm }}</UiText>
      <UiText tag="span" color="grey">{{ props.socionicAbbrevation }}</UiText>

      <hr class="sociotype-card__header-line" />
    </div>
    <div class="sociotype-card__body">
      <UiText
        tag="h2"
        font="alternative"
        color="role"
        class="sociotype-card__title"
      >
        {{ props.name }}
      </UiText>

      <slot name="body"></slot>
    </div>

    <slot name="footer" />

    <UiSvg :name="`${props.id}-circle`" class="sociotype-card__quadra-circle" />
    <img
      :src="model.getPortraitSrc(props.id, gender)"
      :alt="props.name"
      class="sociotype-card__portrait"
    />
    <UiGenderSwitcher
      v-model="gender"
      class="sociotype-card__gender-switcher"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card {
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top: 1px solid var(--color-quadra);
  border-bottom: 1px solid var(--color-role);

  &__top-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    background: linear-gradient(
      0,
      rgba(colors.$white, 0) 10%,
      var(--color-quadra) 98%
    );
    opacity: 0.1;
  }

  &__bottom-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(colors.$white, 0) 45%,
      var(--color-role) 100%
    );
    opacity: 0.1;
  }

  &__header {
    display: flex;
    gap: 6px;
    position: relative;
    padding: 8px;

    &-line {
      width: 53%;
      position: absolute;
      height: 0;
      bottom: 0;
      border: 0;
      border-bottom: 1px solid var(--color-quadra);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    gap: 12px;
  }

  &__title {
    width: 100%;
    font-size: min(8vw, 40px);
    line-height: 44px;
    overflow: hidden;
  }

  &__quadra-circle,
  &__portrait {
    position: absolute;
    height: 90%;
    aspect-ratio: 1/1;
    right: 8px;
  }

  &__quadra-circle {
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &__portrait {
    bottom: 0;
  }

  &__gender-switcher {
    position: absolute;
    right: 12px;
    bottom: 8px;
  }
}
</style>
