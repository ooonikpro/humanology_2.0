<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Горячий энтузиаст и фантазер.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Видит в жизни множество возможностей. Быстро устанавливает связи между
    событиями и информацией и уверенно действует на основе увиденных
    закономерностей.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Хочет получить большое количество одобрения от окружающих и с готовностью
    оказывает признательность и поддержку. Спонтанен и гибок, часто полагается
    на свою способность к импровизации и беглость речи.
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
