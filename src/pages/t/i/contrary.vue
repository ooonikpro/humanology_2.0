<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text g-page">
    <UiText preset="large" color="accent">
      Неблагоприятные отношения, в которых партнеры «гасят» друг в друге
      искренние и яркие проявления, считая их чрезмерными и бессмысленными.
    </UiText>

    <UiText>
      В отношениях полной противоположности партнëрам практически невозможно
      установить правильную дистанцию в общении, это получается сделать только в
      том случае, когда партнеры общаются наедине друг с другом.
    </UiText>

    <UiText>
      Как только появляется третий человек, дискуссия превращается в жаркий
      спор, где каждый пытается доказать, что он прав. Причем ни один из
      партнеров не аргументирует свою позицию, поэтому этот спор не несёт
      никакого смысла.
    </UiText>

    <UiText preset="large" color="accent">
      «Погашенцы» очень любят друг друга критиковать, задевая за живое.
    </UiText>

    <UiText>
      Именно обиды — главная проблема в таких отношениях, поскольку партнер
      может задеть ваши сильные стороны, подвергнуть сомнению целесообразность
      вашей жизненной установки.
    </UiText>

    <UiText>
      Партнеры в отношениях полной противоположности часто могут спрогнозировать
      поведение друг друга, ожидаемые провалы или успехи.
    </UiText>

    <UiText>
      Партнеры-«погашенцы» думают совершенно по-разному, хоть и могут называть
      свои мысли одинаковыми словами. Часто в этих отношениях создается
      ощущение, будто партнер подсмеивается над вами.
    </UiText>

    <UiText>
      Читать книги, написанные «погашенцем», сложно и непонятно. Даже если это
      классики литературы, то произведение все равно воспринимается
      поверхностным, мутным, оно не «цепляет».
    </UiText>

    <UiText preset="large" color="accent">
      Спустя время быстро забывается и сюжет, и мораль.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Погашенцы</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          призывает
          <span class="g-color--air">Критика</span>
          раскладывать проблемы по полочкам и действовать, а не ожидать
          неуспеха.
        </UiText>

        <UiText>
          <span class="g-color--air">Критик</span>
          учит
          <span class="g-color--water">Новатора</span>
          не зацикливаться на возможностях, а начинать их реализовывать.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ESFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          показывает
          <span class="g-color--fire">Политику</span>
          , как добиваться целей не с помощью воли, а с помощью настроения и
          эмоций.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span>
          учит
          <span class="g-color--earth">Дипломата</span>
          не лениться, а вместо этого строить отношения с людьми вокруг себя.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          учит
          <span class="g-color--earth">Хранителя</span>
          заботиться о близких конкретными способами.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          показывает
          <span class="g-color--fire">Энтузиасту</span>
          , что часто нужно не сочувствовать, а помогать с помощью воли и
          ответственности.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          показывает
          <span class="g-color--water">Предпринимателю</span>
          , что нужно сначала найти оптимальное решение, и лишь потом
          действовать.
        </UiText>

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          учит
          <span class="g-color--air">Аналитика</span>
          экономить время, сокращая выполнения ненужных формальностей.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Наставник</span>
          призывает
          <span class="g-color--air">Гуманиста</span>
          менять отношения с близкими в зависимости от проходящего времени.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          учит
          <span class="g-color--water">Наставника</span>
          контролировать отношения без помощи бурных эмоций.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span>
          учит
          <span class="g-color--fire">Администратора</span>
          не гнаться за новыми результатами, а осваиваться в уже достигнутом.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          показывает
          <span class="g-color--earth">Инспектору</span>
          , что не все можно просчитать.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span>
          мотивирует
          <span class="g-color--earth">Мастера</span>
          не лениться, а постигать смысл всего происходящего в мире.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          учит
          <span class="g-color--fire">Лидера</span>
          целесообразности каждого действия.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Лирик</span>
          призывает
          <span class="g-color--water">Советчика</span>
          перестать гнаться за новыми возможностями, а осознать то, что он уже
          имеет.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          учит
          <span class="g-color--air">Лирика</span>
          более глубокому формированию отношений с уже знакомыми людьми.
        </UiText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.text {
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
