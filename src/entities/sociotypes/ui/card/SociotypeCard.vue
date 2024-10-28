<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { SociotypeDataType } from "@types";
import { UiSvg, UiText, UiGenderSwitcher } from "@shared/ui";
import { GenderEnum } from "@shared/constants";

import model from "../../model";

const props = defineProps<{ mini?: boolean; data: SociotypeDataType }>();
const gender = ref(GenderEnum.male);
</script>

<template>
  <div class="sociotype-card" :class="{ 'sociotype-card--mini': props.mini }">
    <div class="sociotype-card__gradient"></div>
    <div
      class="sociotype-card__header"
      :class="{ 'sociotype-card__header--mini': props.mini }"
    >
      <UiText tag="span" color="black">{{ props.data.id }}</UiText>
      <UiText v-if="!props.mini" tag="span" color="role">
        {{ props.data.populationPercentage }}
      </UiText>
      <UiText tag="span" color="grey">{{ props.data.alias }}</UiText>
      <UiText v-if="!props.mini" tag="span" color="grey">
        {{ props.data.personalitiesTerm }}
      </UiText>
      <UiText v-if="!props.mini" tag="span" color="grey">
        {{ props.data.socionicAbbrevation }}
      </UiText>

      <hr v-if="!props.mini" class="sociotype-card__header-line" />
    </div>
    <div
      class="sociotype-card__body"
      :class="{ 'sociotype-card__body--mini': props.mini }"
    >
      <UiText
        tag="h2"
        font="alternative"
        color="role"
        class="sociotype-card__title"
        :class="{ 'sociotype-card__title--mini': props.mini }"
      >
        {{ props.data.name }}
      </UiText>

      <slot name="body"></slot>
    </div>

    <slot name="footer" />

    <UiSvg
      :name="`${props.data.id}-circle`"
      class="sociotype-card__quadra-circle"
    />
    <img
      :src="model.getPortraitSrc(props.data.id, gender)"
      :alt="props.data.name"
      class="sociotype-card__portrait"
    />
    <UiGenderSwitcher
      v-if="!props.mini"
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
  border-top: 1px solid colors.$quadra;
  background: colors.$white;

  &__gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    background: linear-gradient(
      0,
      rgba(colors.$white, 0) 10%,
      colors.$quadra 98%
    );
    opacity: 0.1;
  }

  &__header {
    display: flex;
    gap: 6px;
    position: relative;
    padding: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &-line {
      width: 53%;
      position: absolute;
      height: 0;
      bottom: 0;
      border: 0;
      border-bottom: 1px solid colors.$quadra;
    }

    &--mini {
      padding-bottom: 0;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    gap: 12px;

    &--mini {
      padding-top: 0;
      gap: 8px;
    }
  }

  &__title {
    width: 100%;
    font-size: min(8vw, 30px);
    line-height: min(8vw, 40px);
    overflow: hidden;

    &--mini {
      font-size: min(7vw, 25px);
    }
  }

  &__quadra-circle,
  &__portrait {
    position: absolute;
    height: min(32vw, 90%);
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

  &--mini {
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(colors.$black, 0.1);
  }
}
</style>
