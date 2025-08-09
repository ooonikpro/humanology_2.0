<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

import { sociotypeModel } from "@entities/sociotypes";
import { clubsAndPsychotypesModel } from "@entities/clubs-and-psychotypes";

type PropsType = Pick<
  SociotypeDataType,
  "quadra" | "role" | "tarot" | "psychotype" | "club" | "populationPercentage"
> & { mini?: boolean; showPopulation?: boolean };

const {
  mini = false,
  showPopulation = false,
  ...props
} = defineProps<PropsType>();
</script>

<template>
  <div
    :class="{ 'sociotypes-card-groups-and-quadras-widget--mini': mini }"
    class="sociotypes-card-groups-and-quadras-widget"
  >
    <template v-if="mini">
      <UiSvg :name="props.quadra" :color="props.quadra" size="20" />
      <UiSvg
        :name="props.role"
        :color="sociotypeModel.getRoleQuadra(props.role)"
        size="20"
      />
      <span />
      <UiSvg :name="props.tarot" color="accent" size="20" />
      <UiSvg :name="props.psychotype" color="dark-grey" size="20" />
      <UiSvg :name="props.club" color="dark-grey" size="20" />
    </template>

    <template v-else>
      <UiText
        preset="small"
        color="quadra"
        class="sociotypes-card-groups-and-quadras-widget__text-row"
      >
        <UiSvg :name="props.quadra" size="20" />
        {{ sociotypeModel.getQuadraLabel(props.quadra) }}
      </UiText>
      <UiText
        preset="small"
        color="role"
        class="sociotypes-card-groups-and-quadras-widget__text-row"
      >
        <UiSvg :name="props.role" size="20" />
        {{ sociotypeModel.getRoleLabel(props.role) }}
      </UiText>
      <UiText
        preset="small"
        color="accent"
        class="sociotypes-card-groups-and-quadras-widget__text-row"
      >
        <UiSvg :name="props.tarot" size="20" />
        {{ sociotypeModel.getTarotLabel(props.tarot) }}
      </UiText>
      <UiText
        preset="small"
        color="dark-grey"
        class="sociotypes-card-groups-and-quadras-widget__text-row"
      >
        <UiSvg :name="props.psychotype" size="20" />
        {{ clubsAndPsychotypesModel.getPsychotypeLabel(props.psychotype) }}
      </UiText>
      <UiText
        preset="small"
        color="dark-grey"
        class="sociotypes-card-groups-and-quadras-widget__text-row"
      >
        <UiSvg :name="props.club" size="20" />
        {{ clubsAndPsychotypesModel.getClubLabel(props.club) }}
      </UiText>

      <div
        v-if="showPopulation"
        class="sociotypes-card-groups-and-quadras-widget__population"
      >
        <UiText preset="small" color="role">
          {{ props.populationPercentage }}
        </UiText>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotypes-card-groups-and-quadras-widget {
  display: flex;
  flex-direction: column;
  padding: 0 8px 12px;

  &--mini {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: 1fr 1fr;
    row-gap: 4px;
  }

  &__text-row {
    height: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__population {
    margin-top: 8px;
    width: fit-content;
    background-color: color-mix(in srgb, colors.$role 10%, transparent);
    padding: 4px 8px;
    border-radius: 4px;
  }
}
</style>
