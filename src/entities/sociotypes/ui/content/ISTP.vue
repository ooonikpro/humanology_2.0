<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Терпимый и гибкий, спокойно наблюдающийза происходящим до тех пор, пока не
    возникнет проблема, а затем быстро действующий для поиска работоспособных
    решений.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Анализирует то, что заставляет вещи работать, и легко пробирается через
    большие объемы данных, чтобы вычленить суть практических проблем.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Интересуется причинно-следственными связями, упорядочивают факты, используя
    логические принципы, ценит эффективность.
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
