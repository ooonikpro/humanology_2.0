<script lang="ts" setup>
import { useRoute, useRouter, type LocationQuery } from "vue-router";
import type { HumanFunctionType } from "@types";

const props = defineProps<{
  predicate: (query: LocationQuery) => boolean;
}>();

const route = useRoute();
const router = useRouter();

const isOpen = ref(false);

const handleOpen = () => {
  isOpen.value = true;
};
const handleClose = () => {
  isOpen.value = false;
};
const handleAfterClose = () => {
  router.replace(route.path.split("?")?.[0] ?? route.path);
};

watch(
  () => route.query,
  (newQuery) => {
    if (props.predicate(newQuery)) {
      handleOpen();
    } else {
      handleClose();
    }
  },
  { immediate: true },
);

type SociotypeQueryType = { f?: HumanFunctionType };
</script>

<template>
  <Teleport to="body">
    <slot
      v-bind="{
        isOpen,
        data: {
          ...route.params,
          ...(route.query as SociotypeQueryType),
        },
        handleOpen,
        handleClose,
        handleAfterClose,
      }"
    ></slot>
  </Teleport>
</template>
