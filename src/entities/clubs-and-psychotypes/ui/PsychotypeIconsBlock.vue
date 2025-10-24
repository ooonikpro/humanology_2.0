<script lang="ts" setup>
import type { IconSizeType, TextColorType } from "@types";

import model from "../model";

const { iconSize = "16", ...props } = defineProps<{
  color?: TextColorType;
  iconSize?: IconSizeType;
}>();

const psychotypes = model.getAllPsychotypes();
</script>

<template>
  <div class="sociotype-quadra-icons-block">
    <UiSvg
      v-for="psychotype in psychotypes"
      :key="psychotype"
      :name="psychotype"
      :color="props.color || 'dark-grey'"
      :size="iconSize"
      class="sociotype-quadra-icons-block__icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.sociotype-quadra-icons-block {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
