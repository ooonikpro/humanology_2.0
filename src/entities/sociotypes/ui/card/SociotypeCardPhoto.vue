<script lang="ts" setup>
const onError = (e: Event) => {
  import("/assets/images/no-image.png").then(
    (data) => ((e.target as HTMLImageElement).src = data.default),
  );
};
</script>

<template>
  <img
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
