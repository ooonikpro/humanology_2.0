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
    <SociotypeProvider id="ESFJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ESFJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Умеренно стеническое, рост преобладает средний, присутствует некоторая
        склонность к полноте.
      </UiText>
      <SociotypeBodySwitcher id="ESFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Чаще всего округлая. Черты — четкие, заметные, иногда немного
        закругленные.
      </UiText>
      <SociotypeFaceSwitcher id="ESFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Морщины вполне «динамические», хотя в отдельные моменты отмечаются и
        элементы «вертикальной» мимики.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Увлеченный, самоуверенный, выражающий энтузиазм владельца, внимательный
        к людям, чаще приветливый, но иногда раздражённый и свирепый.
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
