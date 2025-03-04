<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
    <img class="graph" src="/public/assets/images/intertype/graph/dual.svg">
  <div class="text">
    <UiText preset="large" color="accent">
      Дуал — это человек, с которым можно быть собой безо всяких усилий. Он воспринимает вас естественно, не требует подстраиваться под его ожидания и компенсирует ваши слабые места так, что вы даже не замечаете, как взаимодействие с ним становится легким и гармоничным.
    </UiText>

    <UiText>
      В таких отношениях не возникает необходимости доказывать что-то или справляться с тем, что дается с трудом – все слабые функции оказываются прикрыты, а сильные получают поддержку.
    </UiText>

    <UiText>
      С дуалом отношения строятся без напряжения, разделение обязанностей складывается само собой, и каждый занимается тем, что ему по-настоящему интересно и комфортно. Нет вечных конфликтов, борьбы за лидерство или необходимости контролировать себя, чтобы сохранить мир.
    </UiText>

    <UiText preset="large" color="accent">
      На первый взгляд он может показаться слишком простым, «никаким», даже скучным. 
    </UiText>

    <UiText>
      С ним не возникает привычного эмоционального напряжения, нет желания завоевывать его внимание или разгадывать сложные мотивы поведения. Такое спокойствие может обмануть, заставляя искать кого-то более яркого или загадочного.
    </UiText>

    <UiText>
      Но если дать таким отношениям шанс, сближение происходит естественно и незаметно. Постепенно появляется чувство защищенности и комфорта, ощущение, что не нужно ничего доказывать или постоянно контролировать себя.
    </UiText>

    <UiText preset="large" color="accent">
      В этом и есть суть дуализации — рядом с таким человеком психика расслабляется, внутренний баланс восстанавливается, а жизнь становится проще и радостнее.
    </UiText>

    <hr />

    <div class="dual-pairs"> 
      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ISFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатор</span> с радостью обнаруживает, что <span class="g-color--earth">Дипломат</span> готов слушать его бесконечные новые идеи и логические цепочки, и, более того, он хочет понять все это.
        </UiText>
        
        <UiText>
          <span class="g-color--earth">Дипломат</span> при этом обеспечивает <span class="g-color--water">Новатора</span> сенсорным комфортом, вкусной едой, приятной атмосферой общения и искренним желанием услышать каждую фразу.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="INTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span> не дает <span class="g-color--fire">Энтузиасту</span> суетится днями напролет, объясняя ему, что стоит внимания, а что нет.
        </UiText>
        
        <UiText>
          Взамен <span class="g-color--fire">Энтузиаст</span> заботится о том, чтобы <span class="g-color--air">Аналитику</span> было комфортно работать, чтобы он был здоров, сыт и счастлив. 
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ISTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span> учит <span class="g-color--water">Наставника</span> добиваться целей, не пасовать перед сложностями и уметь постоять за себя. 
        </UiText>
    
        <UiText>
          <span class="g-color--water">Наставник</span>, в свою очередь, объясняет <span class="g-color--earth">Инспектору</span>, как устроен мир эмоций, дарит ему новые ощущения и новые чувства, делает его менее замкнутым человеком.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="INFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span> мобилизует <span class="g-color--air">Лирика</span>, склонного витать в облаках.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Лирик</span> дарит <span class="g-color--fire">Лидеру</span> ощущение, что завтрашний день принесет только приятные эмоции и больший успех.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTJ"
          leftGender="male"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Бизнесмен</span> позволяет <span class="g-color--earth">Хранителю</span> не зацикливаться на этических нормах и правилах, а применять их в зависимости от постоянно меняющейся ситуации.
        </UiText>
    
        <UiText>
          <span class="g-color--earth">Хранитель</span> учит <span class="g-color--water">Бизнесмен</span> разбираться в людях и не позволять собой пользоваться.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFP"
          leftGender="female"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Критик</span> обучает <span class="g-color--fire">Политика</span> не хвастаться своими способностями, а эффективно их применять, достигая хороших результатов.
        </UiText>
    
        <UiText>
          <span class="g-color--fire">Политик</span> же превращает <span class="g-color--air">Критика</span> из закрытого человека в более социального, веселого, оптимистичного.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFP"
          leftGender="female"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Мастер</span> помогает <span class="g-color--water">Советчику</span> добиваться поставленных целей, из фантазий получить реальные перспективы и результаты.
        </UiText>
    
        <UiText>
          <span class="g-color--water">Советчик</span> рассказывает <span class="g-color--earth">Мастеру</span> как, с помощью отношений, добиться желаемого и получить поддержку.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTJ"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Администратор</span> учит <span class="g-color--air">Гуманиста</span> быть более твердым человеком.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Гуманист</span> помогает <span class="g-color--fire">Администратору</span> сдерживать свои эмоции и быть более терпимым к людям.
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

    .dual-pairs {
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