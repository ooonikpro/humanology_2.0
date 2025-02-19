<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeCardYungs,
  SociotypeProvider,
  SociotypeSignsBlock,
} from "@entities/sociotypes";
import { useRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";

const route = useRoute("kids.card");

const Content = defineAsyncComponent(
  () => import(`./content/${route.params.id}.vue`),
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

    <SociotypeSignsBlock title="Описание">
      <component :is="Content" />
    </SociotypeSignsBlock>
  </SociotypeProvider>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.kids-id-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$white;
}
</style>
