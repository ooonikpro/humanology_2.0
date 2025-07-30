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
    <SociotypeProvider id="ISFP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ISFP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Умеренно стеническое, рост чаще всего средний и ниже среднего.
      </UiText>
      <SociotypeBodySwitcher id="ISFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Округлая или мягко овальная. Черты — смягченные, округлые.
      </UiText>
      <SociotypeFaceSwitcher id="ISFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Горизонтальные выражены сильнее, чем вертикальные; развита мимика лба.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Самоуверенный, мягкий, оценивающий, приветливый, располагающий к знакомству, чувственный. Если человек данного типа не улыбается, его взгляд кажется «обиженным».
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
