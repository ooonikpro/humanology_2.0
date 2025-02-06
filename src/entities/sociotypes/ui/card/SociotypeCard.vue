<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { SociotypeDataType } from "@types";
import { UiText, UiGenderToggle } from "@shared/ui";
import { GenderEnum } from "@shared/constants";

import SociotypeQuadraCircle from "../quadras/SociotypeQuadraCircle.vue";
import SociotypePortrait from "../portraits/SociotypePortrait.vue";

const props = defineProps<{
  mini?: boolean;
  gender?: GenderEnum;
  data: SociotypeDataType;
}>();
const genderModel = ref(GenderEnum.male);
</script>

<template>
  <div :class="{ 'sociotype-card--mini': props.mini }" class="sociotype-card">
    <div class="sociotype-card__content">
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
        :gender="props.gender ?? genderModel"
        :id="props.data.id"
        class="sociotype-card__portrait"
      />

      <UiGenderToggle
        v-if="!props.gender && !props.mini"
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top: 1px solid colors.$quadra;
  background: colors.$white;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.1;
      background: linear-gradient(0, colors.$role 1%, colors.$quadra 56%);
    }
  }

  &__photo {
    width: 96px;
    height: 96px;
    margin: 8px 8px 0;
  }

  &__title {
    width: 100%;
    font-size: min(8vw, 30px);
    line-height: min(8vw, 40px);
    overflow: hidden;
    margin: 12px 8px;
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
  }

  &__gender-switcher {
    position: absolute;
    right: 12px;
    bottom: 8px;
  }

  &--mini {
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 colors.$shadow;
  }

  @include bem.modificatorForChildren("mini") {
    &__title {
      font-size: min(7vw, 24px);
      margin: -8px 8px 8px;
    }

    &__quadra-circle,
    &__portrait {
      height: min(32vw, 90%);
    }
  }
}
</style>
