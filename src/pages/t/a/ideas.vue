<script setup lang="ts">
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { SociotypesCardMiniWidget } from "@widgets/sociotypes";

</script>

<template>
  <div class="page">
    <PageHeaderWidget iconName="aspect_ideas" iconSize="80" title="Идеи" subtitle="Ne — Свойства изменений" />

    <UiText>
      Экстравертная часть аспекта интуиция. Называется так же «интуиция возможностей», или черная интуиция».
    </UiText>

    <UiText preset="subtitle" color="accent">
      Несёт информацию обо всех перспективах, возможностях в разных ситуациях.
    </UiText>

    <UiText>
      Интуиция возможностей позволяет человеку чувствовать потенциал объектов, возможности себя и других людей, улавливать суть различных процессов.
    </UiText>

    <UiList iconName="chevron-right" iconColor="accent" iconSize="16">

      <UiListItem>
        Способность абстрагировать внимание от внешних проявлений предметов, схватывая их содержание и выделяя суть.
      </UiListItem>

      <UiListItem>
        Восприятие внутренних качеств и назначения объектов. Умение отделять перспективное от неперспективного, представлять результат.
      </UiListItem>

      <UiListItem>
        Оценка качеств своего характера и собственных возможностей.
      </UiListItem>

      <UiListItem>
        Изучение и сравнение характеров и способностей других людей.
      </UiListItem>

      <UiListItem>
        Способность противопоставлять и отстаивать свои идеи и взгляды.
      </UiListItem>

    </UiList>

    <hr />

    <UiText preset="subtitle" color="accent">Знаки аспекта</UiText>

    <div class="sign-block">

      <div class="sign-title">
        <UiSvg name="extensive" color="fire" size="24" />
        <UiText preset="large" color="fire">
          Экстенсивная
        </UiText>
      </div>

      <UiText>
        Максимизация возможностей — перспективность, поиск новых путей, максимизация возможностей.
      </UiText>

      <UiText color="accent">
        Перспективы, возможности, положительный потенциал, суть, сущность, пришит, новые идеи, выдвижение гипотез, теория, проницательность, интерес, оригинальность, необычность, фантастичность, вера.
      </UiText>

    </div>

    <div class="sign-block">

      <div class="sign-title">
        <UiSvg name="intensive" color="water" size="24" />
        <UiText preset="large" color="water">
          Интенсивная
        </UiText>
      </div>

      <UiText>
        Минимизация невозможного — альтернативность, скрытые таланты, утаиваемые влечения. 
      </UiText>

      <UiText color="accent">
        Бесперспективность, альтернатива, отрицательный потенциал, отсутствие сути, бессмысленность, парадокс, забытое старое, проницательность, серость, заурядность, скука, подавленные возможности, реальность, неверие, сенсация.
      </UiText>
    </div>

    <hr />
    
    <UiText preset="subtitle" color="accent">
      Эксперты интуиции возможностей
    </UiText>

      <SociotypesCardMiniWidget sociotype-id="ENTP" />

      <UiText>
        <span class="g-color--water">Новатор</span> — эксперт <span class="g-color--fire">экстенсивных Идей</span>, направлен на сбор интересной информации, перспективных идей и многообещающих теорий на окружающей его территории, причем эти знания отличаются большой проработанностью, многочисленными подробностями.
      </UiText>

      <SociotypesCardMiniWidget sociotype-id="ENFP" gender="female" />

      <UiText>
        <span class="g-color--water">Советчик</span> — эксперт <span class="g-color--water">интенсивных Идей</span>, уходит от неинтересной информации, хорошо оценивает глубоко спрятанные способности ранее незнакомых людей и улавливает перспективу в целом, альтернативно, по-крупному.
      </UiText>
          
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
  padding-right: 12px;

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.2;
    background-color: colors.$accent;
  }

  .sign-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sign-title {
    display: flex;
    align-items: end;
    gap: 4px;
  }
}

a {
  text-decoration: underline;
}
</style>
