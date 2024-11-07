<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Практичный, реалистичный, конкретный.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Решителен, быстро переходит к реализации решений. Организовывает проекты и
    людей для выполнения задач, концентрируется на достижении результатов
    наиболее эффективным способом.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Заботится о рутинных деталях. Имеет четкий набор логических стандартов,
    систематически следует им и хочет, чтобы другие также следовали им.
    Настойчив в реализации своих планов.
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
