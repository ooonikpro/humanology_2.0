<script setup lang="ts">
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeCardFooter,
  SociotypeModel,
  SociotypeProvider,
} from "@entities/sociotypes";

const ids = SociotypeModel.getSociotypeIds();
</script>

<template>
  <div>
    <SociotypeProvider v-for="id in ids" :id="id" :key="id" v-slot="slotProps">
      <SociotypeCard v-bind="slotProps.data">
        <template #body>
          <SociotypeCardBody v-bind="slotProps.data" />
        </template>

        <template #footer>
          <SociotypeCardFooter v-bind="slotProps.data" />
        </template>
      </SociotypeCard>
    </SociotypeProvider>
  </div>
</template>
