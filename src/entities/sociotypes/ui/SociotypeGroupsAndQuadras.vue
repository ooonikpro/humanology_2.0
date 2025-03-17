<script setup lang="ts">
import type { SociotypeDataType } from "@types";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

import model from "../model";

const props = defineProps<SociotypeDataType>();
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
          {{ model.getQuadraLabel(props.quadra) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Роль" rightTitle="Масть">
      <template #left>
        <UiSvg :name="props.role" color="role" size="24" />
        <UiText preset="large" color="role">
          {{ model.getRoleLabel(props.role) }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.tarot" size="24" />
        <UiText preset="large">
          {{ model.getTarotLabel(props.tarot) }}
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Клуб" rightTitle="Группа">
      <template #left>
        <UiSvg :name="props.club" size="24" />
        <UiText preset="large">
          {{ model.getClubLabel(props.club) }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.psychotype" size="24" />
        <UiText preset="large">
          {{ model.getPsychotypeLabel(props.psychotype) }}
        </UiText>
      </template>
    </UiColumnDual>
  </SociotypeSignsBlock>
</template>
