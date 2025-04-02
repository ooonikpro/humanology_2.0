<script lang="ts" setup>
import type { IconSizeType, QuadrasType } from "@types";

import model from "../../model";

const { quadrasSize = "16", ...props } = defineProps<{
  activeQuadra?: QuadrasType;
  quadrasSize?: IconSizeType;
}>();

const isQuadrasColorize = computed(() => props.activeQuadra === undefined);
</script>

<template>
  <NuxtLink :to="$appRoutes.sociotypes" class="sociotype-quadra-icons-block">
    <UiSvg
      v-for="quadra in model.getQuadras()"
      :key="quadra"
      :name="quadra"
      :color="
        props.activeQuadra === quadra || isQuadrasColorize
          ? quadra
          : 'dark-grey'
      "
      :size="quadrasSize"
      class="sociotype-quadra-icons-block__icon"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.sociotype-quadra-icons-block {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
