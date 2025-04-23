<script setup lang="ts">
import type {
  ClubIdType,
  PsychotypeIdType,
  QuadrasType,
  RoleType,
  SociotypeDataType,
  SociotypeIdType,
  TarotType,
} from "@types";

import {
  SociotypeSignsBlock,
  sociotypeModel,
  useCharacteristicSheet,
} from "@entities/sociotypes";
import { clubsAndPsychotypesModel } from "@entities/clubs-and-psychotypes";

const props = defineProps<SociotypeDataType>();

const { goToSheet } = useCharacteristicSheet(() => props.id);
</script>

<template>
  <SociotypeSignsBlock
    class="sociotypes-groups-and-quadras-widget"
    title="Группы и квадры"
  >
    <UiColumnDual
      leftTitle="Квадра"
      :left-link="goToSheet('quadra', props.quadra)"
    >
      <template #left>
        <UiSvg :name="props.quadra" color="quadra" size="24" />
        <UiText preset="large" color="quadra">
          {{ sociotypeModel.getQuadraLabel(props.quadra) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      leftTitle="Роль"
      :left-link="goToSheet('role', props.role)"
      rightTitle="Масть"
      :right-link="goToSheet('tarot', props.tarot)"
    >
      <template #left>
        <UiSvg :name="props.role" color="role" size="24" />
        <UiText preset="large" color="role">
          {{ sociotypeModel.getRoleLabel(props.role) }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.tarot" size="24" />
        <UiText preset="large">
          {{ sociotypeModel.getTarotLabel(props.tarot) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual
      leftTitle="Клуб"
      :left-link="goToSheet('club', props.club)"
      rightTitle="Группа"
      :right-link="goToSheet('psychotype', props.psychotype)"
    >
      <template #left>
        <UiSvg :name="props.club" size="24" />
        <UiText preset="large">
          {{ clubsAndPsychotypesModel.getClubLabel(props.club) }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.psychotype" size="24" />
        <UiText preset="large">
          {{ clubsAndPsychotypesModel.getPsychotypeLabel(props.psychotype) }}
        </UiText>
      </template>
    </UiColumnDual>
  </SociotypeSignsBlock>
</template>
