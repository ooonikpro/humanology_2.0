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
    <SociotypeProvider id="ISTP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ISTP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Умеренно стеническое, жизненный тонус ниже, чем у Предпринимателя и
        Лидера , «спортивность» тоже не слишком высока.
      </UiText>
      <SociotypeBodySwitcher id="ISTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Прямоугольная или округлая. Черты — «спокойные», не ярко выраженные,
        обычно хорошо сбалансированные.
      </UiText>

      <SociotypeFaceSwitcher id="ISTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Их вообще немного, и в основном это «динамические» складки на лбу, но
        могут иногда присутствовать и слабые «статические» элементы мимики.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Самоуверенный, «ленивый», без особого интереса к внешнему миру,
        нормальной фокусировки, скептический, иногда придирчивый.
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
