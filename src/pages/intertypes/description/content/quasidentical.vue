<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText preset="large" color="accent">
      Неблагоприятные отношения, которые сначала кажутся приятными, а затем
      вызывают массу сложностей.
    </UiText>

    <UiText>
      На первый взгляд «квазитождики» похожи — у них похожие слабые зоны и
      всегда есть, о чем поговорить. На самом деле, отношения квазитождества
      можно описать двумя словами: полное непонимание. И это непонимание будет
      преследовать партнеров во всем.
    </UiText>

    <UiText>
      Главной проблемой таких отношений является то, что те ценности и области,
      которые крайне важны одному из партнеров, для второго являются неважной
      частью жизни. Именно поэтому дискуссии у «квазитождиков» заканчиваются
      недоумением и ссорами.
    </UiText>

    <UiText preset="large" color="accent">
      «Квазитождика» нельзя понять до конца.
    </UiText>

    <UiText>
      Книги, написанные «квазитождиком» очень сложно читать, еще сложней иметь
      преподавателя «квазитождика» — вероятность, что материал останется
      непонятым — 99%.
    </UiText>

    <UiText>
      Чтобы понять все, что хочет сказать партнер, нужно потратить массу усилий,
      а результат будет бесполезным — все это можно было выразить в двух словах,
      а пришлось прочитать тысячу.
    </UiText>

    <UiText preset="large" color="accent">
      Разговоры с «квазитождиком» раздражают, поскольку кажется, что он
      специально вносит хаос и запутывает логические цепочки.
    </UiText>

    <UiText>Все это можно было бы объяснить гораздо проще.</UiText>

    <UiText>
      «Квазитождики» могут общаться довольно продолжительное время, но партнеров
      будет преследовать ощущение бесполезно потраченного времени. В целом,
      такие отношения легко разрываются, и оба партнера чувствуют облегчение.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Квазитождики</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          доказывает
          <span class="g-color--water">Предпринимателю</span>
          , что понимание вопроса всегда стоит потраченного времени.
        </UiText>

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          объясняет
          <span class="g-color--water">Новатору</span>
          , что идея без реализации — это лишь трата времени.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          объясняет
          <span class="g-color--earth">Хранитель</span>
          , что стоит отвечать за свои эмоции.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--earth">Дипломатf</span>
          преодолевать зависимость от настроения ради дела.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ESFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          учит
          <span class="g-color--fire">Политика</span>
          удовольствие от жизни.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span>
          показывает
          <span class="g-color--fire">Энтузиасту</span>
          , как окружить себя правильными и комфортными отношениями.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          показывает
          <span class="g-color--air">Критику</span>
          , как реализовывать свои возможности.
        </UiText>

        <UiText>
          <span class="g-color--air">Критик</span>
          учит
          <span class="g-color--air">Аналитика</span>
          доводить дела до результата.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span>
          показывает
          <span class="g-color--earth">Мастеру</span>
          , что стоит расширить свою ответственность.
          <span class="g-color--earth">Инспектор</span> показывает <span class="g-color--earth">Мастеру</span>, что стоит расширить свою ответственность.
        </UiText>
    
        <UiText>
          <span class="g-color--earth">Мастер</span> учит <span class="g-color--earth">Инспектора</span> не только оберегать ресурс, но и вкладывать его в свое дело.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          учит
          <span class="g-color--earth">Инспектора</span>
          не только оберегать ресурс, но и вкладывать его в свое дело..
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Наставник</span>
          объясняет
          <span class="g-color--water">Советчик</span>
          исторический ход и его взаимодействие с событиями повседневности.
          <span class="g-color--water">Наставник</span> объясняет <span class="g-color--water">Советчику</span> исторический ход времени и его взаимодействие с событиями повседневности.
        </UiText>
    
        <UiText>
          <span class="g-color--water">Советчик</span> учит <span class="g-color--water">Наставника</span> направлять отношения с людьми в правильное русло.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          учит
          <span class="g-color--water">Наставника</span>
          направлять отношения с людьми в правильное русло.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span>
          учит
          <span class="g-color--fire">Администратора</span>
          размышлениям о причинах и последствиях в жизни.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          показывает
          <span class="g-color--fire">Лидеру</span>
          , ради чего стоит соблюдать правила.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Лирик</span>
          показывает
          <span class="g-color--air">Гуманисту</span>
          смысл позитивных эмоций.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          учит
          <span class="g-color--air">Лирика</span>
          получать позитивные эмоции от взаимодействия с людьми.
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
