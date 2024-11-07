<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Спокоен, доброжелателен, ответственен и добросовестен.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Обязательно и неуклонно выполняет свои обязательства. Тщателен, кропотлив и
    точен. Лоялен, внимателен, замечает и запоминает особенности важных для них
    людей, заботится о самочувствии других.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Стремится создать порядок и гармонию на работе и дома.
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
