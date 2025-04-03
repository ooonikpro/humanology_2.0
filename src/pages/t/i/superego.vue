<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText>Один из самых ярких типов отношений между людьми.</UiText>

    <UiText preset="large" color="accent">
      Партнер-суперэго с первого взгляда притягивает внимание, вызывает уважение
      и восхищение, поскольку он умеет делать то, что не умеем мы, но чему очень
      хотим научиться.
    </UiText>

    <UiText>
      В вопросах, где вам требуется много сил для решения, ваш партнер-суперэго
      плавает, как рыба в воде.
    </UiText>

    <UiText>
      Он быстро решает неразрешимые для вас трудности, даже не почувствовав
      усталости. Это вызывает легкую зависть и желание быть похожим на него.
    </UiText>

    <UiText preset="large" color="accent">
      Партнеры-суперэго уважают друг друга, интересуются друг другом, и при
      внутреннем любопытстве, внешне ведут себя довольно-таки прохладно и
      отчужденно.
    </UiText>

    <UiText>
      В отношениях суперэго нет глубокого интереса к личности партнера, и если
      люди не имеют общих интересов, то их общение носит формальный характер, и
      долго поддерживать такое общение достаточно сложно.
    </UiText>

    <UiText>
      На близкой дистанции в отношениях суперэго возникает еще одна проблема: на
      словах понимание достигнуто, но в деле создается ощущение, будто партнер
      хочет сделать все вам назло.
    </UiText>

    <UiText>
      На самом деле, это лишь восприятие и несоответствие ваших моделей, но
      именно из-за такого ощущения отношения суперэго достаточно сложно
      поддерживать.
    </UiText>

    <UiText preset="large" color="accent">
      Отношения суперэго имеют массу плюсов для партнеров, ведь эти отношения
      учат социальной адаптации, показывают, как нужно себя вести по тем
      функциям, которые у нас слабые.
    </UiText>

    <UiText>
      Благодаря партнеру-суперэго мы можем стать более устойчивыми к критике и
      оценке, и менее нуждающимися в «защитнике» наших слабых функций.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Суперэго</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ESFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          учит
          <span class="g-color--fire">Политика</span>
          уделять внимание поиску причинно-следственных связей в своей жизни.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span>
          предлагает
          <span class="g-color--water">Новатору</span>
          чуть меньше заботится о своем удобстве, и чуть больше — об поддержании
          отношения с близкими людьми.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          показывает
          <span class="g-color--air">Критику</span>
          , что не стоит боятся ярких эмоций и ощущений во время общения с
          людьми.
        </UiText>

        <UiText>
          <span class="g-color--air">Критик</span>
          вселяет уверенность в
          <span class="g-color--earth">Дипломата</span>
          , что решение всегда есть, и его не так сложно найти.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          учит
          <span class="g-color--water">Предпринимателя</span>
          заботиться о своих близких не только на словах, но и делом.
        </UiText>

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          помогает
          <span class="g-color--fire">Энтузиасту</span>
          концентрироваться на главном и отсекать все второстепенное.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          мотивирует
          <span class="g-color--earth">Хранителя</span>
          , развиваться и не жалеть ресурсов.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--air">Аналитика</span>
          активно защищать свою территорию и свои интересы.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Наставник</span>
          наглядно показывает
          <span class="g-color--fire">Администратору</span>
          , как добиться изменения отношений с окружающими людьми.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          учит
          <span class="g-color--water">Наставника</span>
          заботиться о себе в кризисных ситуациях.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span>
          учит
          <span class="g-color--air">Гуманиста</span>
          защищать свои права и свой выбор.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          показывает
          <span class="g-color--earth">Инспектору</span>
          , что жизнь — разнообразна, и поэтому прекрасна, так что не стоит
          боятся неопределенности.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span>
          предлагает
          <span class="g-color--water">Советчику</span>
          просчитывать свои ходы наперед.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          объясняет
          <span class="g-color--fire">Лидеру</span>
          , что все старания построить отношения не напрасны и быстро окупятся.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Лирик</span>
          ненавязчиво показывает
          <span class="g-color--earth">Мастеру</span>
          эмоциональную сторону восприятия мира.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          мотивирует
          <span class="g-color--air">Лирика</span>
          на конкретные действия.
        </UiText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.text {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .pairs {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .pair {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid colors.$intertype;
  }
}
</style>
