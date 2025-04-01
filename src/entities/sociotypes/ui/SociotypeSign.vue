<script lang="ts" setup>
import type { BaziSignType, IconSizeType, ZodiacSignType } from "@types";

import { SIGNS_COLORS_MAP } from "../config";

const props = defineProps<{
  sign: ZodiacSignType | BaziSignType;
  size: IconSizeType;
}>();
</script>

<template>
  <!-- @vue-expect-error -->
  <UiSvg
    :name="props.sign"
    :color="SIGNS_COLORS_MAP[props.sign]"
    :size="props.size"
  />
</template>
