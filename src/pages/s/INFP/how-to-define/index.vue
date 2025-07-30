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
    <SociotypeProvider id="INFP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="INFP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое при любой массе тела и росте. Это люди часто субтильные, но
        изящные, возможно даже грациозные.
      </UiText>
      <SociotypeBodySwitcher id="INFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Треугольная, реже — овальная. Черты — несколько «смазанные», округлые,
        смягченные, не бросающиеся в глаза. Часто слабый, отступающий назад
        подбородок.
      </UiText>
      <SociotypeFaceSwitcher id="INFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>Ярко выраженные динамические.</UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Как у Наставника, только более спокойный и «добрый», располагающий к
        общению.
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
