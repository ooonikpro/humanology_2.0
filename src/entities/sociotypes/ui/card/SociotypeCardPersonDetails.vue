<script lang="ts" setup>
import type { FamousPersonType } from "@types";

import { getLocaleDateString } from "@shared/lib";

import SociotypeSign from "../SociotypeSign.vue";

const props = defineProps<FamousPersonType>();
</script>

<template>
  <div class="sociotype-card-person-details">
    <UiText preset="body" class="sociotype-card-person-details__name">
      {{ props.name }}
    </UiText>

    <UiText preset="small" color="dark-grey">
      {{ props.role }}
    </UiText>

    <div class="sociotype-card-person-details__birth-date">
      <UiText preset="small" color="dark-grey">
        {{ getLocaleDateString(props.birthDate) }}
      </UiText>

      <div class="sociotype-card-person-details__signs">
        <SociotypeSign :sign="props.zodiac" size="16" />
        <SociotypeSign :sign="props.bazi" size="16" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sociotype-card-person-details {
  display: flex;
  flex-direction: column;
  padding: 4px 4px 8px;

  &__name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__birth-date {
    padding-top: 8px;
  }

  &__birth-date,
  &__signs {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
