<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeProvider,
  SociotypeQuadras,
} from "@entities/sociotypes";

const router = useRouter();
const goToPage = (id: SociotypeIdType) =>
  router.push({ name: "kids.card", params: { id } });
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider
        v-slot="{ data }"
        :id="quadraProps.id"
        @click="goToPage(quadraProps.id)"
      >
        <SociotypeCard :data="data" age="kid" mini>
          <template #header>
            <SociotypeCardHeader :data="data" mini />
          </template>

          <template #groups-and-quadras>
            <SociotypeCardGroupsAndQuadras v-bind="data" />
          </template>
        </SociotypeCard>
      </SociotypeProvider>
    </template>
  </SociotypeQuadras>
</template>
