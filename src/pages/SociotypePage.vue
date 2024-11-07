<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeCardFooter,
  SociotypeProvider,
  SociotypeReininSigns,
  SociotypeYungDichtomy,
} from "@entities/sociotypes";
import TabsWidget from "@widgets/TabsWidget.vue";
</script>

<template>
  <SociotypeProvider
    :id="$route.params.id"
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
