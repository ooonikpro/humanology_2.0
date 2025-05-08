<script lang="ts" setup>
import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";
import type { GenderEnum } from "@shared/constants";

import model from "../../model";

type PropsType = {
  id: SociotypeIdType;
  age?: SociotypeAgeType;
  gender?: Gender;
};

const { age = "young", gender = "male", ...props } = defineProps<PropsType>();
</script>

<template>
  <NuxtImg
    :src="model.getPortraitSrc(props.id, gender as GenderEnum, age)"
    loading="lazy"
    class="sociotype-portrait"
  />
</template>

<style lang="scss" scoped>
.sociotype-portrait {
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>
