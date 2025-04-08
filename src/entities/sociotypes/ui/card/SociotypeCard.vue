<script lang="ts" setup>
import type { Gender, SociotypeAgeType, SociotypeDataType } from "@types";

import { GenderEnum } from "@shared/constants";

import SociotypeQuadraCircle from "../quadras/SociotypeQuadraCircle.vue";
import SociotypePortrait from "../portraits/SociotypePortrait.vue";
import SociotypeCardRationalsBlock from "./SociotypeCardRationalsBlock.vue";

const { age = "young", ...props } = defineProps<{
  mini?: boolean;
  gender?: Gender | GenderEnum;
  age?: SociotypeAgeType;
  data: SociotypeDataType;
  isShowToggle?: boolean;
  bordered?: boolean;
}>();
const genderModel = ref(toValue(props.gender) ?? GenderEnum.male);
</script>

<template>
  <div
    :class="{
      'sociotype-card--mini': props.mini,
      'sociotype-card--bordered': props.bordered,
    }"
    class="sociotype-card"
  >
    <div class="sociotype-card__content">
      <SociotypeCardRationalsBlock
        :mind-key="props.data.mindKey"
        class="sociotype-card__rationals"
      />

      <slot name="header" />

      <template v-if="!$slots.photo">
        <UiText
          preset="title-alternative"
          color="role"
          class="sociotype-card__title"
        >
          {{ props.data.name }}
        </UiText>

        <slot name="groups-and-quadras"></slot>

        <slot name="yungs" />
      </template>

      <template v-else>
        <div class="sociotype-card__photo">
          <slot name="photo" />
        </div>
      </template>

      <SociotypeQuadraCircle
        :id="props.data.id"
        class="sociotype-card__quadra-circle"
      />

      <SociotypePortrait
        :gender="genderModel"
        :age="age"
        :id="props.data.id"
        class="sociotype-card__portrait"
      />

      <UiGenderToggle
        v-if="props.isShowToggle && !props.mini"
        class="sociotype-card__gender-switcher"
        v-model="genderModel"
      />
    </div>

    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/bem";

.sociotype-card {
  position: relative;
  border-radius: 4px;
  border-top: 1px solid colors.$quadra;
  background: colors.$white;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;

    &::before,
    &::after {
      content: "";
      height: 48px;
      position: absolute;
      left: 0;
      width: 100%;
      opacity: 0.1;
    }

    &::before {
      top: 0;
      background: linear-gradient(to top, colors.$white 0%, colors.$quadra);
    }

    &::after {
      bottom: 0;
      background: linear-gradient(to bottom, colors.$white 0%, colors.$role);
    }
  }

  &__rationals {
    position: absolute;
    right: 8px;
    top: 8px;
  }

  &__photo {
    width: 96px;
    height: 96px;
    margin: 8px 8px 0;
  }

  &__title {
    width: 98%;
    overflow: hidden;
    margin: 12px 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__quadra-circle,
  &__portrait {
    position: absolute;
    height: min(50vw, 90%);
    aspect-ratio: 1/1;
    bottom: 0;
  }

  &__quadra-circle {
    top: 0;
    right: 8px;
    margin: auto;
  }

  &__portrait {
    right: 0;
    z-index: 1;
  }

  &__gender-switcher {
    position: absolute;
    right: 12px;
    bottom: 8px;
    z-index: 1;
  }

  &--bordered {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid colors.$role;
  }

  &--mini {
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 colors.$shadow;
  }

  @include bem.modificatorForChildren("mini") {
    &__title {
      font-size: min(7vw, 28px);
      margin: -8px 8px 8px;
    }

    &__quadra-circle,
    &__portrait {
      height: min(32vw, 80%);
    }
  }
}
</style>
