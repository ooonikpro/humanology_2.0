<script setup lang="ts">
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import useCharacteristicSheet from "../lib/hooks/useCharacteristicSheet";
import model from "../model";

const props = defineProps<SociotypeDataType>();

const { goToSheet } = useCharacteristicSheet(() => props.id);
</script>

<template>
  <SociotypeSignsBlock class="sociotype-mentality" title="Ментальность">
    <UiColumnDual
      :left-link="goToSheet('temperament', props.temperament)"
      leftTitle="Темперамент"
    >
      <template #left>
        <UiText color="role" preset="large">
          {{ model.getTemperament(props.temperament).type }}
        </UiText>
        <UiZapList
          :temperamentLvl="model.getTemperament(props.temperament).lvl"
        />
      </template>
      <template #leftBottom>
        <UiText>
          {{ model.getTemperament(props.temperament).label }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      :left-link="goToSheet('motivation', props.stimulant)"
      :right-link="goToSheet('character', props.gender)"
      leftTitle="Стимул"
      rightTitle="Характер"
    >
      <template #left>
        <UiText color="role" preset="large">
          {{ model.getMotivation(props.stimulant) }}
        </UiText>
      </template>
      <template #right>
        <UiText preset="large">
          {{ model.getGender(props.gender) }}
        </UiText>
        <UiSvg :name="props.gender" size="20" />
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      :left-link="goToSheet('communication_style', props.communication)"
      :right-link="goToSheet('companion', props.companion)"
      leftTitle="Стиль общения"
      rightTitle="Собеседник"
    >
      <template #left>
        <UiText preset="large">
          {{ model.getCommunicationStyle(props.communication) }}
        </UiText>
      </template>
      <template #right>
        <UiText preset="large">
          {{ model.getCompanion(props.companion) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      :left-link="goToSheet('mindset', props.mindset)"
      leftTitle="Мышление"
    >
      <template #left>
        <UiText preset="large">
          {{ model.getMindset(props.mindset) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      :left-link="goToSheet('worldview', props.alignment)"
      leftTitle="Мировоззрение"
    >
      <template #left>
        <UiText preset="large">
          {{ model.getAlignment(props.alignment) }}
        </UiText>
      </template>
    </UiColumnDual>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.sociotype-mentality {
  &__gender-icon {
    height: 20px;
    width: 20px;
  }
}
</style>
