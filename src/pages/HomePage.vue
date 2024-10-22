<script setup lang="ts">
import { UiGenderSwitch } from "@shared/ui";
import type { Gender } from "@types";
import { ref } from "vue";

const gender = ref<Gender>("male");
</script>

<template>
  <div>
    Home 
    <UiGenderSwitch v-model="gender" />
  </div>
</template>
