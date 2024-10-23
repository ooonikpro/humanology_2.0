<script setup lang="ts">
import { ref } from "vue";
import { UiGenderSwitch } from "@shared/ui";
import { GenderEnum } from "@shared/constants/gender";

const gender = ref(GenderEnum.male);
</script>

<template>
  <div>
    Home
    <UiGenderSwitch v-model="gender" />
  </div>
</template>
