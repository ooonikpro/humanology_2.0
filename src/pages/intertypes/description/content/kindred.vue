<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText preset="large" color="accent">
      Нейтральные отношения между людьми, которые одновременно и очень похожи
      друг на друга, и совершенно разные.
    </UiText>

    <UiText>
      Взаимопонимание в таких отношениях высоко, но при этом часто бывает и
      непонимание в бытовых вопросах.
    </UiText>

    <UiText preset="large" color="accent">
      «Родственники» способны осознать жизненные ценности и желания друг друга,
      поэтому их дискуссии носят практический склад и партнеры с радостью
      обмениваются опытом и мнениями.
    </UiText>

    <UiText>
      Но при этом, зона уверенности одного из партнеров попадает на самую слабую
      зону второго, из-за чего неосознанно можно нанести друг другу обиду.
    </UiText>

    <UiText>
      В целом, отношения напоминают беседы дальних родственников, которые могут
      формально общаться, при этом быть вежливыми и учтивыми, но не особо
      интересоваться друг другом.
    </UiText>

    <UiText>
      Зоны интереса в общении у «родственников» одинаковые, поэтому партнер не
      может удовлетворить ваши вопросы своим экспертным знанием, как и вы его.
    </UiText>

    <hr />

    <UiText preset="large" color="accent">
      Родственные отношения достаточно однообразны.
    </UiText>

    <UiText>
      Расцветают лишь тогда, когда в компании появляются новые люди. Вдвоем
      «родственники» скучают, обменявшись мнениями и поняв друг друга, им, в
      целом, не о чем больше говорить.
    </UiText>

    <UiText>
      Если запереть двух «родственников» в одной комнате, то велика вероятность
      грандиозного конфликта, когда как в большой семье такое общение может быть
      весьма благоприятным.
    </UiText>

    <UiText preset="large" color="accent">
      Родственные отношения учат нас иначе воспринимать нашу болевую функцию.
    </UiText>

    <UiText>
      В таких отношениях можно получить по ней полезный опыт, который в
      дальнейшем поможет легче преодолевать трудности.
    </UiText>

    <UiText>
      «Родственник» помогает нам преодолеть режим страха перед проблемой в режим
      конструктивного её преодоления.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Родственники</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          учит
          <span class="g-color--water">Советчика</span>
          решать проблемы по мере поступления, не откладывая на потом.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          учит
          <span class="g-color--water">Новатора</span>
          развивать отношения с людьми не боясь этого.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ISTP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          учит
          <span class="g-color--earth">Мастера</span>
          быть социальным, а не замыкаться в своем комфорте.
        </UiText>

        <UiText>
          <span class="g-color--earth">Энтузиаст</span>
          учит
          <span class="g-color--earth">Дипломата</span>
          решать технологические вопросы без эмоций.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ENFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          учит
          <span class="g-color--water">Наставника</span>
          заботиться о родных сразу, без дополнительных намеков с их стороны.
        </UiText>

        <UiText>
          <span class="g-color--water">Наставник</span>
          учит
          <span class="g-color--fire">Энтузиаста</span>
          , как прогнозировать будущее отношений и не навязываться людям.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ISTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          учит
          <span class="g-color--earth">Инспектора</span>
          не волноваться при ситуациях неопределенности, а извлекать из них
          опыт.
        </UiText>

        <UiText>
          <span class="g-color--earth">Испектор</span>
          учит
          <span class="g-color--air">Аналитика</span>
          занимать оборонительную позицию и пресекать грубости.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="ESFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span>
          учит
          <span class="g-color--fire">Политика</span>
          наводить порядок в жизни.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span>
          позволяет
          <span class="g-color--fire">Лидеру</span>
          перестать боятся человеческих отношений.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Лирик</span>
          дарит
          <span class="g-color--air">Критику</span>
          энтузиазм при начале новых дел.
        </UiText>

        <UiText>
          <span class="g-color--air">Критик</span>
          координирует
          <span class="g-color--air">Лирика</span>
          так, чтобы его существование приносило эффективные результаты.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTJ"
          leftGender="male"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          учит
          <span class="g-color--fire">Администратора</span>
          воспринимать новые идеи и не зацикливаться на старых.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          показывает
          <span class="g-color--water">Предпринимателю</span>
          , что стоит не только зацикливаться на работе, но и уметь отдыхать в
          комфорте.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFJ"
          leftGender="female"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--air">Гуманиста</span>
          направлять эмоции близких и отвечать за их состояние.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          показывает
          <span class="g-color--earth">Хранителю</span>
          , как ненавязчиво влиять на взаимодействие между людьми.
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
