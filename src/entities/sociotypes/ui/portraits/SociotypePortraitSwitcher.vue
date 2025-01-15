<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { OptionType, SociotypeAgeType, SociotypeIdType } from "@types";
import { UiSwitcher } from "@shared/ui";

import SociotypeQuadraCircle from "../quadras/SociotypeQuadraCircle.vue";
import SociotypePortrait from "../portraits/SociotypePortrait.vue";

const props = defineProps<{ id: SociotypeIdType }>();

const age = ref<SociotypeAgeType>("young");
const ageOptions: OptionType<SociotypeAgeType>[] = [
  { label: "0-10", value: "kid" },
  { label: "20-25", value: "young" },
  { label: "40+", value: "adult" },
];
</script>

<template>
  <div class="sociotype-pair-portrait">
    <div class="sociotype-pair-portrait__body">
      <SociotypeQuadraCircle
        :id="props.id"
        class="sociotype-pair-portrait__quadra"
      />
      <SociotypePortrait
        :age="age"
        :id="props.id"
        gender="male"
        class="sociotype-pair-portrait__img"
      />
      <SociotypePortrait
        :age="age"
        :id="props.id"
        gender="female"
        class="sociotype-pair-portrait__img"
      />
    </div>
    <UiSwitcher :options="ageOptions" type="text" v-model="age" />
  </div>
</template>

<style lang="scss" scoped>
.sociotype-pair-portrait {
  &__body {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    height: 240px;
    margin-bottom: 8px;
  }

  &__quadra {
    width: 240px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    aspect-ratio: 1/1;
    bottom: -5%;
  }

  &__img {
    --width: 200px;
    position: relative;
    flex: 0 0 var(--width);
    width: var(--width);
  }
}
</style>