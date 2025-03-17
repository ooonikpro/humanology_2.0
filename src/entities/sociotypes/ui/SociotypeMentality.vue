<script setup lang="ts">
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import model from "../model";

const props = defineProps<SociotypeDataType>();
</script>

<template>
  <SociotypeSignsBlock class="sociotype-mentality" title="Ментальность">
    <UiColumnDual leftTitle="Темперамент">
      <template #left>
        <UiText color="role" preset="large">
          {{ model.getTemperament(props.temperament).type }}
        </UiText>
        <UiZapList
          :temperamentLvl="model.getTemperament(props.temperament).lvl"
        ></UiZapList>
      </template>
      <template #leftBottom>
        <UiText>
          {{ model.getTemperament(props.temperament).label }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Стимул" rightTitle="Характер">
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

    <UiColumnDual leftTitle="Стиль общения" rightTitle="Собеседник">
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

    <UiColumnDual leftTitle="Мышление">
      <template #left>
        <UiText preset="large">
          {{ model.getMindset(props.mindset) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Мировоззрение">
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
