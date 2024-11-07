<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role"
    >Спокойный, дружелюбный, чувствительный и добрый.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Наслаждается настоящим моментом и тем, что происходит вокруг него. Любит
    собственное пространство и работать в своем темпе.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Верен и привержен своим ценностям и важным для него людям.
  </UiText>
</template>

<style lang="scss" scoped>
.attributes {
  font-size: 18px;
  line-height: 133%;
}
.description {
  font-size: 15px;
  line-height: 133%;
}
</style>
