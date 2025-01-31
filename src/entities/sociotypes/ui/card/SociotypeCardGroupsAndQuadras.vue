<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";
import { UiSvg, UiText } from "@shared/ui";

import model from "../../model";

type PropsType = Pick<
  SociotypeDataType,
  "quadra" | "role" | "tarot" | "psychotype" | "club"
>;

const props = defineProps<PropsType>();
</script>

<template>
  <div class="sociotype-card-groups-and-quadras">
    <UiText
      preset="small"
      color="quadra"
      class="sociotype-card-groups-and-quadras__text-row"
    >
      <UiSvg :name="props.quadra" size="20" />
      {{ model.getQuadraLabel(props.quadra) }}
    </UiText>
    <UiText
      preset="small"
      color="role"
      class="sociotype-card-groups-and-quadras__text-row"
    >
      <UiSvg :name="props.role" size="20" />
      {{ model.getRoleLabel(props.role) }}
    </UiText>
    <UiText
      preset="small"
      color="accent"
      class="sociotype-card-groups-and-quadras__text-row"
    >
      <UiSvg :name="props.tarot" size="20" />
      {{ model.getTarotLabel(props.tarot) }}
    </UiText>
    <UiText
      preset="small"
      color="dark-grey"
      class="sociotype-card-groups-and-quadras__text-row"
    >
      <UiSvg :name="props.psychotype" size="20" />
      {{ model.getPsychotypeLabel(props.psychotype) }}
    </UiText>
    <UiText
      preset="small"
      color="dark-grey"
      class="sociotype-card-groups-and-quadras__text-row"
    >
      <UiSvg :name="props.club" size="20" />
      {{ model.getClubLabel(props.club) }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
.sociotype-card-groups-and-quadras {
  display: flex;
  flex-direction: column;
  padding: 0 8px 12px;

  &__text-row {
    height: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
