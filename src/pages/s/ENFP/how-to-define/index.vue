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
    <SociotypeProvider id="ENFP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ENFP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Телосложение астеническое, рост часто выше среднего, нередко выражена
        сутулость в грудном отделе позвоночника.
      </UiText>
      <SociotypeBodySwitcher id="ENFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Овальная или треугольная. Черты — немного закругленные, «мягкие», без
        резкой выраженности отдельных элементов.
      </UiText>

      <SociotypeFaceSwitcher id="ENFP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Сильно выражены вертикальные, расположенные на межбровном расстоянии.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Очень цепкий, хорошо сфокусированный, внимательный, прежде всего — к
        людям, «психологичный», немного «грустный», понимающий, весьма
        располагающий к общению с его обладателем.
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
