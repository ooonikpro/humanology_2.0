<script lang="ts" setup>
const props = defineProps<{ sociotypeId: string; tabName: string }>();

const pageComponent = defineAsyncComponent(
  () => import(`@pages/s/${props.sociotypeId}/${props.tabName}/index.vue`),
);
</script>

<template>
  <ClientOnly>
    <Suspense>
      <component :is="pageComponent" />
    </Suspense>
  </ClientOnly>
</template>
