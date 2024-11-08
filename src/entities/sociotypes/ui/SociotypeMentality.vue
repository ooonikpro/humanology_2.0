<script setup lang="ts">
import { computed, defineProps } from "vue";
import type { SociotypeDataType } from "@types";

import { UiColumnDual, UiSvg, UiText, UiZapList } from "@shared/ui";

import model from "../model";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();

const sociotypeData = {
  temperament: model.getTemperanment(props.temperament),
  motivation: model.getMotivation(props.stimulant),
  communicationStyle: model.getCommunicationStyle(props.communication),
  companion: model.getCompanion(props.companion),
  mindset: model.getMindset(props.mindset),
  alignment: model.getAlignment(props.alignment),
  gender: model.getGender(props.gender),
};
</script>

<template>
  <SociotypeSignsBlock class="sociotype-mentality" title="Ментальность">
    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Темперамент</UiText>
      <div class="sociotype-mentality__text-wrapper">
        <UiText tag="span" class="sociotype-mentality__text" color="role">
          {{ sociotypeData.temperament.type }}
        </UiText>
        <UiZapList :temperamentLvl="sociotypeData.temperament.lvl"></UiZapList>
      </div>
      <UiText tag="p" class="sociotype-mentality__text">
        {{ sociotypeData.temperament.label }}
      </UiText>
    </div>
    <hr />

    <UiColumnDual leftTitle="Стимул" rightTitle="Характер">
      <template #left>
        <UiText tag="p" class="sociotype-mentality__text" color="role">
          {{ sociotypeData.motivation }}
        </UiText>
      </template>
      <template #right>
        <UiText tag="p" class="sociotype-mentality__text">
          <UiText tag="span">{{ sociotypeData.gender }}</UiText>
          <UiSvg
            :name="props.gender"
            class="sociotype-mentality__gender-icon"
          />
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Стиль общения" rightTitle="Собеседник">
      <template #left>
        <UiText tag="p" class="sociotype-mentality__text">
          {{ sociotypeData.communicationStyle }}
        </UiText>
      </template>
      <template #right>
        <UiText tag="p" class="sociotype-mentality__text">
          <UiText tag="span">{{ sociotypeData.companion }}</UiText>
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Мышление</UiText>
      <UiText tag="p" class="sociotype-mentality__text">
        {{ sociotypeData.mindset }}
      </UiText>
    </div>
    <hr />

    <div class="sociotype-mentality__block">
      <UiText tag="h4" class="sociotype-mentality__title">Мировоззрение</UiText>
      <UiText tag="p" class="sociotype-mentality__text">
        {{ sociotypeData.alignment }}
      </UiText>
    </div>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.sociotype-mentality {
  margin-top: 16px;

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

  &__gender-icon {
    height: 20px;
    width: 20px;
  }
}
</style>
