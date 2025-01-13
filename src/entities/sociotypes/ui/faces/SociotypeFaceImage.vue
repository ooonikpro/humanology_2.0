<script lang="ts" setup>
import { computed, defineProps } from "vue";
import type { SociotypeIdType } from "@types";
import type { GenderEnum } from "@shared/constants";

import model from "../../model";

const props = defineProps<{ id: SociotypeIdType; gender: GenderEnum }>();

const src = computed(() => model.getFaceImageSrc(props.id, props.gender));
</script>

<template>
  <img :src="src" :alt="`${props.id}-face`" class="sociotype-face-image" />
</template>

<style lang="scss" scoped>
.sociotype-face-image {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
}
</style>
