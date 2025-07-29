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
    <SociotypeProvider id="ESTP" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ESTP" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Ярко выраженное стеническое. Крепкие, сильные, коренастые, с мощной
        костной и мышечной системами. Рост чаще средний и низкий, высокий
        встречается реже.
      </UiText>
      <SociotypeBodySwitcher id="ESTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Круглая или прямоугольная. Черты — четкие, крупные, «решительные»,
        «волевые», особенно выделяются мощный подбородок и надбровные дуги. Рот
        сжат и часто искривлен. Выражение – гневное, суровое.
      </UiText>

      <UiText>
        Вполне определённо статические – вертикальные. Имеется также своя
        отличительная черта – так называемые «складки злости», идущие почти от
        глаз к нижней челюсти.
      </UiText>

      <SociotypeFaceSwitcher id="ESTP" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>
        Жесткий, неприветливый, насмешливо-агрессивный, придирчивый, властный,
        очень внимательный, с прищуром — оценивающий силу и слабость окружающих
        людей и явлений.
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
