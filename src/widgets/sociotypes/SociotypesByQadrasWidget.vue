<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeProvider,
  SociotypeQuadras,
  sociotypeModel,
} from "@entities/sociotypes";

const router = useRouter();
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider
        v-slot="{ data }"
        :id="quadraProps.id"
        @click="router.push($appRoutes.sociotypeCard(quadraProps.id))"
      >
        <SociotypeCard
          :data="data"
          :gender="sociotypeModel.getGenderByYung(data.id)"
          mini
        >
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
