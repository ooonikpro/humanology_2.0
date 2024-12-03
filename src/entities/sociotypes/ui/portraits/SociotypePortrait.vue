<script lang="ts" setup>
import { defineProps, computed } from "vue";
import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";
import model from "../../model";
import type { GenderEnum } from "@shared/constants";

type PropsType = {
  id: SociotypeIdType;
  age?: SociotypeAgeType;
  gender?: Gender;
};

const { age = "youngs", gender = "male", ...props } = defineProps<PropsType>();

const { getPortraitSrc } = model;

const src = computed(() => {
  const ageParam = age === "kids" ? "-kid" : "";
  const path = getPortraitSrc(props.id, gender as GenderEnum).replace(
    ".png",
    `${ageParam}.png`,
  );
  return path;
});
</script>

<template>
  <img :src="src" class="sociotype-portrait" :alt="props.id" />
</template>

<style lang="scss" scoped>
.sociotype-portrait {
  width: 200px;
  aspect-ratio: 1/1;

  &:not(:first-child),
  &:not(:last-child) {
    margin: 0 -6%;
  }
}
</style>
