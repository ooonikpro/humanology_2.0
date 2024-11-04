<script setup lang="ts">
import { computed, defineProps, toValue } from "vue";
import type { SociotypeDataType } from "@types";

import UiSeparator from "@shared/ui/UiSeparator.vue";
import UiSvg from "@shared/ui/UiSvg.vue";
import UiText from "@shared/ui/UiText.vue";

import model from "../model";
import { TemperamentEnum } from "../config";
import useSociotypeColors from "../lib/hooks/useSociotypeColors";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();

const quadra = computed(() => toValue(props).quadra);
const role = computed(() => toValue(props).role);
const colors = computed(() => useSociotypeColors({ quadra, role }));

const sociotypeData = computed(() => ({
  temperament: model.getTemperanment(props.temperament),
  motivation: model.getMotivation(props.stimulant),
  communicationStyle: model.getCommunicationStyle(props.communication),
  companion: model.getCompanion(props.companion),
  mindset: model.getMindset(props.mindset),
  alignment: model.getAlignment(props.alignment),
  gender: model.getGender(props.gender),
  zapsQuantity: TemperamentEnum[props.temperament],
}));
</script>

<template>
  <SociotypeSignsBlock class="sociotype-mentality" title="Ментальность">
    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Темперамент</UiText>
      <div class="sociotype-mentality__text-wrapper">
        <UiText
          tag="span"
          class="sociotype-mentality__text"
          :style="{ color: colors.value['--color-role'] }"
        >
          {{ sociotypeData.temperament.type }}
        </UiText>
        <div class="sociotype-mentality__zap-list">
          <UiSvg
            v-for="n in 4"
            class="sociotype-mentality__zap-item"
            :style="[
              n <= sociotypeData.zapsQuantity
                ? {
                    color: colors.value['--color-role'],
                  }
                : { opacity: 0.25 },
            ]"
            :key="n"
            name="zap"
          />
        </div>
      </div>
      <UiText tag="p" class="sociotype-mentality__text">
        {{ sociotypeData.temperament.label }}
      </UiText>
    </div>
    <UiSeparator />

    <div class="sociotype-mentality__column-dual">
      <div class="sociotype-mentality__column-dual--left">
        <UiText tag="h4" class="sociotype-mentality__title">Стимул</UiText>
        <UiText
          tag="p"
          class="sociotype-mentality__text"
          :style="{ color: colors.value['--color-role'] }"
        >
          {{ sociotypeData.motivation }}
        </UiText>
      </div>
      <div class="sociotype-mentality__column-dual--right">
        <UiText tag="h4" class="sociotype-mentality__title">Характер</UiText>
        <UiText tag="p" class="sociotype-mentality__text">
          <UiText tag="span">{{ sociotypeData.gender }}</UiText>
          <UiSvg
            :name="props.gender"
            class="sociotype-mentality__gender-icon"
          />
        </UiText>
      </div>
    </div>
    <UiSeparator />

    <div class="sociotype-mentality__column-dual">
      <div class="sociotype-mentality__column-dual--left">
        <UiText tag="h4" class="sociotype-mentality__title"
          >Стиль общения</UiText
        >
        <UiText tag="p" class="sociotype-mentality__text">
          {{ sociotypeData.communicationStyle }}
        </UiText>
      </div>
      <div class="sociotype-mentality__column-dual--right">
        <UiText tag="h4" class="sociotype-mentality__title">Собеседник</UiText>
        <UiText tag="p" class="sociotype-mentality__text">{{
          sociotypeData.companion
        }}</UiText>
      </div>
    </div>
    <UiSeparator />

    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Мышление</UiText>
      <UiText tag="p" class="sociotype-mentality__text">
        {{ sociotypeData.mindset }}
      </UiText>
    </div>
    <UiSeparator />
    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Мировоззрение</UiText>
      <UiText tag="p" class="sociotype-mentality__text">{{
        sociotypeData.alignment
      }}</UiText>
    </div>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";
.sociotype-mentality {
  margin-top: 16px;

  &__column-dual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
  }

  &__text-wrapper {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 15px;
    line-height: 20px;
    opacity: 0.5;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 18px;
    line-height: 24px;
  }

  &__zap-list {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  &__zap-item {
    width: 20px;
    margin-left: -4px;
  }

  &__gender-icon {
    height: 20px;
    width: 20px;
  }
}
</style>
