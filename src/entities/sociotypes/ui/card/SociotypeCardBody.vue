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
  <div class="sociotype-card-body">
    <UiText tag="span" color="quadra" class="sociotype-card-body__text-row">
      <UiSvg :name="props.quadra" class="sociotype-card-body__text-icon" />
      {{ model.getQuadraLabel(props.quadra) }}
    </UiText>
    <UiText tag="span" color="role" class="sociotype-card-body__text-row">
      <UiSvg :name="props.role" class="sociotype-card-body__text-icon" />
      {{ model.getRoleLabel(props.role) }}
    </UiText>
    <UiText tag="span" color="accent" class="sociotype-card-body__text-row">
      <UiSvg :name="props.tarot" class="sociotype-card-body__text-icon" />
      {{ model.getTarotLabel(props.tarot) }}
    </UiText>
    <UiText tag="span" color="grey" class="sociotype-card-body__text-row">
      <UiSvg :name="props.psychotype" class="sociotype-card-body__text-icon" />
      {{ model.getPsychotypeLabel(props.psychotype) }}
    </UiText>
    <UiText tag="span" color="grey" class="sociotype-card-body__text-row">
      <UiSvg :name="props.club" class="sociotype-card-body__text-icon" />
      {{ model.getClubLabel(props.club) }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
.sociotype-card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__text-row {
    height: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__text-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
