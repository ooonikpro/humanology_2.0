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
    <SociotypeProvider id="ENFJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ENFJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое, особо выделяются слабые, «безжизненные» руки, тенденция
        роста не выявлена: могут быть и низкие, и высокие.
      </UiText>
      <SociotypeBodySwitcher id="ENFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Узкая, вытянутая треугольная или овальная. Нередко наряду с солидным
        подбородком отмечается «безвольный», «капризный» рот. Черты — яркие,
        запоминающиеся, обычно оцениваемые окружающими как «благородные» или
        «аристократические».
      </UiText>
      <SociotypeFaceSwitcher id="ENFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Ярко выраженные «динамические» — горизонтальные складки на лбу,
        переносица иногда совершенно свободна от морщин.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Направлен куда-то вдаль, поверх объектов и людей, расфокусированный,
        «нездешний», иногда смотрит как бы сквозь предметы. Столь артистичен,
        что способен придать своему лицу и взгляду практически любое выражение.
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
