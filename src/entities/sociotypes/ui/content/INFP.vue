<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Идеалист, верен своим ценностям и значимым для него людям. Хочет, чтобы
    внешняя жизнь соответствовала их ценностям.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Любознателен, быстро видит возможности, может быть катализаторами реализации
    идей. Стремится понять людей и помочь им реализовать потенциал.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Приспосабливается, проявляет гибкость, смиряется, если только его ценности
    не находятся под угрозой.
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
