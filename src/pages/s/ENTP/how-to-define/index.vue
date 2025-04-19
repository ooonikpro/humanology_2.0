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
    <SociotypeProvider id="ENTP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ENTP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое. Рост часто выше среднего, нередко выражена сутулость в
        грудном отделе позвоночника.
      </UiText>
      <SociotypeBodySwitcher id="ENTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Овальная или треугольная. Черты — довольно резкие, заметные.
      </UiText>
      <SociotypeFaceSwitcher id="ENTP" />
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
        Активный, ищущий, явно заинтересованный в окружающих объектах, открытый,
        располагающий, но все же сохраняющий дистанцию.
      </UiText>
      <UiText>
        Он как бы показывает, что человека более интересуют предметы, чем люди,
        с которыми он вовсе не обязательно желает общаться.
      </UiText>
      <UiText>
        В моменты обдумывания сложных проблем — отстраненный, невидящий,
        холодный взгляд.
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
