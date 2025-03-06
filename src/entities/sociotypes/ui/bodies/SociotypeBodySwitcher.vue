<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import { GenderEnum } from "@shared/constants";

import SociotypeBodyImage from "./SociotypeBodyImage.vue";

const props = defineProps<{ id: SociotypeIdType }>();
const genderRef = ref<GenderEnum>(GenderEnum.male);
</script>

<template>
  <div class="sociotype-body-switcher">
    <SociotypeBodyImage
      :gender="genderRef"
      :id="props.id"
      class="sociotype-body-switcher__img"
    />
    <UiGenderSwitcher v-model="genderRef" />
  </div>
</template>

<style lang="scss" scoped>
.sociotype-body-switcher {
  &__img {
    display: block;
    height: 480px;
    margin-bottom: 8px;
  }
}
</style>
