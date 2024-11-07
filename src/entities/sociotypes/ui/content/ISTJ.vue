<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Спокойный, серьезный, добивается успеха тщательностью и надежностью.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Практичен, конкретен, реалистичен и ответственен. Логично решает, что нужно
    сделать, и неуклонно работает над этим, не отвлекаясь на посторонние дела.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Получают удовольствие от наведения порядка и организованности — на работе,
    дома, в жизни. Ценят традиции и верность.
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
