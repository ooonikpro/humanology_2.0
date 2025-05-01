<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeProvider,
  SociotypeQuadras,
} from "@entities/sociotypes";
import SociotypesCardGroupsAndQuadrasWidget from "./SociotypesCardGroupsAndQuadrasWidget.vue";

const router = useRouter();
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider v-slot="{ data }" :id="quadraProps.id">
        <SociotypeCard :data="data" age="kid" mini>
          <template #header>
            <SociotypeCardHeader :data="data" mini />
          </template>

          <template #groups-and-quadras>
            <SociotypesCardGroupsAndQuadrasWidget v-bind="data" />
          </template>
        </SociotypeCard>
      </SociotypeProvider>
    </template>
  </SociotypeQuadras>
</template>
