<script setup lang="ts">
import {
  ClubArticleCard,
  PsychotypeArticleCard,
  clubsAndPsychotypesModel,
} from "@entities/clubs-and-psychotypes";
import PageTitleWidget from "@widgets/PageTitleWidget.vue";

const clubList = clubsAndPsychotypesModel.getClubsInOrder();
const psychotypeList = clubsAndPsychotypesModel.getPsychotypesInOrder();
</script>

<template>
  <div class="clubs-and-groups">
    <PageTitleWidget icon-name="square-8" title="Клубы и Группы" />

    <hr />

    <div class="clubs-and-groups__body">
      <ClubArticleCard
        v-for="(clubId, $index) in clubList"
        :club-id="clubId"
        :key="clubId"
        :style="{ order: $index - 1 }"
      />

      <PsychotypeArticleCard
        v-for="(psychotypeId, $index) in psychotypeList"
        :psychotype-id="psychotypeId"
        :key="psychotypeId"
        :style="{ order: $index - 1 }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.clubs-and-groups {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
