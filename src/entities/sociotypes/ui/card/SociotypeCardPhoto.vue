<script lang="ts" setup>
import { getImage } from "@shared/lib";

const props = defineProps<{ src?: string }>();
const defaultImage = getImage("public/images/no-image.png");

const onError = (e: Event) => {
  (e.target as HTMLInputElement).src = defaultImage;
};
</script>

<template>
  <img
    :src="props.src || defaultImage"
    v-bind="$attrs"
    loading="lazy"
    class="sociotype-card-photo"
    @error="onError"
  />
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-photo {
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: cover;
  object-position: center;
  background-color: colors.$white;
}
</style>
