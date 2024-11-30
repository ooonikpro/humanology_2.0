<script setup lang="ts">
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";
import { UiColumnDual, UiSvg, UiText, UiZapList } from "@shared/ui";
import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import model from "../model";

const props = defineProps<SociotypeDataType>();

const sociotypeData = {
  temperament: model.getTemperament(props.temperament),
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
    <UiColumnDual leftTitle="Темперамент">
      <template #left>
        <UiText color="role" preset="large">
          {{ sociotypeData.temperament.type }}
        </UiText>
        <UiZapList :temperamentLvl="sociotypeData.temperament.lvl"></UiZapList>
      </template>
      <template #leftBottom>
        <UiText>
          {{ sociotypeData.temperament.label }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Стимул" rightTitle="Характер">
      <template #left>
        <UiText color="role" preset="large">
          {{ sociotypeData.motivation }}
        </UiText>
      </template>
      <template #right>
        <UiText preset="large">
          {{ sociotypeData.gender }}
        </UiText>
        <UiSvg :name="props.gender" size="20" />
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Стиль общения" rightTitle="Собеседник">
      <template #left>
        <UiText preset="large">
          {{ sociotypeData.communicationStyle }}
        </UiText>
      </template>
      <template #right>
        <UiText preset="large">
          {{ sociotypeData.companion }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Мышление">
      <template #left>
        <UiText preset="large">
          {{ sociotypeData.mindset }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Мировоззрение">
      <template #left>
        <UiText preset="large">
          {{ sociotypeData.alignment }}
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
