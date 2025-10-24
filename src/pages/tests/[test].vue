<script setup lang="ts">
import {
  testsModel,
  TestsAnswerCard,
  TestsProgressBar,
  isTest,
  normalizeTestRouteParam,
  useTestConfig,
  TestsBigAnswerLabel,
} from "@features/tests";
import { sociotypeModel } from "@entities/sociotypes";
import { TestHeader, TestNavigation, TestResult } from "@widgets/tests";
import type {
  AnswerCardType,
  DichotomyType,
  SociotypeIdType,
  TallyType,
  TestType,
} from "@types";
import { useInjectAppRoutes } from "@shared/hooks/useAppRoutes";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

const validateTestParam = (route: RouteLocationNormalizedLoadedGeneric) => {
  const test = route.params.test;
  return typeof test === "string" && isTest(test);
};

definePageMeta({
  validate: validateTestParam,
});

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;
const route = useRoute();

const testParam = computed<TestNameType>(() => {
  return normalizeTestRouteParam(route.params.test as string) as TestNameType;
});

const { questions, questionAmount, maxPerScalePair, testData } =
  useTestConfig(testParam);

const currentQuestionIndex = ref(0);
const currentQuestionData = computed(() => {
  return questions.value![currentQuestionIndex.value];
});
const currentQuestionLabel = computed(() => {
  return testData.value.question === "question"
    ? currentQuestionData.value.question!
    : testData.value.question;
});

const { isAnswerCardMini, miniProp, answerLabelProp, variantLabelProp } =
  useAnswerCard(() => testData.value.answerCardType);

const {
  answers,
  isAnswersFilled,
  currentSelectedVariant,
  isCurrentSelectedVariantEmpty,
  toDefaultAnswers,
} = useAnswers(questions.value!, currentQuestionIndex);

const tallyScale = computed<TallyType>(() => {
  if (!isAnswersFilled.value) {
    return {
      rational: 0,
      logic: 0,
      sensory: 0,
      extravert: 0,
    };
  }

  return testsModel.calculateTallyByAnswers(answers.value as DichotomyType[]);
});

const { result, resultQuadra } = useResult(isAnswersFilled, tallyScale);

const appRoutes = useInjectAppRoutes();
const goToTests = () => {
  navigateTo(appRoutes.tests);
};

// isCompleted
const isCompleted = ref(false);
const completeTest = () => {
  isCompleted.value = isAnswersFilled.value;
};

const restartTest = () => {
  currentQuestionIndex.value = 0;
  toDefaultAnswers();
  isCompleted.value = false;
};

// inline composables
function useAnswers(
  questions: TestType<DichotomyType>[],
  questionIndex: MaybeRefOrGetter<number>,
) {
  const answers = ref(testsModel.createAnswers(questions));
  const isAnswersFilled = computed(() =>
    testsModel.isAllAnswered(answers.value),
  );

  const currentSelectedVariant = computed({
    get() {
      const normalizedIndex = toValue(questionIndex);
      return answers.value[normalizedIndex];
    },
    set(value) {
      const normalizedIndex = toValue(questionIndex);
      answers.value[normalizedIndex] = value;
    },
  });

  const isCurrentSelectedVariantEmpty = computed(
    () => !currentSelectedVariant.value,
  );

  return {
    answers,
    isAnswersFilled,
    currentSelectedVariant,
    isCurrentSelectedVariantEmpty,
    toDefaultAnswers: () => {
      answers.value = testsModel.createAnswers(questions);
    },
  };
}

function useResult(
  isAnswersFilled: MaybeRefOrGetter<boolean>,
  tallyScale: MaybeRefOrGetter<TallyType>,
) {
  const result = computed<SociotypeIdType | null>(() => {
    return toValue(isAnswersFilled)
      ? testsModel.determineSociotype(toValue(tallyScale))
      : null;
  });

  const resultQuadra = computed(() => {
    return result.value && sociotypeModel.getSociotypeBy(result.value).quadra;
  });

  return {
    result,
    resultQuadra,
  };
}

function useAnswerCard(answerCardType: MaybeRefOrGetter<AnswerCardType>) {
  const isAnswerCardMini = computed(() => {
    return toValue(answerCardType) === "mini";
  });

  const miniProp = computed(() => {
    return isAnswerCardMini.value ? "mini" : "";
  });

  const variantLabelProp = computed(() => {
    return !isAnswerCardMini.value ? "variantLabel" : "";
  });

  const answerLabelProp = computed(() => {
    return toValue(answerCardType) !== "big-label" ? "answerLabel" : "";
  });

  return {
    isAnswerCardMini,
    miniProp,
    variantLabelProp,
    answerLabelProp,
  };
}
</script>

<template>
  <div class="test-page g-page">
    <TestHeader
      :current-question-index="currentQuestionIndex"
      :question-amount="questionAmount"
      :is-completed="isCompleted"
      :title="testData.title"
      class="test-page__header"
    />

    <div
      :class="{ 'questions-container--result': isCompleted }"
      class="questions-container"
    >
      <TestsProgressBar
        :result-quadra="resultQuadra"
        :current-question-index="currentQuestionIndex"
        :question-amount="questionAmount"
        :class="{ 'questions-container__progress-bar--result': isCompleted }"
        class="questions-container__progress-bar"
        fallback-color="black"
      />

      <template v-if="!isCompleted">
        <UiText preset="large" color="black">
          {{ currentQuestionLabel }}
        </UiText>

        <div :class="{ 'answers--mini': isAnswerCardMini }" class="answers">
          <TestsAnswerCard
            v-for="(answer, index) in currentQuestionData.answers"
            :key="currentQuestionData.id + answer.label"
            :variant="answer.variant"
            :[answerLabelProp]="answer.label"
            :question-id="currentQuestionData.id"
            :[variantLabelProp]="`Вариант ${index === 0 ? 'А' : 'Б'}`"
            :[miniProp]="true"
            class="answers__answer"
            v-model="currentSelectedVariant"
          >
            <template #answerLabel>
              <TestsBigAnswerLabel
                v-if="!answerLabelProp"
                :label="answer.label"
              />
            </template>
          </TestsAnswerCard>
        </div>
      </template>

      <TestResult
        v-else-if="result && isCompleted"
        :result="result"
        :max-per-pair="maxPerScalePair"
        :tallyScale="tallyScale"
      />

      <TestNavigation
        :is-completed="isCompleted"
        :result="result"
        :is-next-disabled="isCurrentSelectedVariantEmpty"
        :question-amount="questionAmount"
        v-model="currentQuestionIndex"
        @complete-test="completeTest"
        @restart-test="restartTest"
        @exit-test="goToTests"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.test-page {
  padding: 16px 0;
  gap: 12px;
}

.test-page__header {
  margin-bottom: 8px;
}
.questions-container {
  padding: 16px;

  display: flex;
  flex-flow: column nowrap;
  gap: 12px;

  position: relative;

  background-color: colors.$grey;
  border-radius: 4px;

  &--result {
    padding-top: 24px;
  }

  &__progress-bar {
    &--result {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &--mini {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  &--mini &__answer {
    aspect-ratio: 1/1;
  }
}

.sociotype-card {
  &__body {
    margin-top: 12px;
  }
}

.sociotype-card-container {
  margin: 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
}
</style>
