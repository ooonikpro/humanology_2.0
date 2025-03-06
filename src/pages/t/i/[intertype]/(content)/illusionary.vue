<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="text">
    <UiText preset="large" color="accent">
      Издалека партнер-«миражник» выглядит похожим на дуала, чем вызывает
      симпатию, но при близком общении возникает ощущение, что партнер — это
      лишь «мираж» дуала, его подобие.
    </UiText>

    <UiText>
      В миражных отношениях партнеры расслабляются, поскольку чувствуют защиту
      слабых мест. С «миражником» хорошо разговаривать на отвлеченные темы,
      отдыхать, развлекаться.
    </UiText>

    <UiText preset="large" color="accent">
      При этом, в миражных отношениях партнëрам достаточно сложно работать.
    </UiText>

    <UiText>Миражные отношения относятся к благоприятным отношениям.</UiText>

    <UiText>
      Как только начинается деловое сотрудничество «миражников», сразу возникает
      непонимание в вопросах организации труда, эффективности рабочего времени,
      не ясны мотивы партнера.
    </UiText>

    <UiText>
      Каждый из партнеров ожидает от второго других действий, более
      целесообразных с их точки зрения.
    </UiText>

    <UiText>
      Часто возникают ссоры именно во время работы, поэтому «миражникам» лучше
      работать по-отдельности, не контролируя друг друга.
    </UiText>

    <UiText>
      В паре «миражников» экстравертный партнер пытается сделать интровертного
      партнера «нормальным человеком», а интровертный партнер пытается
      отвязаться от навязывания экстравертным партнером своего ритма работы.
    </UiText>

    <hr />

    <UiText preset="large" color="accent">
      При том, что конфликты в миражной паре иногда случаются, они обычно
      кратковременные и неглубокие.
    </UiText>

    <UiText>
      Партнëрам интересно друг с другом, они общаются комфортно и расслабленно.
    </UiText>

    <UiText>
      Отношения между «миражниками» скачут от ощущения счастья и гармонии к
      ощущению злости и полного непонимания. Когда партнеры привыкают к этому,
      то отношения становятся более стабильными.
    </UiText>

    <UiText preset="large" color="accent">
      В миражных отношениях партнеры то улучшают, то ухудшают взаимопонимание.
    </UiText>

    <UiText>
      «Миражникам» приятно общаться друг с другом наедине, а не в большом
      коллективе.
    </UiText>

    <UiText>
      Миражная пара, чаще всего, не склонна к постоянной социальной жизни, этим
      людям хорошо вдвоем, им больше никто не нужен.
    </UiText>

    <UiText preset="large" color="accent">
      Миражные отношения учат нас осуществлять детские мечты, становится более
      свободными и расслабленными.
    </UiText>

    <hr />

    <div class="pairs">
      <UiText preset="subtitle" color="accent">Миражники</UiText>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENTP"
          leftGender="male"
          rightSociotypeId="INFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Новатор</span>
          показывает
          <span class="g-color--fire">Лирику</span>
          , как понимать мир, не отвлекаясь на ежесекундные заботы.
        </UiText>

        <UiText>
          <span class="g-color--fire">Лирик</span>
          учит
          <span class="g-color--water">Новатору</span>
          ощущать счастье без мыслей о последствиях.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISFP"
          leftGender="female"
          rightSociotypeId="ESTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Дипломат</span>
          показывает
          <span class="g-color--fire">Лидеру</span>
          , что эмоциональный настрой помогает преодолеть проблемы.
        </UiText>

        <UiText>
          <span class="g-color--fire">Лидер</span>
          настраивает
          <span class="g-color--earth">Дипломата</span>
          на то, что ясность стоит того, чтобы ее достигать.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFJ"
          leftGender="female"
          rightSociotypeId="INFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--fire">Энтузиаст</span>
          помогает
          <span class="g-color--air">Гуманисту</span>
          радоваться и духовной части жизни, и плотской.
        </UiText>

        <UiText>
          <span class="g-color--air">Гуманист</span>
          показывает
          <span class="g-color--fire">Энтузиасту</span>
          , как тонко влиять на настроение близких людей.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTJ"
          leftGender="male"
          rightSociotypeId="ESTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--air">Аналитик</span>
          учит
          <span class="g-color--fire">Администратора</span>
          видеть нетрадиционные способы использования ресурсов.
        </UiText>

        <UiText>
          <span class="g-color--fire">Администратор</span>
          показывает
          <span class="g-color--air">Аналитику</span>
          жизнь за пределами договоров и формальностей.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ISTJ"
          leftGender="male"
          rightSociotypeId="ENTJ"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--earth">Инспектор</span>
          показывает
          <span class="g-color--water">Предпринимателю</span>
          , как с помощью уверенности и авторитета достигать необходимых целей.
        </UiText>

        <UiText>
          <span class="g-color--water">Предприниматель</span>
          учит
          <span class="g-color--earth">Инспектор</span>
          быть более гибким и менять правила в соответствии с ситуацией.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ENFJ"
          leftGender="female"
          rightSociotypeId="ISFJ"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--water">Наставник</span>
          показывает
          <span class="g-color--earth">Хранителю</span>
          , как развивать нравственные нормы в соответствии с новыми эпохами.
        </UiText>

        <UiText>
          <span class="g-color--earth">Хранитель</span>
          учит
          <span class="g-color--water">Наставника</span>
          справляться с неожиданными вспышками эмоций.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="ESFP"
          leftGender="female"
          rightSociotypeId="ISTP"
          rightGender="male"
        />

        <UiText>
          <span class="g-color--fire">Политик</span>
          учит
          <span class="g-color--earth">Мастера</span>
          поддерживать отношения с близкими.
        </UiText>

        <UiText>
          <span class="g-color--earth">Мастер</span>
          показывает
          <span class="g-color--fire">Политику</span>
          , как преодолеть проблемы конкретными способами.
        </UiText>
      </div>

      <div class="pair">
        <SociotypesDuoByIntertypeWidget
          :intertypeId="props.intertypeId"
          leftSociotypeId="INTP"
          leftGender="male"
          rightSociotypeId="ENFP"
          rightGender="female"
        />

        <UiText>
          <span class="g-color--air">Критик</span>
          учит
          <span class="g-color--water">Советчика</span>
          превращать идеи в реальные результаты.
        </UiText>

        <UiText>
          <span class="g-color--water">Советчик</span>
          показывает
          <span class="g-color--air">Критику</span>
          , что время, потраченное на установление отношений, окупается в
          будущем.
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
