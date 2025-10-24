<script setup lang="ts">
import {
  SociotypeCard,
  SociotypeCardHeader,
  sociotypeModel,
  SociotypeProvider,
} from "@entities/sociotypes";
import { SociotypesCardGroupsAndQuadrasWidget } from "@widgets/sociotypes";
import type { SociotypeIdType, TallyType } from "@types";
import TestDichotomyScales from "./TestDichotomyScales.vue";

const props = defineProps<{
  result: SociotypeIdType;
  maxPerPair: number;
  tallyScale: TallyType;
}>();

const resultColor = computed(() => {
  return sociotypeModel.getSociotypeBy(props.result).quadra;
});
</script>

<template>
  <div class="test-result-wrapper">
    <section class="test-result">
      <UiText preset="body" color="white" force-tag="h2">
        Судя по тесту ваш социотип…
      </UiText>
      <SociotypeProvider :id="result">
        <template #default="{ data }">
          <SociotypeCard
            :data="data"
            :gender="sociotypeModel.getGenderByYung(data.id)"
            mini
          >
            <template #header>
              <SociotypeCardHeader :data="data" mini />
            </template>
            <template #groups-and-quadras>
              <SociotypesCardGroupsAndQuadrasWidget v-bind="data" />
            </template>
          </SociotypeCard>
        </template>
      </SociotypeProvider>

      <TestDichotomyScales
        :tally="props.tallyScale"
        :max-per-pair="props.maxPerPair"
        :color="resultColor"
        class="test-result__scales"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.test-result-wrapper {
  padding: 64px 32px;
  max-width: 100%;

  border-radius: 4px;
  background-color: colors.$black;
}

.test-result {
  margin: 0 auto;
  max-width: 280px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 12px;

  &__scales {
    margin-top: 12px;
  }
}
</style>
