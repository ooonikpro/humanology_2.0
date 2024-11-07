<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Быстрый, изобретательный, стимулирующий, внимательный и открытый.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Находчив в решении новых и сложных задач. Умеет генерировать концептуальные
    возможности и затем стратегически анализировать их.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Скучает от рутины, редко занимается одним и тем же делом, склонен часто
    менять свои интересы.
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
