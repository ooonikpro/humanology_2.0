<script lang="ts" setup>
import type { IconSizeType, QuadrasType } from "@types";

import model from "../../model";

const {
  quadrasSize = "16",
  onlyIcons = false,
  ...props
} = defineProps<{
  activeQuadra?: QuadrasType;
  quadrasSize?: IconSizeType;
  onlyIcons?: boolean;
}>();

const isQuadrasColorize = computed(() => props.activeQuadra === undefined);
</script>

<template>
  <component
    :is="onlyIcons ? 'div' : 'NuxtLink'"
    :to="!onlyIcons ? $appRoutes.sociotypes : undefined"
    class="sociotype-quadra-icons-block"
    :style="{ '--sociotype-quadra-icons-block-height': `${quadrasSize}px` }"
  >
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
  </component>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.sociotype-quadra-icons-block {
  display: flex;
  align-items: center;
  gap: 4px;
  height: var(--sociotype-quadra-icons-block-height);
}
</style>
