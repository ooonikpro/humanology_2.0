<script setup lang="ts">
import { computed } from "vue";
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import UiDismissibleInfo from "@shared/ui/UiDismissibleInfo.vue";
import { OpenShareDialog } from "@features/open-share-dialog";
import UiBadge from "@shared/ui/UiBadge.vue";

defineOptions({ name: "TestsPage" });
definePageMeta({ key: 'tests' });

const route = useRoute();
const isRoot = computed(() => route.path === "/tests");
</script>

<template>
  <div class="page g-page">
    <PageHeaderWidget v-if="isRoot" iconName="atom" title="Тесты" />

    <UiDismissibleInfo v-if="isRoot" storage-key="tests-precision-info">
      <template #title>
        <UiText preset="large" color="black">О точности тестов</UiText>
      </template>
      <UiText preset="body" color="black">
        Тест — не приговор. Ответы зависят от контекста и самооценки. Используйте
        результат как гипотезу, а не ярлык. Сверяйте выводы с наблюдениями и
        независимым мнением.
      </UiText>
    </UiDismissibleInfo>

    <!-- separator removed by request -->

    <div v-if="isRoot" class="tests-intro">
      <UiText preset="body" color="black">
        Наблюдения за поведением, внешностью, речью и невербальными сигналами являются ключевыми факторами, которые следует рассматривать как приоритетные перед любыми тестовыми методиками.
      </UiText>
      <UiText preset="body" color="black">
        Даже опытные профессионалы допускают ошибки в типизации. Наиболее надежный подход – систематическое комбинирование различных диагностических методов с последующей сверкой результатов у независимых экспертов.
      </UiText>
      <UiText preset="large" color="accent">
        Максимальную достоверность обеспечивает комплексное применение разнообразных методик в сочетании с независимым определением типа несколькими квалифицированными специалистами.
      </UiText>
    </div>

    <hr v-if="isRoot" />

    <div v-if="isRoot" class="test-card test-card--ai">
      <div class="test-card__header">
        <UiText preset="subtitle" color="black" class="test-card__title">ИИ‑бот: определение типа</UiText>
        <div class="test-card__badges test-card__badges--header">
          <UiBadge bg="grey" color="black">Скоро</UiBadge>
        </div>
      </div>
      <UiText preset="body" color="black" class="test-card__description">
        Определяет тип по фото, голосу и телосложению: выделяет признаки, оценивает вероятности по дихотомиям и формирует предполагаемый тип с пояснениями.
      </UiText>
    </div>

    <hr v-if="isRoot" />

    <div v-if="isRoot" class="tests-list">
      <NuxtLink to="/tests/meged-ovcharova" class="test-card">
        <div class="test-card__header">
          <UiText preset="subtitle" color="black" class="test-card__title">Мегедь‑Овчарова</UiText>
          <div class="test-card__badges test-card__badges--header">
            <div class="badge">
              <UiSvg name="document" color="black" size="16" />
              <UiText preset="small" color="black">4 вопроса</UiText>
            </div>
            <div class="badge">
              <UiSvg name="clock" color="black" size="16" />
              <UiText preset="small" color="black">~3 минуты</UiText>
            </div>
          </div>
        </div>
          <UiText preset="body" color="black" class="test-card__description">
          Экспресс-диагностика по четырем ключевым дихотомиям. Быстро определяет базовые предпочтения личности через контрастные формулировки.
        </UiText>
        <div class="test-card__footer">
          <div class="test-card__actions">
            <UiButton as="span" variant="white" class="test-card__share" aria-label="Поделиться тестом Мегедь-Овчарова">
              <OpenShareDialog color="black" size="20" />
            </UiButton>
            <UiButton variant="white" class="test-card__button test-card__button--large">Пройти тест</UiButton>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/tests/vorobiev" class="test-card">
        <div class="test-card__header">
          <UiText preset="subtitle" color="black" class="test-card__title">Воробьева</UiText>
          <div class="test-card__badges test-card__badges--header">
            <div class="badge">
              <UiSvg name="document" color="black" size="16" />
              <UiText preset="small" color="black">28 пар слов</UiText>
            </div>
            <div class="badge">
              <UiSvg name="clock" color="black" size="16" />
              <UiText preset="small" color="black">~5 минут</UiText>
            </div>
          </div>
        </div>
        <UiText preset="body" color="black" class="test-card__description">
          Метод словесных пар: 28 пар слов для уточнения полюсов дихотомий. Эффективно фильтрует случайные ответы и подтверждает устойчивые тенденции.
        </UiText>
        <div class="test-card__footer">
          <div class="test-card__actions">
            <UiButton as="span" variant="white" class="test-card__share" aria-label="Поделиться тестом Воробьева">
              <OpenShareDialog color="black" size="20" />
            </UiButton>
            <UiButton variant="white" class="test-card__button test-card__button--large">Пройти тест</UiButton>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/tests/filatova" class="test-card">
        <div class="test-card__header">
          <UiText preset="subtitle" color="black" class="test-card__title">Филатова</UiText>
          <div class="test-card__badges test-card__badges--header">
            <div class="badge">
              <UiSvg name="document" color="black" size="16" />
              <UiText preset="small" color="black">40 вопросов</UiText>
            </div>
            <div class="badge">
              <UiSvg name="clock" color="black" size="16" />
              <UiText preset="small" color="black">~10 минут</UiText>
            </div>
          </div>
        </div>
          <UiText preset="body" color="black" class="test-card__description">
          Парные утверждения о повседневных привычках и поведении. Формирует четкий профиль по четырем основным дихотомиям Юнга.
        </UiText>
        <div class="test-card__footer">
          <div class="test-card__actions">
            <UiButton as="span" variant="white" class="test-card__share" aria-label="Поделиться тестом Филатовой">
              <OpenShareDialog color="black" size="20" />
            </UiButton>
            <UiButton variant="white" class="test-card__button test-card__button--large">Пройти тест</UiButton>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/tests/keirsey" class="test-card">
        <div class="test-card__header">
          <UiText preset="subtitle" color="black" class="test-card__title">Кейрси</UiText>
          <div class="test-card__badges test-card__badges--header">
            <div class="badge">
              <UiSvg name="document" color="black" size="16" />
              <UiText preset="small" color="black">70 вопросов</UiText>
            </div>
            <div class="badge">
              <UiSvg name="clock" color="black" size="16" />
              <UiText preset="small" color="black">~15 минут</UiText>
            </div>
          </div>
        </div>
          <UiText preset="body" color="black" class="test-card__description">
          Классический опросник по четырем шкалам MBTI. Предоставляет глубокую и объемную картину личностных предпочтений и склонностей.
        </UiText>
        <div class="test-card__footer">
          <div class="test-card__actions">
            <UiButton as="span" variant="white" class="test-card__share" aria-label="Поделиться тестом Кейрси">
              <OpenShareDialog color="black" size="20" />
            </UiButton>
            <UiButton variant="white" class="test-card__button test-card__button--large">Пройти тест</UiButton>
          </div>
        </div>
      </NuxtLink>
    </div>

    <NuxtPage v-else />
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

/* info-block moved to UiDismissibleInfo component */

.tests-intro {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 8px;
}

.ai-bot-promo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid rgba(colors.$grey, 0.3);
  border-radius: 4px;
  background: colors.$grey;
  margin-bottom: 12px;

  &__header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  &__tags { display: flex; gap: 8px; }
  &__button { align-self: stretch; background: colors.$white !important; color: colors.$black !important; border: 1px solid rgba(colors.$black, 0.1) !important; border-radius: 12px !important; }
}

.tests-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.test-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgba(colors.$grey, 0.3);
  background-color: colors.$grey;
  text-decoration: none;
  color: inherit;
  text-align: left;
  cursor: default;

  &__title { 
    font-weight: 500; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &__subtitle {
    color: rgba(colors.$black, 0.7);
  }
  
  &__description { margin-top: 8px; line-height: 128%; }

  &__header { display: flex; align-items: center; gap: 8px; justify-content: space-between; }

  &__title { flex: 1 1 auto; }

  &__subtitle { text-align: left; display: block; margin: 0; }
  &__description { text-align: left; }
  &__action { text-align: left; }

  &__footer {
    display: block;
    align-items: center;
    margin-top: 8px;
    gap: 8px;
  }

  &__badges { display: flex; gap: 8px; flex-wrap: nowrap; min-width: 0; }

  &__footer-left { justify-self: start; }
  &__button { width: 100%; }
  &__button--large { width: 100%; }

  &__button {
    min-width: 120px;
    background-color: colors.$accent !important;
    color: colors.$white !important;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 4px;
    background: colors.$white;
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
  }
  &__badges--header { margin-left: auto; }

  &__actions { display: grid; grid-template-columns: 44px 1fr; gap: 8px; align-items: center; }
  &__share { width: 44px; height: 44px; padding: 0; border-radius: 12px; background: colors.$white; border: 1px solid rgba(colors.$black, 0.1); display: inline-flex; align-items: center; justify-content: center; }

  .cta {
    padding: 8px 12px;
    border-radius: 4px;
    background: colors.$accent;
  }

  .cta--disabled {
    background: #a0a0a0;
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
    background-color: rgba(colors.$black, 0.05);
    box-shadow: none;
    
     &:hover {
      transform: none;
     }
  }
}

.test-card--ai {
  background-color: transparent;
  border: 1px solid rgba(colors.$black, 0.15);
}
</style>
