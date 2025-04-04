<script lang="ts" setup>
const props = defineProps<{ sociotypeId: string; tabName: string }>();

const pageComponent = computed(() => {
  // Строка для триггера
  // функция с динамическим импортом вызывается только при отрисовке
  // а для того чтобы отработал триггер Вью должен понимать от чего зависит вычисления
  const _unusedStr = props.sociotypeId + props.tabName;

  return defineAsyncComponent(
    () => import(`@pages/s/${props.sociotypeId}/${props.tabName}/index.vue`),
  );
});
</script>

<template>
  <ClientOnly>
    <Suspense>
      <component :is="pageComponent" :sociotypeId="sociotypeId" />
    </Suspense>
  </ClientOnly>
</template>
