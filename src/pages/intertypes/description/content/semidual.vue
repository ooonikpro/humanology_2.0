<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
    <img class="graph" src="/public/assets/images/intertype/graph/semidual.svg">
    <div class="text">
        <UiText preset="large" color="accent">
            Комфортные отношения неполного дополнения партнеров. Партнеры быстро находят общий язык, возникает взаимный интерес и симпатия.
        </UiText>

        <UiText>
            «Полудуалы» прекрасно понимают устремления друг друга и готовы поддержать их. Партнëрам интересно друг с другом, беседы не утомляют, а, наоборот, дарят хорошее настроение.
        </UiText>

        <UiText preset="large" color="accent">
            При этом иногда могут возникать ссоры на пустом месте, которые партнеры преодолевают и продолжают тесное общение.
        </UiText>

        <UiText>
            Полудуальные отношения поддерживают партнеров в работоспособном состоянии, не дают до конца расслабиться. Радость понимания часто сменяется разочарованием, но, в целом, отношения приятные и комфортные.
        </UiText>
        
        <UiText>
            «Полудуалы» общаются друг с другом без эмоциональных всплесков, и отношения очень укрепляет совместный труд.
        </UiText>

        <UiText>
            Вместе партнеры могут горы свернуть, поскольку в паре есть понимание и желание достичь общих целей. При том, что партнеры постоянно советуются, каждый делает свою часть работы, не мешая другому.
        </UiText>

        <hr />

        <UiText preset="large" color="accent">
            Полудуальные отношения помогают людям развиваться, узнавать новую информацию, разбираться в сложных проблемах.
        </UiText>

        <UiText>
            Но при этом, зона уверенности одного из партнеров попадает на самую слабую зону второго, из-за чего неосознанно можно нанести друг другу обиду.
        </UiText>

        <hr />

    <div class="pairs"> 
        <UiText preset="subtitle" color="accent">
            Полудуалы
        </UiText>
        
        <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--water">Новатор</span> учит <span class="g-color--earth">Мастера</span> разбираться в жизненных знаниях, сводя их в единую систему.
        </UiText>
        
        <UiText>
          <span class="g-color--earth">Мастер</span> показывает <span class="g-color--water">Новатору</span>, как от идей переходить к успешной реализации.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span> учит <span class="g-color--water">Советчика</span> регулировать эмоциональный фон.
        </UiText> 

        <UiText>
          <span class="g-color--water">Советчик</span> учит <span class="g-color--earth">Дипломата</span> влиять на отношения с близкими людьми.
        </UiText>    

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="ISTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span> показывает <span class="g-color--earth">Инспектору</span>, как заботиться о близких. 
        </UiText>

        <UiText>
          <span class="g-color--earth">Инспектор</span> учит <span class="g-color--fire">Энтузиаста</span> не суетиться, а быть ответственным за свои действия.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ENFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span> показывает <span class="g-color--water">Наставнику</span>, как оптимизировать работу.
        </UiText>

        <UiText>
          <span class="g-color--water">Наставник</span> помогает <span class="g-color--air">Аналитику</span> вносить в жизнь новые ощущения, не держась за старый опыт.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESTP"
          leftGender="male"
          rightSociotypeId="INTP"
          rightGender="male"
        />
       
        <UiText>
          <span class="g-color--fire">Лидер</span> объясняет <span class="g-color--air">Критику</span>, как искать связи между жизненными явлениями, вместо получения сиюминутных удовольствий.
        </UiText>
    
        <UiText>
          <span class="g-color--air">Критик</span> позволяет <span class="g-color--fire">Лидеру</span> как действовать максимально эффективно, не отвлекаясь на фантазии.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INFP"
          leftGender="female"
          rightSociotypeId="ESFP"
          rightGender="female"
        />
    
        <UiText>
          <span class="g-color--air">Лирик</span> учит <span class="g-color--fire">Политика</span> не распыляться на всех вокруг, а уделять внимание важным эмоциональным моментам.
        </UiText>
    
        <UiText> 
          <span class="g-color--fire">Политик</span> показывает <span class="g-color--air">Лирика</span>, как развивать отношения с людьми в глубину.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTJ"
          leftGender="male"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Предприниматель</span> показывает <span class="g-color--air">Гуманисту</span>, что стоит обновлять формальности в соответствии с ситуацией.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span> учит <span class="g-color--water">Предприниматель</span> разряжать напряженные ситуации в общении.
        </UiText>

      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFJ"
          leftGender="female"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Хранитель</span> учит <span class="g-color--fire">Администратора</span> быть менее эмоциональным, но более уверенным в себе.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span> показывает <span class="g-color--earth">Хранителю</span>, как ценить гармонию и красоту.
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