<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import type { GenderEnum } from "@shared/constants";

import model from "../../model";

const props = defineProps<{ id: SociotypeIdType; gender: GenderEnum }>();
</script>

<template>
  <NuxtImg
    :src="model.getFaceImageSrc(props.id, props.gender)"
    :alt="`${props.id}-face`"
    loading="lazy"
    class="sociotype-face-image"
  />
</template>

<style lang="scss" scoped>
.sociotype-face-image {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
}
</style>
