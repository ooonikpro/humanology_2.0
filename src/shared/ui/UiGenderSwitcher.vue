<script lang="ts" setup>
import { defineModel } from "vue";
import type { OptionWithIconType } from "@types";
import { GenderEnum } from "@shared/constants";

import UiSwitcher from "./UiSwitcher.vue";

const gender = defineModel<GenderEnum>({
  required: true,
});

const genderOptions: OptionWithIconType<GenderEnum>[] = [
  { label: "Мужчина", value: GenderEnum.male, iconName: "male" },
  { label: "Женщина", value: GenderEnum.female, iconName: "female" },
];
</script>

<template>
  <UiSwitcher :options="genderOptions" type="textWithIcon" v-model="gender" />
</template>
