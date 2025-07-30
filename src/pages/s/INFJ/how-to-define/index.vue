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
    <SociotypeProvider id="INFJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="INFJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое, которое не исключает некоторой телесной «рыхлости»;
        неспортивный тип с невысоким жизненным тонусом. Как у Аналитика, нередко
        отмечается сутулость, вызванная искривлением в шейном отделе
        позвоночника.
      </UiText>
      <SociotypeBodySwitcher id="INFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Треугольная с закруглениями, реже – овальная. Черты — мягкие, изящные,
        как бы сглаженные.
      </UiText>

      <SociotypeFaceSwitcher id="INFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Как у Аналитика — ярко выраженные «статические» – вертикальные.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Спокойный, немного застенчивый, «исподлобья», внимательный к людям и их
        поступкам, «виноватый» и как бы «прощающий» окружающим их прегрешения.
      </UiText>

      <UiText>
        В общем-то, это «добрый» и располагающий к общению взгляд.
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
