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
    <SociotypeProvider id="ISTJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ISTJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Крепкое стеническое, но с некоторой «сухостью», рост чаще всего средний.
      </UiText>
      <SociotypeBodySwitcher id="ISTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Прямоугольная или реже квадратная. Самые симметричные, «геометрические»
        лица, строго очерченные прямыми линиями. Черты — резкие, определённые,
        без закруглений.
      </UiText>

      <UiText>
        Четко выражен нос на фоне не слишком жесткого подбородка. Губы сжатые до
        белизны. Часто выражена «складка злости», наиболее типичная для Лидера.
      </UiText>
      
      <SociotypeFaceSwitcher id="ISTJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Неярко выраженные статические. Мимика лица не очень живая, улыбается
        нечасто, поэтому и морщин немного. Впрочем, часто присутствует сеть
        расходящихся морщин под глазами.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Строгий, серьёзный, неприветливый, жесткий и придирчивый, иногда
        жестокий, содержащий угрозу и агрессию. У типичный взгляд сыщика,
        военного или судебного следователя. Смотрит на предмет или человека
        прямо, испытующе, иногда снисходительно.
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
