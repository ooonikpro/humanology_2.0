<script setup lang="ts">
import { UiText } from "@shared/ui";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
</script>

<template>
<div class="page">

  <PageHeaderWidget iconName="square-1" title="Дисклеймер" />

  <UiText preset="subtitle" color="accent">
    Верить, проверять, доверять соционике — личный выбор каждого.
  </UiText>

  <UiText>
    Убеждать скептиков без материальных доказательств — бесполезно. Даже если такие доказательства появятся, споры не закончатся.
  </UiText>

  <UiText>
    Проект создан в первую очередь для удобства. Если он окажется полезным и вам — отлично.
  </UiText>

  <UiText>
    Вся информация собрана из открытых источников. Источники, как правило, указаны. Если нет — будем считать это продуктом коллективного бессознательного.
  </UiText>

  <hr />
  
  <UiText preset="subtitle" color="accent">
    Нашли ошибку?
  </UiText>
  
  <UiText>
    Пишите на <a href="mailto:feedback@humanology.app">feedback@humanology.app</a>.
  </UiText>

  <UiText>
    Прикрепите скриншот и укажите версию браузера или операционной системы телефона — получите лучи добра.
  </UiText>

  <UiText preset="subtitle" color="accent">
    Оскорбились за науку?
  </UiText>

  <UiText>
    Желательно развернуто изложить суть претензии. Адрес тот же.
  </UiText>

</div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

  .page {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 12px;
  padding-right: 12px;

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.2;
    background-color: colors.$accent;
    }
  }

  a {
    text-decoration: underline;
  }

</style>