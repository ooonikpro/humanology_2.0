<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";
import { UiLinkBlock } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
    <img class="graph" src="/public/assets/images/intertype/graph/activity.svg">
    <div class="text">
        <UiText preset="large" color="accent">
            Один из самых приятных видов отношений.
        </UiText>

        <UiText>
            Активация идеально подходит для дружбы, а для делового сотрудничества не является оптимальным типом взаимодействия.
        </UiText>

        <UiText preset="large" color="accent">
            «Активаторы» видят друг друга сразу, их общение завязывается очень быстро, протекает легко и беспроблемно.
        </UiText>

        <UiText>
            Даже удивляет — как так, ведь человек почти незнакомый, а общаемся с ним будто лучшие друзья!
        </UiText>

        <UiText>
            «Активаторы» заряжают друг друга энергией, имеют общий юмор, схожие цели в жизни, и их отношения устанавливается намного быстрее, чем у дуалов.
        </UiText>

        <UiText>
            Но не все так хорошо: спустя время партнеры — «активаторы» начинают уставать друг от друга, им нужен перерыв в общении. Проходит неделя-две, и опять хочется общения с «активатором».
        </UiText>
        
        <UiText preset="large" color="accent">
            В целом, отношения имеют характер пульсаций, и больше подходят не для деловых союзов, а для дружеских и ни к чему не обязывающих взаимодействий.
        </UiText>

        <UiText>
            «Активаторам» тяжело поддерживать хорошие отношения в том случае, если они работают вместе.
        </UiText>

        <UiText>
            Во-первых, один из партнеров рационален, а другой иррационален, и это уже ведет за собой массу сложностей и недопонимание.
        </UiText>

        <UiText>
            Кроме этого, длительный контакт истощяет «активаторов», они начинают цепляться друг к другу, раздражаться, что ведет к конфликтным ситуациям.
        </UiText>

        <hr />

        <UiText>
            «Активаторам» тяжело поддерживать хорошие отношения в том случае, если они работают вместе.
        </UiText>

        <UiText preset="large" color="accent">
            «Активаторов» обижает, что каждый из них будто бы не считается с партнером, что нельзя доверять и положиться на этого человека.
        </UiText>

        <UiText>
            «Активатор» всегда может научить партнера, причем научить жестко, в какие-то моменты обидев его. Если такие уроки не увенчаются успехом, то общение, скорей всего, сойдет на нет.
        </UiText>

        <UiText>
            Если же оба партнера настроены на «учебу», то, в конце концов, каждый вынесет из отношений то, что ему пригодится по жизни.
        </UiText>

        <hr />

    <div class="pairs"> 
        <UiText preset="subtitle" color="accent">
            Активаторы
        </UiText>
        
        <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ESFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатору</span> удается научить <span class="g-color--fire">Энтузиаста</span> не боятся уходящего времени.
        </UiText>
        
        <UiText>
          <span class="g-color--fire">Энтузиаст</span> способен показать <span class="g-color--water">Новатору</span> что иногда важнее не выяснять отношения, а проявлять заботу о своих близких и друзьях.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="INTJ"
          rightGender="male"
        />
        
        <UiText>
          <span class="g-color--air">Аналитик</span> показывает <span class="g-color--earth">Дипломату</span> возможности дальнейшего развития.
        </UiText>
        
        <UiText>
          <span class="g-color--earth">Дипломат</span>, в свою очередь, дарит <span class="g-color--air">Аналитику</span> моменты радости и заряжает оптимизмом.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ESTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Лидер</span> способен научить <span class="g-color--water">Наставника</span> не бояться проявлений своего тела и болезней. 
        </UiText>
    
        <UiText>
          <span class="g-color--water">Наставник</span> показывает <span class="g-color--fire">Лидеру</span>, что этические нормы — это не так сложно, как может показаться на первый взгляд.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="INFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Испектор</span> позволяет <span class="g-color--air">Лирику</span> найти необходимый ресурс и бороться за него.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Лирик</span> учит <span class="g-color--earth">Инспектора</span> не слишком близко к сердцу принимать ситуации неопределенности.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTJ"
          leftGender="male"
          rightSociotypeId="ESFP"
          rightGender="female"
        />
       
        <UiText>
          <span class="g-color--water">Бизнесмен</span> учит <span class="g-color--fire">Политика</span> быть более гибким в области правил.
        </UiText>
    
        <UiText>
          <span class="g-color--fire">Политик</span> учит <span class="g-color--water">Бизнесмена</span> отдыхать и заботиться о своем здоровье.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFJ"
          leftGender="female"
          rightSociotypeId="INTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Критик</span> помогает <span class="g-color--earth">Хранителю</span> перестать бояться за еще не совершенные поступки.
        </UiText>
    
        <UiText>
          <span class="g-color--earth">Хранитель</span> же мотивирует <span class="g-color--air">Критика</span> бороться за свои интересы.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFP"
          leftGender="female"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Администратор</span> объясняет <span class="g-color--water">Советчику</span>, что нельзя забывать о комфорте, даже когда ты стремишься к высоким целям.
        </UiText>
    
        <UiText>
          <span class="g-color--water">Советчик</span> показывает <span class="g-color--earth">Администратору</span>, что в любой момент времени можно изменить уже существующие отношения с плохих на хорошие.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTP"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Мастер</span> способен обучить <span class="g-color--air">Гуманиста</span> отвечать на проявления силы и власти.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Гуманист</span> дарит надежду <span class="g-color--earth">Мастеру</span> в ситуациях, когда сам бы он сдался.
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