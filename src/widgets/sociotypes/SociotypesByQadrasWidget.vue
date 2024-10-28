<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeProvider,
  SociotypeQuadras,
} from "@entities/sociotypes";
</script>

<template>
  <SociotypeQuadras>
    <template v-slot="quadraProps">
      <SociotypeProvider :id="quadraProps.id" v-slot="{ data }">
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
