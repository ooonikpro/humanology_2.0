<script setup lang="ts">
import type { SociotypeDataType } from "@types";
import { UiColumnDual, UiSvg, UiText } from "@shared/ui";
import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import model from "../model";

const props = defineProps<SociotypeDataType>();

const groupsAndQuadrasData = {
  quadra: model.getQuadraLabel(props.quadra),
  role: model.getRoleLabel(props.role),
  tarot: model.getTarotLabel(props.tarot),
  club: model.getClubLabel(props.club),
  psychotype: model.getPsychotypeLabel(props.psychotype),
};
</script>

<template>
  <SociotypeSignsBlock
    class="sociotype-groups-and-quadras"
    title="Группы и квадры"
  >
    <UiColumnDual leftTitle="Квадра">
      <template #left>
        <UiSvg :name="props.quadra" color="quadra" size="24" />
        <UiText preset="large" color="quadra">
          {{ groupsAndQuadrasData.quadra }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Роль" rightTitle="Масть">
      <template #left>
        <UiSvg :name="props.role" color="role" size="24" />
        <UiText preset="large" color="role">
          {{ groupsAndQuadrasData.role }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.tarot" size="24" />
        <UiText preset="large">
          {{ groupsAndQuadrasData.tarot }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Клуб" rightTitle="Группа">
      <template #left>
        <UiSvg :name="props.club" size="24" />
        <UiText preset="large">
          {{ groupsAndQuadrasData.club }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.psychotype" size="24" />
        <UiText preset="large">
          {{ groupsAndQuadrasData.psychotype }}
        </UiText>
      </template>
    </UiColumnDual>
  </SociotypeSignsBlock>
</template>
