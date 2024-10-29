<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeProvider,
  SociotypeQuadras,
} from "@entities/sociotypes";

const router = useRouter();
const goToPage = (id: string) => router.push(`/sociotypes/${id}`);
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider
        :id="quadraProps.id"
        v-slot="{ data }"
        @click="goToPage(quadraProps.id)"
      >
        <SociotypeCard mini :data="data">
          <template #body>
            <SociotypeCardBody v-bind="data" />
          </template>
        </SociotypeCard>
      </SociotypeProvider>
    </template>
  </SociotypeQuadras>
</template>

<style lang="scss" scoped></style>
