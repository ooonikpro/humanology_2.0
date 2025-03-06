<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

const props = defineProps<{ mini?: boolean; data: SociotypeDataType }>();
</script>

<template>
  <div
    :class="{ 'sociotype-card-header': props.mini }"
    class="sociotype-card-header"
  >
    <UiText preset="small" color="black">{{ props.data.id }}</UiText>

    <UiText v-if="!props.mini" preset="small" color="role">
      {{ props.data.populationPercentage }}
    </UiText>

    <UiText preset="small" color="dark-grey">{{ props.data.alias }}</UiText>

    <UiText v-if="!props.mini" preset="small" color="dark-grey">
      {{ props.data.personalitiesTerm }}
    </UiText>

    <UiText v-if="!props.mini" preset="small" color="dark-grey">
      {{ props.data.socionicAbbrevation }}
    </UiText>

    <hr v-if="!props.mini" class="sociotype-card-header__line" />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-header {
  display: flex;
  gap: 6px;
  position: relative;
  padding: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &__line {
    width: 53%;
    position: absolute;
    bottom: 0;
    background-color: colors.$quadra;
    border-bottom: 1px dotted colors.$white;
  }

  &--mini {
    padding-bottom: 0;
  }
}
</style>
