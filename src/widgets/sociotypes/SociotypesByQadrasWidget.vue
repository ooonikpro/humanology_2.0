<script lang="ts" setup>
import { useRouter } from "@kitbag/router";
import type { SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeProvider,
  SociotypeQuadras,
} from "@entities/sociotypes";

const router = useRouter();
const goToPage = (id: SociotypeIdType) =>
  router.push("sociotypes", { id, tabName: "card" });
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider
        v-slot="{ data }"
        :id="quadraProps.id"
        @click="goToPage(quadraProps.id)"
      >
        <SociotypeCard :data="data" mini>
          <template #body>
            <SociotypeCardBody v-bind="data" />
          </template>
        </SociotypeCard>
      </SociotypeProvider>
    </template>
  </SociotypeQuadras>
</template>

<style lang="scss" scoped></style>
