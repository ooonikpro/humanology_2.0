<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
    <img class="graph" src="/public/assets/images/intertype/graph/mirror.svg">
    <div class="text">
        <UiText preset="large" color="accent">
            Вы воспринимаете своего партнера очень похожим на вас, но при этом «перевернутым» способом.
        </UiText>

        <UiText>
            Если брать отношения в квадре, то зеркальные будут самыми неблагоприятными, при этом если рассматривать все виды отношений между типами, то зеркальные отношения будутгде-то посерединке.
        </UiText>

        <UiText preset="large" color="accent">
            Можно сказать, что ваш «зеркальщик» одновременно и очень похож на вас, и совсем не похож.
        </UiText>

        <UiText>
            Отсюда идет и сильный интерес к нему, и недопонимание во многих вопросах.
        </UiText>
        
        <UiText preset="large" color="accent">
            Если общение между «зеркальщиками» идет по сильным сторонам их типов, то часто возникают полезные для обоих сторон дискуссии.
        </UiText>

        <UiText>
            «Зеркальщики» склонны критиковать друг друга, причем чаще всего критика бывает конструктивной.
        </UiText>

        <UiText>
            У представителей зеркальных типов всегда найдутся темы для обсуждения, поскольку, с одной стороны, два человека мыслят похоже и имеют общие ценности, а с другой, их взгляды сильно отличаются, и для того, чтобы увидеть полную картину, стоит услышать второе мнение..
        </UiText>

        <hr />

        <UiText preset="large" color="accent">
            От партнера — «зеркальщика» не стоит ждать утешений.
        </UiText>

        <UiText>
            Вместо жалости, он может лишь направить вас и мотивировать на дальнейшую работу. Зеркальные отношения нежелательны для брака, поскольку в них присутствует конфликт рациональности одного партнера и иррациональности второго.
        </UiText>

        <hr />

    <div class="pairs"> 
        <UiText preset="subtitle" color="accent">
            Зеркальщики
        </UiText>
        
        <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="INTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Новатор</span> предлагает <span class="g-color--air">Аналитику</span> модернизировать правила, перестать зацикливаться на устаревших системах и начать впитывать новое.
        </UiText>
        
        <UiText>
          <span class="g-color--air">Аналитик</span> заставляет <span class="g-color--water">Новатору</span> не разбрасываться идеями, а формировать конкретные цели и выполнять их.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ISFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span> предлагает <span class="g-color--earth">Дипломату</span> концентрировать созерцательный гуманизм на заботе о родственниках и друзьях.
        </UiText>
        
        <UiText>
          <span class="g-color--earth">Дипломат</span> учит <span class="g-color--fire">Энтузиаст</span> не растрачивать свою хозяйственность на всех подряда, а делать комфортно только самим близким людям.
        </UiText> 

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="INFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Наставник</span> учит <span class="g-color--air">Лирика</span> различным проявлениям гуманизма.
        </UiText>

        <UiText>
          <span class="g-color--air">Лирик</span> показывает <span class="g-color--water">Наставнику</span>, как управлять людьми вокруг и их энергетикой. 
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="ISTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span> учит <span class="g-color--earth">Инспектора</span> не лениться и добиваться ясности в своих целях и желаниях.
        </UiText>

        <UiText>
          <span class="g-color--earth">Испектор</span> учит <span class="g-color--fire">Лидера</span> тому, что нужно сначала оптимизировать план, а лишь потом бросаться за выполнение.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTJ"
          leftGender="male"
          rightSociotypeId="INTP"
          rightGender="male"
        />
       
        <UiText>
          <span class="g-color--water">Предприниматель</span> учит <span class="g-color--air">Критика</span> быстро изменять критерии оценки любого дела.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Критик</span> учит <span class="g-color--water">Предпринимателя</span> не распыляться на много действий, а извлекать из конкретных дел конкретную прибыль.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFP"
          leftGender="female"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Политик</span> помогает <span class="g-color--earth">Хранителю</span> не распыляться на абстрактную мораль, а помогать лишь близким людям.
        </UiText>
    
        <UiText> 
          <span class="g-color--earth">Хранитель</span> учит <span class="g-color--fire">Политика</span> не тратить нервы на эмоциональное неприятие сложных ситуаций, а пытаться эти ситуации менять.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFP"
          leftGender="female"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Советчик</span> учит <span class="g-color--air">Гуманиста</span> не упускать перспективные возможности из-за несоответствия морали.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span> учит <span class="g-color--water">Советчика</span>быть более этичным в тех моментах, когда для него важнее добиться результата.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTJ"
          leftGender="male"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Администратор</span> показывает <span class="g-color--earth">Мастеру</span>, что не все правила плохо влияют на жизнь и комфорт.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span> показывает <span class="g-color--fire">Администратору</span>, что в погоне за карьерой и успехом, не стоит забывать и о своих потребностях.
        </UiText>

      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

  .graph {
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
  }

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