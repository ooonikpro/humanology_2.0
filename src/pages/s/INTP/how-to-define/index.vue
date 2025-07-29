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
    <SociotypeProvider id="INTP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="INTP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое, тенденция по росту не выявлена. Следует отметить, что он
        несколько «крепче» своего «родственника» Лирика.
      </UiText>
      <SociotypeBodySwitcher id="INTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Треугольная, реже — овальная. Черты — чаще всего удлиненные, резкие,
        заметны нос и подбородок.
      </UiText>

      <SociotypeFaceSwitcher id="INTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>Ярко выраженные динамические.</UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Скептический, спокойный, беспристрастный, иногда значительно
        расфокусированный. Он как бы выражает негативизм и философскую
        объективность его владельца.
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
