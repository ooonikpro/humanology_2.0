<script setup lang="ts">
import { ref, computed } from 'vue'
import { KEIRSEY } from '@entities/sociotypes/config/tests'
import { KEIRSEY_KEYS, determineSociotype } from '@entities/sociotypes/config/testKeys'
import { SociotypeCard, SociotypeCardHeader, SociotypeProvider, sociotypeModel } from '@entities/sociotypes'
import SociotypesCardGroupsAndQuadrasWidget from '@widgets/sociotypes/ui/SociotypesCardGroupsAndQuadrasWidget.vue'
import TestProgressBar from '@widgets/tests/ui/TestProgressBar.vue'
import TestDichotomyScales from '@widgets/tests/ui/TestDichotomyScales.vue'
import UiButton from '@shared/ui/UiButton.vue'
import type { SociotypeIdType } from '@types'

defineOptions({ name: 'KeirseyTestPage' })
definePageMeta({ key: 'tests-keirsey' })

type AnswersRecord = Record<number, number>

const currentQuestion = ref(0)
const answers = ref<AnswersRecord>({})
const isCompleted = ref(false)
const result = ref<string | null>(null)

const questions = KEIRSEY

const progress = computed(() => Math.round(((currentQuestion.value + 1) / questions.length) * 100))
const currentQuestionData = computed(() => questions[currentQuestion.value])
const canGoNext = computed(() => answers.value[currentQuestionData.value?.id] !== undefined)

function selectAnswer(value: number) {
  answers.value[currentQuestionData.value.id] = value
}

function nextQuestion() {
  if (currentQuestion.value < questions.length - 1) currentQuestion.value++
  else completeTest()
}

function previousQuestion() {
  if (currentQuestion.value > 0) currentQuestion.value--
}

function completeTest() {
  const tally = { rational: 0, logic: 0, sensing: 0, extraversion: 0 }
  for (const [idStr, answer] of Object.entries(answers.value)) {
    const id = Number(idStr)
    const map = KEIRSEY_KEYS[id as keyof typeof KEIRSEY_KEYS]
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

const resultColor = computed(() => (resultQuadra.value ? getQuadraColor(resultQuadra.value) : '#ffffff'))

function getScaleTally() {
  const tally = { rational: 0, logic: 0, sensing: 0, extraversion: 0 }
  for (const [idStr, answer] of Object.entries(answers.value)) {
    const id = Number(idStr)
    const map = KEIRSEY_KEYS[id as keyof typeof KEIRSEY_KEYS]
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

function goToTests() { navigateTo('/tests') }
</script>

<template>
  <div class="page g-page">
    <div v-if="!isCompleted" class="test-content">
      <div class="test-header">
        <UiText preset="subtitle" color="black">Тест Кейрси</UiText>
        <UiText preset="small" color="black">{{ currentQuestion + 1 }} из {{ questions.length }}</UiText>
      </div>

      <div class="questions-container">
        <TestProgressBar :percent="progress" :color="resultQuadra ? getQuadraColor(resultQuadra) : '#000000'" />

        <div class="question-title">
          <UiText preset="large" color="black">{{ currentQuestionData.question }}</UiText>
        </div>

        <div class="answers">
          <button
            v-for="(answer, index) in currentQuestionData.answers"
            :key="index"
            :class="{ 'answer-button--selected': answers[currentQuestionData.id] === index }"
            class="answer-button"
            @click="selectAnswer(index)"
          >
            <div class="answer-content">
              <div class="answer-header">
                <div class="answer-radio">
                  <div :class="{ 'radio--selected': answers[currentQuestionData.id] === index }" class="radio"></div>
                </div>
                <UiText preset="small" color="inherit" class="variant-label">Вариант {{ index === 0 ? 'А' : 'Б' }}</UiText>
              </div>
              <div class="answer-divider"></div>
              <div class="answer-text">
                <UiText preset="body" color="black">{{ answer }}</UiText>
              </div>
            </div>
          </button>
        </div>

        <div class="test-navigation">
          <UiButton v-if="currentQuestion > 0" variant="secondary" class="nav-button" @click="previousQuestion">Назад</UiButton>
          <UiButton v-else variant="secondary" class="nav-button" @click="goToTests">К тестам</UiButton>
          <UiButton variant="black" class="nav-button" :disabled="!canGoNext" @click="nextQuestion">{{ currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее' }}</UiButton>
        </div>
      </div>
    </div>

    <div v-else class="test-content">
      <div class="test-header">
        <UiText preset="subtitle" color="black">Тест Кейрси</UiText>
        <UiText preset="small" color="black">Завершен</UiText>
      </div>

      <div class="questions-container">
        <TestProgressBar :percent="100" :color="resultQuadra ? getQuadraColor(resultQuadra) : '#000000'" />

        <div v-if="result" class="sociotype-card-container">
          <div class="sociotype-card-wrapper">
            <div class="sociotype-card-inner">
              <UiText preset="body" color="white" class="sociotype-description">Судя по тесту ваш социотип…</UiText>
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

              <div class="scales-container">
                <TestDichotomyScales :tally="getScaleTally()" :max-per-pair="10" :color="resultColor" />
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
.question-title { margin-top: 0; }
.answers { display: flex; flex-direction: column; gap: 12px; }
.answer-button { padding: 12px; background-color: colors.$white; border: 1px solid rgba(colors.$grey, 0.3); border-radius: 4px; text-align: left; cursor: pointer; transition: border-color 0.2s ease; display: flex; flex-direction: column; gap: 8px; align-items: stretch; }
.answer-button:hover { border-color: rgba(colors.$black, 0.5); }
.answer-button--selected { background-color: colors.$white; border-color: colors.$black; border-width: 1px; }
.answer-content { display: flex; flex-direction: column; gap: 8px; }
.answer-header { display: flex; align-items: center; gap: 8px; justify-content: flex-start; }
.variant-label { color: colors.$dark-grey; transition: color 0.2s ease; }
.answer-divider { height: 1px; background-color: colors.$grey; margin: 4px 0; width: 100%; }
.answer-text { display: flex; flex-direction: column; gap: 8px; }
.answer-radio { width: 20px; height: 20px; border: 2px solid #ccc; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.radio { width: 8px; height: 8px; background-color: transparent; border-radius: 50%; transition: background-color 0.2s ease; }
.radio--selected { background-color: colors.$black; }
.answer-button--selected .variant-label { color: colors.$black; }
.test-navigation { display: flex; justify-content: space-between; gap: 12px; }
.nav-button { width: 50%; }
.sociotype-card-container { margin: 0; max-width: 100%; display: flex; justify-content: center; }
.sociotype-card-wrapper { background-color: colors.$black; border-radius: 4px; padding: 64px 32px; width: 100%; display: flex; flex-direction: column; gap: 24px; }
.sociotype-card-inner { width: 100%; max-width: 280px; margin: 0 auto; }
.sociotype-description { text-align: left; margin-bottom: 12px; color: colors.$white; }
.scales-container { margin-top: 24px; }
</style>
