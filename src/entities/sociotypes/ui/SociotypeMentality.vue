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
      leftTitle="Темперамент"
      :left-link="goToSheet('temperament', props.temperament)"
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
      leftTitle="Стимул"
      :left-link="goToSheet('motivation', props.stimulant)"
      rightTitle="Характер"
      :right-link="goToSheet('character', props.gender)"
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
      leftTitle="Стиль общения"
      :left-link="goToSheet('communication_style', props.communication)"
      rightTitle="Собеседник"
      :right-link="goToSheet('companion', props.companion)"
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
      leftTitle="Мышление"
      :left-link="goToSheet('mindset', props.mindset)"
    >
      <template #left>
        <UiText preset="large">
          {{ model.getMindset(props.mindset) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      leftTitle="Мировоззрение"
      :left-link="goToSheet('worldview', props.alignment)"
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
