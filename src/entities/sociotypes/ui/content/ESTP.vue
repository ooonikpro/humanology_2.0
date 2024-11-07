<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Гибкий и терпимый, он придерживается прагматического подхода,
    ориентированного на немедленный результат.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Теории и концептуальные объяснения его утомляют. Он хочет энергично
    действовать, чтобы решить проблему. Ориентирован на «здесь и сейчас»,
    спонтанен, наслаждается каждым моментом, когда может быть активен с другими.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Наслаждается материальными удобствами и стилем. Лучше всего учится на
    практике.
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
