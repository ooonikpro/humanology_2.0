<script setup lang="ts">
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";

import { UiColumnDual, UiSvg, UiText } from "@shared/ui";

import model from "../model";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

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
    <div class="sociotype-groups-and-quadras__block">
      <UiText
        tag="h4"
        color="quadra"
        class="sociotype-groups-and-quadras__title"
      >
        Квадра
      </UiText>
      <div class="sociotype-groups-and-quadras__text-wrapper">
        <UiSvg
          :name="props.quadra"
          color="quadra"
          class="sociotype-groups-and-quadras__icon"
        />
        <UiText
          tag="span"
          preset="large"
          color="quadra"
          class="sociotype-groups-and-quadras__text"
        >
          {{ groupsAndQuadrasData.quadra }}
        </UiText>
      </div>
    </div>
    <hr />

    <UiColumnDual leftTitle="Роль" rightTitle="Масть">
      <template #left>
        <UiSvg
          :name="props.role"
          color="role"
          class="sociotype-groups-and-quadras__icon"
        />
        <UiText
          tag="p"
          preset="large"
          color="role"
          class="sociotype-groups-and-quadras__text"
        >
          {{ groupsAndQuadrasData.role }}
        </UiText>
      </template>
      <template #right>
        <UiSvg :name="props.tarot" class="sociotype-groups-and-quadras__icon" />
        <UiText tag="p" class="sociotype-groups-and-quadras__text">
          <UiText tag="span" preset="large">
            {{ groupsAndQuadrasData.tarot }}
          </UiText>
        </UiText>
      </template>
    </UiColumnDual>
    <hr />

    <UiColumnDual leftTitle="Клуб" rightTitle="Группа">
      <template #left>
        <UiSvg :name="props.club" class="sociotype-groups-and-quadras__icon" />
        <UiText
          tag="p"
          preset="large"
          class="sociotype-groups-and-quadras__text"
        >
          {{ groupsAndQuadrasData.club }}
        </UiText>
      </template>
      <template #right>
        <UiSvg
          :name="props.psychotype"
          class="sociotype-groups-and-quadras__icon"
        />
        <UiText tag="p" class="sociotype-groups-and-quadras__text">
          <UiText tag="span" preset="large">
            {{ groupsAndQuadrasData.psychotype }}
          </UiText>
        </UiText>
      </template>
    </UiColumnDual>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.sociotype-groups-and-quadras {
  margin-top: 16px;

  &__text-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__title {
    opacity: 0.5;
  }

  &__icon {
    height: 20px;
    width: 20px;
  }
}
</style>
