<script setup lang="ts">
import { ref, computed } from 'vue'
import { VOROBIEV } from '@entities/sociotypes/config/tests'
import { VOROBIEV_KEYS, determineSociotype } from '@entities/sociotypes/config/testKeys'
import { SociotypeCard, SociotypeCardHeader, SociotypeProvider, sociotypeModel } from '@entities/sociotypes'
import SociotypesCardGroupsAndQuadrasWidget from '@widgets/sociotypes/ui/SociotypesCardGroupsAndQuadrasWidget.vue'
import UiButton from '@shared/ui/UiButton.vue'
import TestProgressBar from '@widgets/tests/ui/TestProgressBar.vue'
import type { SociotypeIdType } from '@types'

defineOptions({ name: 'VorobievTestPage' })
definePageMeta({ key: 'tests-vorobiev' })

type AnswersRecord = Record<number, number>

const currentQuestion = ref(0)
const answers = ref<AnswersRecord>({})
const isCompleted = ref(false)
const result = ref<string | null>(null)

const questions = VOROBIEV

const progress = computed(() => Math.round(((currentQuestion.value + 1) / questions.length) * 100))
const currentQuestionData = computed(() => questions[currentQuestion.value])
const canGoNext = computed(() => answers.value[currentQuestionData.value?.id] !== undefined)

function selectAnswer(value: number) {
  answers.value[currentQuestionData.value.id] = value
}

function nextQuestion() {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
  } else {
    completeTest()
  }
}

function previousQuestion() {
  if (currentQuestion.value > 0) currentQuestion.value--
}

function completeTest() {
  const tally = { rational: 0, logic: 0, sensing: 0, extraversion: 0 }
  for (const [questionIdStr, answer] of Object.entries(answers.value)) {
    const id = Number(questionIdStr)
    const map = VOROBIEV_KEYS[id as keyof typeof VOROBIEV_KEYS]
    const key = map?.[answer as keyof typeof map]
    if (key === 'rational') tally.rational += 1
    else if (key === 'irrational') tally.rational -= 1
    else if (key === 'logic') tally.logic += 1
    else if (key === 'ethics') tally.logic -= 1
    else if (key === 'sensing') tally.sensing += 1
    else if (key === 'intuition') tally.sensing -= 1
    else if (key === 'extraversion') tally.extraversion += 1
    else if (key === 'introversion') tally.extraversion -= 1
  }

  result.value = determineSociotype(tally)
  isCompleted.value = true
}

function restartTest() {
  currentQuestion.value = 0
  answers.value = {}
  isCompleted.value = false
  result.value = null
}

function goToSociotype() {
  navigateTo(`/s/${result.value}`)
}

const resultQuadra = computed(() => {
  if (!result.value) return null
  return sociotypeModel.getSociotypeBy(result.value as SociotypeIdType).quadra
})

const getQuadraColor = (quadra: string | null) => {
  if (!quadra) return '#000000'
  switch (quadra) {
    case 'air': return '#bd62cb'
    case 'fire': return '#fa7c01'
    case 'water': return '#13a4d3'
    case 'earth': return '#7fb900'
    default: return '#000000'
  }
}

// Цвет результата для окраски шкал и активных подписей
const resultColor = computed(() => (resultQuadra.value ? getQuadraColor(resultQuadra.value) : '#ffffff'))

function getScaleTally() {
  const tally = { rational: 0, logic: 0, sensing: 0, extraversion: 0 }
  for (const [questionIdStr, answer] of Object.entries(answers.value)) {
    const id = Number(questionIdStr)
    const map = VOROBIEV_KEYS[id as keyof typeof VOROBIEV_KEYS]
    const key = map?.[answer as keyof typeof map]
    if (key === 'rational') tally.rational += 1
    else if (key === 'irrational') tally.rational -= 1
    else if (key === 'logic') tally.logic += 1
    else if (key === 'ethics') tally.logic -= 1
    else if (key === 'sensing') tally.sensing += 1
    else if (key === 'intuition') tally.sensing -= 1
    else if (key === 'extraversion') tally.extraversion += 1
    else if (key === 'introversion') tally.extraversion -= 1
  }
  return tally
}

function getScalePercentage(key: 'rational' | 'logic' | 'sensing' | 'extraversion') {
  const tally = getScaleTally()
  const value = tally[key]
  const max = 7 // во всех дихотомиях по 7 пар
  // Для половины шкалы максимум должен заполнять её полностью (100%)
  return Math.max(0, Math.min(100, (Math.abs(value) / max) * 100))
}

function getScaleValue(key: 'rational' | 'logic' | 'sensing' | 'extraversion') {
  const tally = getScaleTally()
  return tally[key]
}

function getScalePoints(key: 'rational' | 'logic' | 'sensing' | 'extraversion') {
  const tally = getScaleTally()
  return Math.abs(tally[key])
}

function getScaleLabelStyle(isActive: boolean) {
  return isActive ? { color: resultColor.value } : { opacity: 0.5 }
}
</script>

<template>
  <div class="page g-page">
    <div v-if="!isCompleted" class="test-content">
      <div class="test-header">
        <UiText preset="subtitle" color="black">Тест Воробьева</UiText>
        <UiText preset="small" color="black">{{ currentQuestion + 1 }} из {{ questions.length }}</UiText>
      </div>

      <div class="questions-container">
        <TestProgressBar :percent="progress" :color="resultQuadra ? getQuadraColor(resultQuadra) : '#000000'" />

        <div class="question-title">
          <UiText preset="large" color="black">Выберите одно слово из пары, ориентируясь на первое впечатление.</UiText>
        </div>

        <div class="answers">
          <button
            v-for="(option, index) in currentQuestionData.answers"
            :key="option.value"
            :class="{ 'answer-button--selected': answers[currentQuestionData.id] === option.value }"
            class="answer-button"
            @click="selectAnswer(option.value)"
          >
            <div class="answer-radio">
              <div :class="{ 'radio--selected': answers[currentQuestionData.id] === option.value }" class="radio"></div>
            </div>
            <div class="answer-text">
              <UiText preset="large" color="black">{{ option.label }}</UiText>
            </div>
          </button>
        </div>

        <div class="test-navigation">
          <UiButton v-if="currentQuestion > 0" variant="secondary" class="nav-button" @click="previousQuestion">Назад</UiButton>
          <UiButton v-else variant="secondary" class="nav-button" @click="navigateTo('/tests')">К тестам</UiButton>
          <UiButton variant="black" class="nav-button" :disabled="!canGoNext" @click="nextQuestion">{{ currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее' }}</UiButton>
        </div>
      </div>
    </div>

    <div v-else class="test-content">
      <div class="test-header">
        <UiText preset="subtitle" color="black">Тест Воробьева</UiText>
        <UiText preset="small" color="black">Завершен</UiText>
      </div>

      <div class="questions-container">
        <TestProgressBar :percent="100" :color="resultQuadra ? getQuadraColor(resultQuadra) : '#000000'" />
        
        <div v-if="result" class="sociotype-card-container">
          <div class="sociotype-card-wrapper">
            <div class="sociotype-card-inner">
              <UiText preset="body" color="white" class="sociotype-description">
                Судя по тесту ваш социотип…
              </UiText>
              <SociotypeProvider :id="result as SociotypeIdType">
                <template #default="{ data }">
                  <SociotypeCard :data="data" :gender="sociotypeModel.getGenderByYung(data.id)" mini>
                    <template #header>
                      <SociotypeCardHeader :data="data" mini />
                    </template>
                    <template #groups-and-quadras>
                      <SociotypesCardGroupsAndQuadrasWidget v-bind="data" />
                    </template>
                  </SociotypeCard>
                </template>
              </SociotypeProvider>

              <div class="test-scales">
                <div class="scale-item">
                  <div class="scale-labels">
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('logic') < 0)">
                      Этика<template v-if="getScaleValue('logic') < 0"><span class="scale-points"> +{{ getScalePoints('logic') }}</span></template>
                    </UiText>
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('logic') > 0)">
                      Логика<template v-if="getScaleValue('logic') > 0"><span class="scale-points"> +{{ getScalePoints('logic') }}</span></template>
                    </UiText>
                  </div>
                  <div class="scale-bar">
                    <div class="scale-half scale-half--left">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('logic')}%`, backgroundColor: resultColor }" v-if="getScaleValue('logic') < 0"></div>
                    </div>
                    <div class="scale-half scale-half--right">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('logic')}%`, backgroundColor: resultColor }" v-if="getScaleValue('logic') > 0"></div>
                    </div>
                  </div>
                </div>
                <div class="scale-item">
                  <div class="scale-labels">
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('sensing') > 0)">
                      Сенсорика<template v-if="getScaleValue('sensing') > 0"><span class="scale-points"> +{{ getScalePoints('sensing') }}</span></template>
                    </UiText>
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('sensing') < 0)">
                      Интуиция<template v-if="getScaleValue('sensing') < 0"><span class="scale-points"> +{{ getScalePoints('sensing') }}</span></template>
                    </UiText>
                  </div>
                  <div class="scale-bar">
                    <div class="scale-half scale-half--left">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('sensing')}%`, backgroundColor: resultColor }" v-if="getScaleValue('sensing') > 0"></div>
                    </div>
                    <div class="scale-half scale-half--right">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('sensing')}%`, backgroundColor: resultColor }" v-if="getScaleValue('sensing') < 0"></div>
                    </div>
                  </div>
                </div>
                <div class="scale-item">
                  <div class="scale-labels">
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('rational') > 0)">
                      Рационал<template v-if="getScaleValue('rational') > 0"><span class="scale-points"> +{{ getScalePoints('rational') }}</span></template>
                    </UiText>
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('rational') < 0)">
                      Иррационал<template v-if="getScaleValue('rational') < 0"><span class="scale-points"> +{{ getScalePoints('rational') }}</span></template>
                    </UiText>
                  </div>
                  <div class="scale-bar">
                    <div class="scale-half scale-half--left">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('rational')}%`, backgroundColor: resultColor }" v-if="getScaleValue('rational') > 0"></div>
                    </div>
                    <div class="scale-half scale-half--right">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('rational')}%`, backgroundColor: resultColor }" v-if="getScaleValue('rational') < 0"></div>
                    </div>
                  </div>
                </div>
                <div class="scale-item">
                  <div class="scale-labels">
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('extraversion') > 0)">
                      Экстратим<template v-if="getScaleValue('extraversion') > 0"><span class="scale-points"> +{{ getScalePoints('extraversion') }}</span></template>
                    </UiText>
                    <UiText preset="small" color="white" :style="getScaleLabelStyle(getScaleValue('extraversion') < 0)">
                      Интротим<template v-if="getScaleValue('extraversion') < 0"><span class="scale-points"> +{{ getScalePoints('extraversion') }}</span></template>
                    </UiText>
                  </div>
                  <div class="scale-bar">
                    <div class="scale-half scale-half--left">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('extraversion')}%`, backgroundColor: resultColor }" v-if="getScaleValue('extraversion') > 0"></div>
                    </div>
                    <div class="scale-half scale-half--right">
                      <div class="scale-fill" :style="{ width: `${getScalePercentage('extraversion')}%`, backgroundColor: resultColor }" v-if="getScaleValue('extraversion') < 0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="test-navigation">
          <UiButton variant="secondary" class="nav-button" @click="restartTest">Пройти заново</UiButton>
          <UiButton variant="black" class="nav-button" @click="goToSociotype">К карточке социотипа</UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.page { padding: 16px 0; }
.test-content { display: flex; flex-direction: column; gap: 12px; }
.test-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.questions-container { background-color: colors.$grey; padding: 16px; padding-top: 24px; border-radius: 4px; display: flex; flex-direction: column; gap: 12px; position: relative; }
.progress-bar { position: absolute; top: 0; left: 0; right: 0; height: 8px; background-color: #e0e0e0; border-radius: 2px 2px 0 0; overflow: hidden; }
.progress-fill { height: 100%; transition: width 0.3s ease; }
.question-title { margin-top: 0; }
.answers { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.answer-button { position: relative; aspect-ratio: 1 / 1; padding: 12px; background-color: colors.$white; border: 1px solid rgba(colors.$grey, 0.3); border-radius: 4px; cursor: pointer; transition: border-color 0.2s ease; display: flex; align-items: center; justify-content: center; }
.answer-button:hover { border-color: rgba(colors.$black, 0.5); }
.answer-button--selected { background-color: colors.$white; border-color: colors.$black; border-width: 1px; }
.answer-text { text-align: center; }
.answer-radio { position: absolute; top: 8px; left: 8px; width: 20px; height: 20px; border: 2px solid #ccc; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.radio { width: 8px; height: 8px; background-color: transparent; border-radius: 50%; transition: background-color 0.2s ease; }
.radio--selected { background-color: colors.$black; }
.test-navigation { display: flex; justify-content: space-between; gap: 12px; }
.nav-button { width: 50%; }
.sociotype-card-container { margin: 0; max-width: 100%; display: flex; justify-content: center; }
.sociotype-card-wrapper { background-color: colors.$black; border-radius: 4px; padding: 64px 32px; width: 100%; display: flex; flex-direction: column; gap: 24px; }
.sociotype-card-inner { width: 100%; max-width: 280px; margin: 0 auto; }
.sociotype-description { text-align: left; margin-bottom: 12px; color: colors.$white; }

/* scales (reuse simplified styling to match Meged page visually) */
.test-scales { display: flex; flex-direction: column; gap: 12px; width: 100%; margin-top: 24px; }
.scale-item { display: flex; flex-direction: column; gap: 4px; }
.scale-labels { display: flex; justify-content: space-between; width: 100%; }
.scale-bar { width: 100%; height: 8px; position: relative; display: grid; grid-template-columns: 1fr 1fr; column-gap: 4px; }
.scale-half { height: 100%; background-color: rgba(colors.$white, 0.2); border-radius: 2px; overflow: hidden; position: relative; }
.scale-half--left { border-top-right-radius: 0; border-bottom-right-radius: 0; }
.scale-half--right { border-top-left-radius: 0; border-bottom-left-radius: 0; }
.scale-fill { height: 100%; background-color: colors.$white; transition: width 0.3s ease; }
.scale-half--left .scale-fill { margin-left: auto; } /* заполнение слева направо визуально инвертируем, двигая начало к правому краю половины */
</style>



