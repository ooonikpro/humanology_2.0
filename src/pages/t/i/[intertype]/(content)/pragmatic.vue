<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText preset="large" color="accent">
      «Деловики» похожи между собой, эти типы имеют много общего. Партнеры в
      деловых отношениях очень быстро сближаются.
    </UiText>

    <UiText>
      У них есть масса общих тем для разговоров, они похоже воспринимают мир
      вокруг, поэтому легко находят общий язык.
    </UiText>

    <UiText preset="large" color="accent">
      Наряду с родственными — самые нейтральные из всех видов отношений.
    </UiText>

    <UiText>
      «Деловикам» интересно общаться друг с другом, они могут вынести из
      дискуссий много нового.
    </UiText>

    <UiText>
      Могут критиковать друг друга, часто устают от общения, но при этом
      возобновляют связь каждый раз, когда чувствуют необходимость.
    </UiText>

    <UiText>
      Равные партнеры, поэтому их отношения можно назвать товарищескими, в них
      никто никого не учит и не наставляет.
    </UiText>

    <UiText>
      В таких отношениях нет фактора неудобства или сложностей — партнеры могут
      делиться даже самой личной информацией, и не бояться, что эта информация
      будет неправильно воспринята.
    </UiText>

    <UiText preset="large" color="accent">
      Партнеры ощущают безопасность при общении друг с другом, ведь у них много
      общего, и они не будут специально давить на слабые места.
    </UiText>

    <UiText>
      Несмотря на то, что «деловик» прекрасно понимает намеки, часто ответная
      реакция бывает не настолько сильной, насколько бы хотелось.
    </UiText>

    <UiText>
      В целом, такие отношения не вызывают ярких конфликтов или открытых
      противостояний, при этом восхищения и удовлетворения партнеры также не
      испытывают.
    </UiText>

    <UiText>
      Особенностью деловых отношений является то, что общение проходит гораздо
      плодотворнее и эффективнее в том случае, если силы нужно направить на одну
      цель или же против одной угрозы.
    </UiText>

    <hr />

    <UiText>
      В этой ситуации «деловики» способны без ссор выполнять нужные задачи,
      помогать и поддерживать друг друга, и не уставать от общения.
    </UiText>

    <UiText>
      В случае же повседневного общения «деловики» могут начать придираться друг
      к другу и ругаться. Поскольку мобилизованное состояние чаще всего бывает
      на работе, то эти отношения и называются деловыми.
    </UiText>

    <UiText preset="large" color="accent">
      Основная цель деловых отношений — научить вас более эффективно достигать
      целей, используя разносторонние методы.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Деловики</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ESTP"
          rightGender="male"
        />

        <UiText>
          Вместе стараются разобраться в потоке информации до полного осознания:
          <span class="g-color--water">Новатор</span>
          учит
          <span class="g-color--fire">Лидера</span>
          работать в ограниченном времени.
        </UiText>

        <UiText>
          <span class="g-color--fire">Лидер</span>
          помогает
          <span class="g-color--water">Новатору</span>
          превозмочь физические сложности.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="INFP"
          rightGender="female"
        />

        <UiText>
          Вместе учатся контролировать эмоции и эмоциональные реакции у себя и
          людей вокруг. При этом
          <span class="g-color--earth">Дипломат</span>
          учит
          <span class="g-color--air">Лирика</span>
          быть более значимой персоной.
        </UiText>

        <UiText>
          <span class="g-color--air">Лирик</span>
          показывает
          <span class="g-color--earth">Дипломату</span>
          , как стать увереннее в своих способностях.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          Вместе прорабатывают разностороннее отношение к эстетической и
          комфортной составляющим жизни.
          <span class="g-color--fire">Энтузиаст</span>
          учит
          <span class="g-color--fire">Администратора</span>
          , как воспринимать отношения окружающих.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          учит
          <span class="g-color--fire">Энтузиаста</span>
          разбираться в формальных вопросах
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          Вместе находят новые способы реализации своих способностей. При этом
          <span class="g-color--air">Аналитик</span>
          учит
          <span class="g-color--air">Гуманиста</span>
          быть более эффективным.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          учит
          <span class="g-color--air">Аналитика</span>
          поддерживать заданный эмоциональный фон.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          Вместе учатся охранять и защищать свою территорию, при этом
          <span class="g-color--earth">Инспектор</span>
          показывает
          <span class="g-color--earth">Хранителю</span>
          способы эффективного использования ресурса.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--earth">Инспектора</span>
          влиять на эмоциональное давление со стороны.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          Вместе учатся предугадывать перемены и их значение. При этом
          <span class="g-color--water">Наставник</span>
          учит
          <span class="g-color--water">Предпринимателя</span>
          обходить этические капканы.
        </UiText>

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          показывает
          <span class="g-color--water">Наставнику</span>
          , как не потерять общий смысл во время поиска новых значений.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFP"
          leftGender="female"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          Вместе изучают гуманизм и способы воздействия на людей.
          <span class="g-color--fire">Политик</span>
          показывает
          <span class="g-color--water">Советчику</span>
          , как доводить дело до конца.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          учит
          <span class="g-color--fire">Политика</span>
          не тратить время попусту.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTP"
          leftGender="male"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          Вместе учатся достигать целей эффективно и с малыми затратами.
          <span class="g-color--air">Критик</span>
          показывает
          <span class="g-color--earth">Мастеру</span>
          полную картину действий.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          дает
          <span class="g-color--air">Критику</span>
          уверенность в своих силах.
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
