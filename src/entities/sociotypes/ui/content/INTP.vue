<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Спокойный, сдержанный, гибкий и легко приспосабливающийся.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Стремятся разработать логические объяснения всему, что их интересует.
    Теоретичны и абстрактны, больше интересуются идеями, чем социальным
    взаимодействием.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Обладают необычной способностью к глубокому сосредоточению для решения
    проблем в интересующей их области. Скептичны, иногда критичны, всегда
    аналитичны.
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
