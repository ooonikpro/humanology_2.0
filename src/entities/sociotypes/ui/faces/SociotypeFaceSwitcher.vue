<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import { GenderEnum } from "@shared/constants";

import SociotypeFaceImage from "./SociotypeFaceImage.vue";

const props = defineProps<{ id: SociotypeIdType }>();
const genderRef = ref<GenderEnum>(GenderEnum.male);
</script>

<template>
  <div class="sociotype-face-switcher">
    <SociotypeFaceImage
      :gender="genderRef"
      :id="props.id"
      class="sociotype-face-switcher__img"
    />
    <UiGenderSwitcher v-model="genderRef" />
  </div>
</template>

<style lang="scss" scoped>
.sociotype-face-switcher {
  &__img {
    display: block;
    height: 480px;
    margin-bottom: 8px;
  }
}
</style>
