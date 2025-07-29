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
    <SociotypeProvider id="ESTJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ESTJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Стеническое «сухое», без склонности к полноте. Фигура часто спортивная,
        с хорошей осанкой и «военной» выправкой, но не такая массивная и
        коренастая, как у Лидера.
      </UiText>
      <SociotypeBodySwitcher id="ESTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Прямоугольная, реже — с треугольной нижней частью. Черты — чёткие,
        резкие, рельефные, «правильные» или «плакатные», отмечается жесткий
        «волевой» рот.
      </UiText>

      <SociotypeFaceSwitcher id="ESTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Слабо выраженные динамические, на фоне которых присутствуют и
        вертикальные статические складки на переносице. Присутствуют также
        «эндемичные» морщины: расходящиеся от глаз к вискам, они символизируют
        пристальное внимание к мелочам, деталям.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Открытый, спокойный, холодно-приветливый, без дружелюбия, но и без
        агрессии, внимательный к окружающему миру и происходящим в нём явлениям.
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
