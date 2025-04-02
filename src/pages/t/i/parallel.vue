<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText preset="large" color="accent">
      Одни из самых неблагоприятных. Ваш «конфликтер» — это человек, которой из
      всех соционических типов похож на вас меньше всего.
    </UiText>

    <UiText>
      Это неудобные отношения, которые могут поддерживаться на длительной
      дистанции, но при сближении всегда возникают проблемы.
    </UiText>

    <UiText>
      На первый взгляд «конфликтер» кажется человеком интересным, ярким, он
      привлекает внимание. У него развиты именно те черты характера, которые
      слабы у вас, и это вызывает восхищение.
    </UiText>

    <UiText>
      Но затем возникает легкое ощущение недопонимание, которое возрастает с
      каждой фразой, с каждой минутой, но которое вроде бы можно исправить. Но
      исправить его не удаëтся
    </UiText>

    <UiText preset="large" color="accent">
      Во время ссор «конфликтеры» бьют друг друга по самым слабым местам, из-за
      чего обида накапливается и никуда не девается.
    </UiText>

    <UiText>
      Каждому человеку хочется доказать что-то «конфликтеру», объяснить,
      показать, но он, будто бы специально, вас не понимает. Сначала это
      вызывает недоумение, а затем раздражение, которое сложно удержать в себе.
    </UiText>

    <UiText>
      При том что «конфликтеры» — это очень разные люди, с разными сильно
      развитыми сторонами, они совершенно не умеют прикрывать друг друга по
      слабым функциям.
    </UiText>

    <UiText>
      Отсутствие так называемой «защищенности» и общая атмосфера отношений
      приводят к тому, что «конфликтеры» расходятся и испытывают облегчение.
    </UiText>

    <UiText>
      Конфликтные отношения, хоть и сложны, имеют в себе один очень важный урок.
    </UiText>

    <UiText preset="large" color="accent">
      Судьба сталкивает нас с «конфликтером» в тех ситуациях, когда нам нужно
      сделать выбор.
    </UiText>

    <UiText>
      Дело в том, что, если мы застопорились на выборе между вариантами А и Б,
      именно «конфликтер» лучше всех видит, как нужно поступать.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Конфликтеры</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          предлагает
          <span class="g-color--earth">Хранителю</span>
          отказаться от изживших себя моральных условностей.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--water">Новатора</span>
          быть социальным, заводить знакомства.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          подгоняет
          <span class="g-color--earth">Дипломата</span>
          , чтобы тот не изучал инструкции, а начинал действовать.
        </UiText>

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          же показывает
          <span class="g-color--water">Предпринимателю</span>
          , что иногда стоит сопротивляться внешнему давлению в угоду себе.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          показывает
          <span class="g-color--air">Критику</span>
          , что жизнь стоит обустраивать комфортно и красиво, и совершенно не
          важно, что об этом думают другие.
        </UiText>

        <UiText>
          <span class="g-color--air">Критик</span>
          объясняет
          <span class="g-color--fire">Энтузиасту</span>
          , что даже если никто в вас не верит, можно сделать все хорошо и с
          достижением необходимого результата.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ESFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          учит
          <span class="g-color--fire">Политика</span>
          , что ресурс всегда есть, и он неисчерпаем.
        </UiText>

        <UiText>
          <span class="g-color--fire">Политик</span>
          показывает
          <span class="g-color--air">Аналитику</span>
          , что человеческие отношения — это не ресурс, а нечто большее.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Наставник</span>
          показывает
          <span class="g-color--earth">Мастеру</span>
          , что в соответствии с этапом жизни любые отношения можно менять в
          любую сторону.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          учит
          <span class="g-color--water">Наставника</span>
          преодолевать бытовые трудности и не воспринимать их как преграду.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span>
          помогает
          <span class="g-color--water">Советчику</span>
          научиться бороться за ресурс.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          учит
          <span class="g-color--earth">Инспектора</span>
          , что иногда важно наладить отношения с людьми рядом, чтобы не
          переживать из-за неопределенности.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span>
          учит
          <span class="g-color--air">Гуманиста</span>
          глубокому анализу всего происходящего.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          показывает
          <span class="g-color--fire">Лидера</span>
          , как не поддаться унынию в поисках самого себя.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Лирик</span>
          поддерживает энтузиазм
          <span class="g-color--fire">Администратора</span>
          в ситуациях неопределенности.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          убеждает
          <span class="g-color--air">Лирика</span>
          , что забота о себе и своем комфорте — это абсолютное право каждого
          человека.
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
