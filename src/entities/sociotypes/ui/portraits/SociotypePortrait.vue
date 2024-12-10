<script lang="ts" setup>
import { defineProps, computed } from "vue";
import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";
import type { GenderEnum } from "@shared/constants";

import model from "../../model";

type PropsType = {
  id: SociotypeIdType;
  age?: SociotypeAgeType;
  gender?: Gender;
};

const { age = "young", gender = "male", ...props } = defineProps<PropsType>();

const src = computed(() =>
  model.getPortraitSrc(props.id, gender as GenderEnum, age),
);
</script>

<template>
  <img :src="src" :alt="props.id" class="sociotype-portrait" />
</template>

<style lang="scss" scoped>
.sociotype-portrait {
  aspect-ratio: 1/1;
}
</style>
