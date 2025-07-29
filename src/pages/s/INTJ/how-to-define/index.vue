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
    <SociotypeProvider id="INTJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="INTJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Астеническое, рост не имеет выраженной тенденции, часто сутулость,
        особенно в области шеи.
      </UiText>
      <SociotypeBodySwitcher id="INTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>
      <UiText>
        Форма лица чаще всего треугольная, подбородок слабо проявлен. Черты —
        резкие, заметные, «аскетические», строгие.
      </UiText>
      <SociotypeFaceSwitcher id="INTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Ярко выраженные «статические» — вертикальные. Редко улыбаются — мало
        складок вокруг глаз и рта.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Отстраненный, зафиксированный на точке в пространстве, к людям
        равнодушный, сосредоточенный на чем-то своем, «умный», размышляющий,
        устанавливающий жесткую дистанцию с окружающими — в целом взгляд
        мыслителя, ученого, шахматиста.
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
