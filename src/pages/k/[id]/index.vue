<script lang="ts" setup>
import { useRoute } from "vue-router";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeCardYungs,
  SociotypeProvider,
} from "@entities/sociotypes";

const route = useRoute("kids.card");

const Content = defineAsyncComponent(
  () => import(`./(content)/${route.params.id}.vue`),
);
</script>

<template>
  <SociotypeProvider
    v-slot="{ data }"
    :id="route.params.id"
    class="kids-id-page"
  >
    <SociotypeCard :data="data" age="kid">
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

    <div class="page">
      <component :is="Content" />
    </div>
  </SociotypeProvider>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-left: 12px;
  padding-right: 12px;

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.2;
    background-color: colors.$accent;
  }
}

a {
  text-decoration: underline;
}
</style>
