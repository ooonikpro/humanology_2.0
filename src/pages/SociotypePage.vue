<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeCardFooter,
  SociotypeProvider,
  SociotypeMentality,
  SociotypeReininSigns,
  SociotypeYungDichtomy,
  SociotypeBriefDescription,
  SociotypeGroupsAndQuadras,
} from "@entities/sociotypes";
import TabsWidget from "@widgets/TabsWidget.vue";
</script>

<template>
  <SociotypeProvider
    v-slot="{ data }"
    class="sociotype-page"
  >
    <SociotypeCard :data="data">
      <template #body>
        <SociotypeCardBody v-bind="data" />
      </template>

      <template #footer>
        <SociotypeCardFooter v-bind="data" />
      </template>
    </SociotypeCard>

    <TabsWidget />

    <SociotypeBriefDescription v-bind="data" />

    <SociotypeMentality v-bind="data" />

    <SociotypeGroupsAndQuadras v-bind="data" />

    <SociotypeYungDichtomy v-bind="data" />

    <SociotypeReininSigns v-bind="data" />
  </SociotypeProvider>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$beige;
}
</style>
