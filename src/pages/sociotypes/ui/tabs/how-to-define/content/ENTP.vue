<script lang="ts" setup>
import { UiText } from "@shared/ui";
</script>

<template>
  <div class="text">
    <section>
      <UiText preset="large" color="role">
        Портреты
      </UiText>
      <UiText color="fire">
        Тут не хватает портретов.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">
        Телосложение
      </UiText>
      <UiText>
        Астеническое. Рост часто выше среднего, нередко выражена сутулость в грудном отделе позвоночника.
      </UiText>
      <img class="bodies" src="/public/assets/images/bodies/ENTP-female.png" />
      <UiText color="fire">
        Не хватает переключателя по возрастам.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">
        Форма и черты лица
      </UiText>
      <UiText>
        Овальная или треугольная. Черты — довольно резкие, заметные.
      </UiText>
      <UiText color="fire">
        Здесь виджет по лицам с переключаетелем по полу.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">
        Морщины
      </UiText>
      <UiText>
        Сильно выражены вертикальные, расположенные на межбровном расстоянии.
      </UiText>
    </section>

    <section>
      <UiText preset="large" color="role">
        Взгляд
      </UiText>
      <UiText>
        Активный, ищущий, явно заинтересованный в окружающих объектах, открытый, располагающий, но все же сохраняющий дистанцию.
      </UiText>
      <UiText>
        Он как бы показывает, что человека более интересуют предметы, чем люди, с которыми он вовсе не обязательно желает общаться.
      </UiText>
      <UiText>
        В моменты обдумывания сложных проблем — отстраненный, невидящий, холодный взгляд.
      </UiText>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "TextContent.scss";

.bodies {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}

</style>
