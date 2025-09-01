<script setup lang="ts">
import { TestsBackButton, TestsNextButton } from "@features/tests";
import { useInjectAppRoutes } from "@shared/hooks/useAppRoutes";
import type { SociotypeIdType } from "@types";

const props = defineProps<{
  isCompleted: boolean;
  result: SociotypeIdType | null;
  questionAmount: number;
  isNextDisabled: boolean;
}>();

const emits = defineEmits<{
  restartTest: [];
  completeTest: [];
  exitTest: [];
}>();

const currentQuestionIndex = defineModel<number>({
  required: true,
});

const appRoutes = useInjectAppRoutes();
const toSociotype = computed(() =>
  props.result ? appRoutes.sociotypeCard(props.result) : appRoutes.sociotypes,
);
</script>

<template>
  <div class="test-navigation">
    <template v-if="!isCompleted">
      <TestsBackButton
        class="test-navigation__button"
        v-model="currentQuestionIndex"
        @exit-tests="emits('exitTest')"
      />
      <TestsNextButton
        :question-amount="props.questionAmount"
        :disabled="isNextDisabled"
        class="test-navigation__button"
        v-model="currentQuestionIndex"
        @complete-test="emits('completeTest')"
      />
    </template>
    <template v-else>
      <UiBlock v-slot="{ classes }" variant="secondary">
        <button
          :class="classes"
          class="test-navigation__button"
          @click="emits('restartTest')"
        >
          <UiText preset="large" force-tag="span" color="inherit">
            Пройти заново
          </UiText>
        </button>
      </UiBlock>
      <UiBlock v-slot="{ classes }" variant="black">
        <NuxtLink
          :to="toSociotype"
          :class="classes"
          class="test-navigation__button"
        >
          <UiText preset="large" force-tag="span" color="inherit">
            К карточке социотипа
          </UiText>
        </NuxtLink>
      </UiBlock>
    </template>
  </div>
</template>

<style lang="scss">
.ui-block.test-navigation__button {
  white-space: nowrap;
  --basis: calc(50% - 6px);
  flex: 1 1 var(--basis);
}
</style>

<style lang="scss" scoped>
.test-navigation {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 12px;
}
</style>
