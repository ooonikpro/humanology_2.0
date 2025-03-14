<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardYungs,
  SociotypeCardHeader,
  SociotypeProvider,
  sociotypeModel,
  useSociotypePageRoute,
} from "@entities/sociotypes";
import DefaultLayout from "./default.vue";

const { sociotypeId } = useSociotypePageRoute();
</script>

<template>
  <DefaultLayout>
    <SociotypeProvider
      v-slot="{ data }"
      :id="sociotypeId"
      class="sociotype-page"
    >
      <SociotypeCard
        :data="data"
        :gender="sociotypeModel.getGenderByYung(data.id)"
        age="kid"
        bordered
        isShowToggle
      >
        <template #header>
          <SociotypeCardHeader :data="data" />
        </template>

        <template #groups-and-quadras>
          <SociotypeCardGroupsAndQuadras v-bind="data" />
        </template>

        <template #yungs>
          <SociotypeCardYungs v-bind="data" />
        </template>
      </SociotypeCard>

      <NuxtPage />
    </SociotypeProvider>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$white;
}
</style>
