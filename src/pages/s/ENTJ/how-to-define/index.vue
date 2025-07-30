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
    <SociotypeProvider id="ENTJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ENTJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Близкое к стеническому — «спортивное», легко могут развивать
        мускулатуру, обладают высоким жизненным тонусом. Рост чаще всего средний
        или высокий, низкий встречается значительно реже.
      </UiText>
      <SociotypeBodySwitcher id="ENTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Чаще прямоугольная с немного зауженной, как бы треугольной нижней
        частью.
      </UiText>

      <UiText>
        Черты — как правило, хорошо сбалансированные, традиционно
        «мужественные», как бы «плакатные».
      </UiText>

      <SociotypeFaceSwitcher id="ENTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Классические «динамические» — то есть горизонтальные складки на лбу.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Озорной, весёлый, но в то же время где-то блуждающий, расфокусированный,
        перебегающий с предмета на предмет, не слишком заинтересованный. Но
        гораздо более внимательный к реальности/
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
