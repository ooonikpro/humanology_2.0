<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import type { GenderEnum } from "@shared/constants";

import model from "../../model";

const props = defineProps<{ id: SociotypeIdType; gender: GenderEnum }>();
</script>

<template>
  <NuxtImg
    :src="model.getBodyImageSrc(props.id, props.gender)"
    :alt="`${props.id}-body`"
    loading="lazy"
    class="sociotype-body-image"
  />
</template>

<style lang="scss" scoped>
.sociotype-body-image {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
}
</style>
