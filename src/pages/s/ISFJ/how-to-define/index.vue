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
    <SociotypeProvider id="ISFJ" force-tag="section">
      <UiText preset="large" color="role">Портреты</UiText>
      <SociotypePortraitSwitcher id="ISFJ" />
    </SociotypeProvider>

    <section>
      <UiText preset="large" color="role">Телосложение</UiText>
      <UiText>
        Близкое к стеническому — «спортивное», легко могут развивать
        мускулатуру, обладают высоким жизненным тонусом. Рост чаще всего средний
        или высокий, низкий встречается значительно реже.
      </UiText>
      <SociotypeBodySwitcher id="ISFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Форма и черты лица</UiText>

      <UiText>
        Округлая или прямоугольная закругленная. Черты — чёткие, но с некоторыми
        закруглениями, сбалансированные, часто — «правильные».
      </UiText>

      <UiText>
        Мужчины очень любят отращивать усы, чтобы за ними скрывать выражение
        губ: улыбку или недовольство.
      </UiText>

      <SociotypeFaceSwitcher id="ISFJ" />
    </section>

    <section>
      <UiText preset="large" color="role">Морщины</UiText>
      <UiText>Как у Инспектора, в том числе и «складка злости».</UiText>
    </section>

    <section>
      <UiText preset="large" color="role">Взгляд</UiText>
      <UiText>
        Суровый, придирчивый, как бы обвиняющий и в то же время «виноватый»,
        спокойный, самоуверенный, стойкий, нередко «сверлящий», внимательный и
        направленный прямо в глаза человека.
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
