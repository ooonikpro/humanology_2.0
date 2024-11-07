<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <UiText class="attributes" tag="h5" color="role">
    Теплолюбивый, добросовестный и всегда готов к сотрудничеству.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Хочет гармонии в своем окружении и решительно работает над ее установлением.
    Любит работать с другими, чтобы выполнять задания точно и в срок. Лоялен,
    доводит до конца даже мелкие дела.
  </UiText>
  <UiText class="description" tag="p" color="black">
    Замечает, что нужно другим в их повседневной жизни, и старается это
    обеспечить. Хочет, чтобы его ценили за то, кем он является и что делает.
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
