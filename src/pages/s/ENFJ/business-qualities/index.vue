<template>
  <div class="text g-page">
    <section>
      <UiText preset="subtitle" color="accent">Сильные стороны</UiText>

      <UiText preset="large" color="role">
        Эмоционален, тонко чувствует настроение других людей.
      </UiText>

      <UiText>
        Умеет красиво выражать свои чувства: от возвышенных интонаций до тонкой
        иронии. Может увлечь людей своими эмоциями, повести за собой.
      </UiText>

      <UiText>
        Тревожится об опасности, которая таится в развитии ситуации, умеет
        предпринять необходимые меры, чтобы её избежать.
      </UiText>

      <UiText preset="large" color="role">
        Предусмотрителен и дальновиден, умеет правильно распределить мероприятия
        во времени.
      </UiText>

      <UiText>
        Верит в неограниченные возможности и способности человека.
      </UiText>

      <UiText>
        Старается понять мотивы поведения людей, стоит на моральных позициях
        воспитателя и наставника.
      </UiText>

      <UiText>
        Пунктуален, имеет развитое чувство ответственности. Обычно имеет широкие
        гуманитарные интересы.
      </UiText>
    </section>

    <section>
      <UiText preset="subtitle" color="accent">Проблемы</UiText>

      <UiText>Ему с трудом дается внутреннее равновесие.</UiText>

      <UiText>
        Склонен излишне драматизировать события. Самолюбив, раним, настроен на
        корректное, вежливое отношение к себе, долго помнит обиды.
      </UiText>

      <UiText preset="large" color="role">
        Не любит, когда его прерывают, торопят. Остро переживает свои неудачи и
        разочарования.
      </UiText>

      <UiText>
        Категоричен в суждениях и выводах, не склонен к компромиссам. По натуре
        аристократичен, может допускать крайности в одежде, самовыражаясь таким
        образом — экстравагантность или, наоборот, элементы небрежности.
      </UiText>

      <UiText preset="large" color="role">
        Не любит делать много дел сразу. Недоверчив к непроверенной информации.
      </UiText>

      <UiText>
        Критику своей внешности и привычек в быту переносит болезненно.
      </UiText>

      <UiText>
        Может допускать небрежность в оформлении деловой документации.
      </UiText>
    </section>

    <section>
      <UiText preset="subtitle" color="accent">
        Нельзя требовать и ожидать
      </UiText>

      <UiList iconName="chevron-right" iconColor="accent" iconSize="16">
        <UiListItem>Неизменного оптимизма.</UiListItem>

        <UiListItem>Быстрой конкретной отдачи в делах.</UiListItem>

        <UiListItem>Безвозмездного альтруизма.</UiListItem>

        <UiListItem>
          Трезвого, объективного, безэмоционального взгляда на вещи.
        </UiListItem>

        <UiListItem>Умения достоверно анализировать ситуацию.</UiListItem>

        <UiListItem>Демократичности и простоты в общении.</UiListItem>
      </UiList>
    </section>

    <section>
      <UiText preset="subtitle" color="accent">
        Подходящие виды деятельности
      </UiText>

      <UiText>
        Гуманитарная сфера, где нужно пропагандировать какую-либо идею,
        мировоззрение, религию.
      </UiText>

      <UiText>
        Может быть хорошим агентом по сбыту или страхованию, где надо
        эмоционально вовлечь клиента.
      </UiText>

      <UiText>
        Может хорошо работать в сфере искусства, где нужно играть, выражать
        эмоции — театр, эстрада, ораторское искусство.
      </UiText>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.text {
  display: flex;
  flex-direction: column;
  gap: 24px;

  section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: solid 1px colors.$grey;
  }
}
</style>
