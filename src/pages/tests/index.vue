<script setup lang="ts">
import { DismissibleInfo } from "@features/dismissible-info";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { TestCardWidget, TestCardActions, TestCardBadge } from "@widgets/tests";
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget iconName="atom" title="Тесты" />

    <DismissibleInfo storage-key="tests-precision-info">
      <UiText preset="large" color="black">О точности тестов</UiText>
      <UiText preset="body" color="black">
        Тест — не приговор. Ответы зависят от контекста и самооценки.
        Используйте результат как гипотезу, а не ярлык. Сверяйте выводы с
        наблюдениями и независимым мнением.
      </UiText>
    </DismissibleInfo>

    <div class="tests-intro">
      <UiText preset="body" color="black">
        Наблюдения за поведением, внешностью, речью и невербальными сигналами
        являются ключевыми факторами, которые следует рассматривать как
        приоритетные перед любыми тестовыми методиками.
      </UiText>
      <UiText preset="body" color="black">
        Даже опытные профессионалы допускают ошибки в типизации. Наиболее
        надежный подход – систематическое комбинирование различных
        диагностических методов с последующей сверкой результатов у независимых
        экспертов.
      </UiText>
      <UiText preset="large" color="accent">
        Максимальную достоверность обеспечивает комплексное применение
        разнообразных методик в сочетании с независимым определением типа
        несколькими квалифицированными специалистами.
      </UiText>
    </div>

    <hr />

    <TestCardWidget
      test-title="ИИ‑бот: определение типа"
      class="test-card--ai"
      is-disabled
    >
      <template #badges>
        <UiBadge bg="grey" color="black">Скоро</UiBadge>
      </template>
      <template #description>
        Определяет тип по фото, голосу и телосложению: выделяет признаки,
        оценивает вероятности по дихотомиям и формирует предполагаемый тип с
        пояснениями.
      </template>
    </TestCardWidget>

    <hr />

    <div class="tests-list">
      <TestCardWidget to="/tests/meged-ovcharova" test-title="Мегедь-Овчарова">
        <template #badges>
          <TestCardBadge icon-name="document" label="4 вопроса" />
          <TestCardBadge icon-name="clock" label="~3 минуты" />
        </template>
        <template #description>
          Экспресс-диагностика по четырем ключевым дихотомиям. Быстро определяет
          базовые предпочтения личности через контрастные формулировки.
        </template>
        <template #footer>
          <TestCardActions
            share-aria-label="Поделиться тестом Мегедь-Овчарова"
          />
        </template>
      </TestCardWidget>

      <TestCardWidget to="/tests/vorobiev" test-title="Воробьева">
        <template #badges>
          <TestCardBadge icon-name="document" label="28 пар слов" />
          <TestCardBadge icon-name="clock" label="~5 минут" />
        </template>
        <template #description>
          Метод словесных пар: 28 пар слов для уточнения полюсов дихотомий.
          Эффективно фильтрует случайные ответы и подтверждает устойчивые
          тенденции.
        </template>
        <template #footer>
          <TestCardActions share-aria-label="Поделиться тестом Воробьева" />
        </template>
      </TestCardWidget>

      <TestCardWidget to="/tests/filatova" test-title="Филатова">
        <template #badges>
          <TestCardBadge icon-name="document" label="40 вопросов" />
          <TestCardBadge icon-name="clock" label="~10 минут" />
        </template>
        <template #description>
          Парные утверждения о повседневных привычках и поведении. Формирует
          четкий профиль по четырем основным дихотомиям Юнга.
        </template>
        <template #footer>
          <TestCardActions share-aria-label="Поделиться тестом Филатова" />
        </template>
      </TestCardWidget>

      <TestCardWidget to="/tests/keirsey" test-title="Кейрси">
        <template #badges>
          <TestCardBadge icon-name="document" label="70 вопросов" />
          <TestCardBadge icon-name="clock" label="~15 минут" />
        </template>
        <template #description>
          Классический опросник по четырем шкалам MBTI. Предоставляет глубокую и
          объемную картину личностных предпочтений и склонностей.
        </template>
        <template #footer>
          <TestCardActions share-aria-label="Поделиться тестом Кейрси" />
        </template>
      </TestCardWidget>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.page {
  hr {
    margin: 12px 0;
    opacity: 0.2;
    background-color: colors.$accent;
  }
}

.tests-intro {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 8px;
}

.tests-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.test-card--ai {
  background-color: transparent;
  border: 1px solid rgba(colors.$black, 0.15);
}
</style>
