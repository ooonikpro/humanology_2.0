<script lang="ts" setup>
import { defineProps, computed } from "vue";
import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";

const {
  age = "kids",
  gender = "male",
  ...props
} = defineProps<{
  id: SociotypeIdType;
  age?: SociotypeAgeType;
  gender?: Gender;
}>();

const src = computed(() => {
  const ageParam = age === "kids" ? "-kid" : "";
  const imgName = `${props.id.toLowerCase()}-${gender}${ageParam}`;
  return `/assets/images/portraits/${imgName}.png`;
});
</script>

<template>
  <img :src="src" class="sociotype-portrait" :alt="props.id">
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
