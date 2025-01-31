<template>
  <img v-bind="$attrs" loading="lazy" class="sociotype-card-photo" />
</template>

<style lang="scss" scoped>
.sociotype-card-photo {
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: cover;
  object-position: center;
}
</style>
