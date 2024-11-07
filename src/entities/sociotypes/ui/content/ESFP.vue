<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Общительный, дружелюбный и принимающий.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Бурно любит жизнь, людей и материальные блага. Ему нравится работать с
    другими людьми, чтобы воплотить задуманное в жизнь. Привносит в свою работу
    здравый смысл и реалистичный подход, делает работу увлекательной.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Гибкий и спонтанный, легко адаптируется к новым людям и обстановке. Лучше
    всего учится, пробуя новый навык вместе с другими людьми.
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
