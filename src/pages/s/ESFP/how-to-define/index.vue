<script lang="ts" setup>
import {
  SociotypePortraitSwitcher,
  SociotypeBodySwitcher,
  SociotypeFaceSwitcher,
  SociotypeProvider,
} from "@entities/sociotypes";
</script>

<template>
  <div class="text g-page">
    <SociotypeProvider id="ESFP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ESFP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Ярко выраженное стеническое. Крепкие, сильные, коренастые, с мощной
        костной и мышечной системами. Рост чаще средний и низкий, высокий
        встречается реже. Нередко выражена склонность к полноте.
      </UiText>
      <SociotypeBodySwitcher id="ESFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Округлая или прямоугольная. Черты — резкие, крупные, заметные нос и
        подбородок. Рот узкий, плотно сжатый, «решительный».
      </UiText>

      <SociotypeFaceSwitcher id="ESFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Морщины как у Лидера, но все же несколько мягче – сказывается наличие
        этики в ведущем блоке.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        «Победителя», несколько высокомерный, снисходительный, властный,
        внимательный, иногда как бы «сверлящий» окружающих людей и предметы.
      </UiText>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.text {
  section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: solid 1px colors.$grey;
  }
}

.bodies {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
